# Semaphore

## Key Terms

* Semaphore: An integer value used for signaling among processes. Only three operations may be
performed on a semaphore, all of which are **atomic**: **initialize, decrement, and increment**. The decrement operation may result in the blocking of a process, and the increment
operation may result in the unblocking of a process. Also known as a counting
semaphore or a general semaphore.

* Binary semaphore: A semaphore that takes on only the **values 0 and 1**.

* Mutex: Similar to a binary semaphore. A key difference between the two is that **the process that locks the mutex (sets the value to 0) must be the one to unlock it (sets the value to 1)**.
* Condition variable: A data type that is used to block a process or thread until a particular condition is true.
* Monitor: A programming language construct that **encapsulates variables, access procedures, and
initialization code within an abstract data type**. The monitor’s variable may only be accessed via its access procedures and **only one process may be actively accessing the monitor at any one time**. The access procedures are critical sections. A monitor may have a queue of processes that are waiting to access it.
* Event flags: A memory word used as a synchronization mechanism. Application code may associate a different event with each bit in a flag. A thread can wait for either a single event or a combination of events by checking one or multiple bits in the corresponding flag. The thread is blocked until all of the required bits are set (AND) or until at least one of the bits is set (OR).
* Mailboxes/messages: A means for two processes to exchange information and that may be used for synchronization.
* Spinlocks: Mutual exclusion mechanism in which a process executes in an infinite loop waiting for the value of a lock variable to indicate availability.

## Introduction

信号量是操作系统提供的一种协调共享资源访问的方法，由一个整形（sem）变量和两个原子操作组成。

* P()：减少
  * sem -1
  * 若 sem <0，进入等待，否则继续
* V()：增加
  * sem +1
  * 若 sem $\leq$ 0，则唤醒一个进程

* 信号量是**被保护**的整数变量：初始化完成后，只能通过 P()，V() 进程修改且 PV 是原子操作。
* P() 可能阻塞，V() 不会阻塞

For signaling, special variables called semaphores are used.

* To transmit a signal via semaphore s, a process executes the primitive semSignal (s).
* To receive a signal via semaphore s, a process executes the primitive semWait (s); if the corresponding signal has not yet been transmitted, the process is suspended until the transmission takes place.

To achieve the desired effect, we can view the semaphore as a variable that has an integer value upon which only three operations are defined:

1. A semaphore may be initialized to a nonnegative integer value.
2. The semWait operation decrements the semaphore value. If the value becomes negative, then the process executing the semWait is blocked. Otherwise, the process continues execution.
3. The semSignal operation increments the semaphore value. If the resulting value is less than or equal to zero, then a process blocked by a semWait operation, if any, is unblocked.

```c++
struct semaphore {
    int count;
    queueType queue;
};
void semWait(semaphore s) // P 操作
{
    s.count--;
    if (s.count < 0) {
    /* place this process in s.queue */;
    /* block this process */;
    }
}
void semSignal(semaphore s) { // V 操作
    s.count++;
    if (s.count<= 0) {
    /* remove a process P from s.queue */;
    /* place process P on ready list */;
    }
}
```

## Categories

* Binary Semaphore, may only take on the value 0 and 1.
  * Three Operations:
    1. binary semaphore may be initialized to 0 or 1.
    2. The `semWaitB` operations checks the semaphore value. If the value is zero, then the process executing the `semWaitB` is blocked.
    3. The `semSignalB` operation checks to see if any processes are blocked on this semaphore (semaphore value equals 0). If so, then a process blocked by a `semWaitB` operation is unblocked. If no processes are blocked, then the value of the semaphore is set to one.

      ```c++
      struct semaphore {
        int count;
        queueType queue;
      };
      void semWait(semaphore s){
        s.count--;
        if (s.count < 0) {
          /*place this process in s.queue*/;
          /*block this process*/;
        }
      }
      void semSignal(semaphore s) {
        s.count++;
        if (s.count<= 0) {
          /*remove a process P from s.queue*/;
          /*place process P on ready list*/;
        }
      }
      ```

* The nonbinary semaphore is often referred to as either a counting semaphore or a general semaphore.

## Application

### Mutual Exclusion

每个 Critical Section 设置一个信号量，初值为 1。

* Consider n processes, identified in the array P(i), all of which need access to the same resource. Each process has a critical section
used to access the resource.
* In each process, a semWait (s) is executed just before its critical section.
* If the value of s becomes negative, the process is blocked. If the value is 1, then it is decremented to 0 and the process immediately enters its critical section.

```c++
/* program mutualexclusion */
const int n = /* number of processes */;
semaphore s = 1;
void P(int i) {
  while (true) {
    semWait(s);
    /* critical section */;
    semSignal(s);
    /* remainder */;
  }
}
void main() {
  parbegin (P(1), P(2), . . . , P(n));
}
```

必须**成对使用** PV 操作。

### Conditional Synchronization

用信号量实现条件同步：每个条件同步设置一个信号量

```c++
condition = new Semaphore(0);
// Thread A
...M...
condition -> P();
.. N ..

// Thread B
.. X ..
condition -> V();
.. Y ..
```

### The Producer/Consumer Problem

* There are one or more producers generating some type of data (records, characters) and placing these in a buffer.（一个或多个生产者在生成数据后放在一个缓冲区里）
* There is a single consumer that is taking items out of the buffer one at a time.（单个消费者从缓冲区取出数据处理）
* The system is to be constrained to prevent the overlap of buffer operations, that is only one agent (producer or consumer) may access the buffer at any one time.（系统限制同时访问）

The problem is to make sure that the producer won’t try to add data into the buffer if it’s full, and that the consumer won’t try to remove data from an empty buffer.

```c++
/* program producerconsumer */
semaphore n = 0, s = 1;
void producer() {
  while (true) {
    produce();
    semWait(s);
    append();
    semSignal(s);
    semSignal(n);
  }
}
void consumer() {
  while (true) {
    semWait(n);
    semWait(s);
    take();
    semSignal(s);
    consume();
  }
}
void main() {
  parbegin (producer, consumer);
}
```