# Mutual Exclusion and Synchronization

## Key Terms

* Atomic operation: A function or action implemented as a sequence of one or more instructions that appears to be **indivisible**; that is, no other process can see an **intermediate** state or interrupt the operation. The sequence of instruction is guaranteed to execute as a group, or not execute at all, having no visible effect on system state. Atomicity guarantees isolation from concurrent processes.
* Critical section: A section of code within a process that requires **access to shared resources**, and that must not be executed while another process is in a corresponding section of code.
* Deadlock: A situation in which two or more processes are **unable to proceed** because each is waiting for one of the others to do something.
* Livelock: A situation in which two or more processes **continuously change** their states in response to changes in the other process(es) without doing any useful work.
* Mutual exclusion: The requirement that **when one process is in a critical section that accesses shared resources, no other process may be in a critical section** that accesses any of those shared resources.
* Race condition: A situation in which **multiple threads or processes read and write a shared data item**, and the final result depends on the **relative timing of their execution**.
* Starvation: A situation in which a runnable process is **overlooked indefinitely** by the scheduler; although it is able to proceed, it is never chosen.

## Critical Section

```
entry section
    critical section
exit section
    remainder section
```

* Critical Section: 进程中访问临界资源的一段需要互斥执行的代码

* Entry Section: 检查可否进入临界区的一段代码，如可进入，设置相应“正在访问临界区”标志
* Exit Section: 清除“正在访问临界区”标志

* Remainder Section: 代码中的其余部分
  
访问规则：空闲则入，忙则等待，有限等待

## Mutual Exclusion Software Support

Software approaches can be implemented for concurrent processes that execute ona single-processor or a multiprocessor machine with shared main memory. These approaches usually assume elementary mutual exclusion at the memory access level. That is, simultaneous accesses (reading and/or writing) to the same location in main memory are serialized by some sort of memory arbiter, although the order of access granting is not specified ahead of time.

### Dekker’s Algorithm

As mentioned earlier, any attempt at mutual exclusion must rely on some fundamental exclusion mechanism in the hardware. The most common of these is **the constraint that only one access to a memory location can be made at a time**. Using this constraint, we reserve a global memory location labeled `turn`. A process (P0 or P1) wishing to execute its critical section first examines the contents of `turn`. **If the value of `turn` is equal to the number of the process, then the process may proceed to its critical section. Otherwise, it is forced to wait.** Our waiting process repeatedly reads the value of `turn` until it is allowed to enter its critical section. This procedure is known as **busy waiting**, or **spin waiting**, because the thwarted process can do nothing productive until it gets permission to enter its critical section. Instead, it must linger and periodically check the variable; thus it consumes processor time (busy) while waiting for its chance.  
After a process has gained access to its critical section, and after it has completed that section, it must update the value of turn to that of the other process.  
In formal terms, there is a shared global variable:
int turn = 0;

#### First Attempt

```c++
// PROCESS 0 
while(turn != 0)
    /* do nothing */ ;
/* critical section*/;
turn = 1;

// PROCESS 1
while(turn != 1)
    /* do nothing */ ;
/* critical section*/;
turn = 0;
```

#### Second Attempt

```c++
// PROCESS 0 
while(flag[1] != 0)
    /* do nothing */ ;
flag[0] = 1;
/* critical section*/;
flag[0] = 0;

// PROCESS 1
while(flag[0] != 0)
    /* do nothing */ ;
flag[1] = 1;
/* critical section*/;
flag[1] = 0;
```

#### Third Attempt

```c++
// PROCESS 0 
flag[0] = 1;
while(flag[1] != 0)
    /* do nothing */ ;
/* critical section*/;
flag[0] = 0;

// PROCESS 1
flag[1] = 1;
while(flag[0] != 0)
    /* do nothing */ ;
/* critical section*/;
flag[1] = 0;
```

#### Fourth Attempt

```c++
// PROCESS 0 
flag[0] = 1;
while(flag[1] != 0) {
    flag[0] = 0;
    /* delay */ ;
    flag[0] = 1;
}
/* critical section*/;
flag[0] = 0;

// PROCESS 1
flag[1] = 1;
while(flag[0] != 0) {
    flag[1] = 0;
    /* delay */ ;
    flag[1] = 1;
}
/* critical section*/;
flag[1] = 0;
```

#### A Correct Solution

```c++
bool flag [2];
int turn;
void P0() {
    while (true) {
        flag[0] = true;
        while (flag[1]) {
            if (turn == 1) {
                flag[0] = false;
                while (turn == 1) 
                    /* do nothing */;
                flag[0] = true;
            }
        }
        /* critical section */;
        turn = 1;
        flag[0] = false;
        /* remainder */;
    }
}
void P1( )
{
    while (true) {
        flag[1] = true;
        while (flag[0]) {
            if (turn == 0) {
                flag[1] = false;
                while (turn == 0) 
                    /* do nothing */;
                flag[1] = true;
            }
        }
        /* critical section */;
        turn = 0;
        flag[1] = false;
        /* remainder */;
    }
}
void main () {
    flag[0] = false;
    flag[1] = false;
    turn = 1;
    parbegin (P0, P1);
}
```

### Peterson’s Algorithm

Dekker’s algorithm solves the mutual exclusion problem, but with a rather complex program that is difficult to follow and whose correctness is tricky to prove. Peterson has provided a simple, elegant solution.

```c++
bool flag[2];
int turn;
void P0() {
    while (true) {
        flag[0] = true;
        turn = 1;
        while (flag[1] && turn == 1) /* do nothing */;
        /* critical section */;
        flag[0] = false;
        /* remainder */;
    }
}
void P1() {
    while (true) {
        flag[1] = true;
        turn = 0;
        while (flag[0] && turn == 0) /* do nothing */;
        /* critical section */;
        flag[1] = false;
        /* remainder */
    }
}
void main() {
    flag[0] = false;
    flag[1] = false;
    parbegin (P0, P1);
}
```

## Mutual Exclusion Hardware Support

### Atomic Operation

原子操作指不存在任何中断或失败的操作

* 要么操作成功完成
* 要么操作没有执行
* 不会出现部分执行的情况  

操作系统需要利用同步机制在并发执行的同时，保证一些操作是原子操作。

* 用两个原子指令实现一个锁（lock）
  * Lock.acquire()
    * 在锁被释放前一直等待，然后获得锁
    * 如果两个线程都在等待同一个锁，并且同时发现锁被释放了，那么只有一个能够获得锁
  * Lock.release()
    * 解锁并唤醒任何等待中的进程

### Interrupt Disabling

禁用硬件中断：没有中断，没有上下文切换，因此没有并发

```c++
local_irq_save(unsigned long flags); 
critical section
local_irq_restore(unsigned long flags); 
```

Because the critical section cannot be interrupted, mutual exclusion is guaranteed. The price of this approach, however, is high. The efficiency of execution could be noticeably degraded because the processor is limited in its ability to interleave processes. Another problem is that this approach will not work in a multiprocessor architecture. When the computer includes more than one processor, it is possible (and typical) for more than one process to be executing at a time. In this case, disabled interrupts do not guarantee mutual exclusion.

* 进入临界区：禁止所有中断，并保存标志
* 离开临界区：使能所有中断，并恢复标志
* 缺点：
  * 禁用中断后，进程无法被停止，可能导致其他进程处于饥饿状态

  * 临界区可能很长，可能存在对硬件的影响

### Special Machine Instructions

At the hardware level, as was mentioned, access to a memory location excludes any other access to that same location. With this as a foundation, processor designers have proposed several machine instructions that carry out two actions atomically, such as reading and writing or reading and testing, of a single memory location with one instruction fetch cycle. During execution of the instruction, access to the memory location is blocked for any other instruction referencing that location.

#### Compare & Swap Instruction

```c++
int compare_and_swap (int *word, int testval, int newval) {
    int oldval;
    oldval = *word
    if (oldval == testval) *word = newval;
    return oldval;
}
```

This atomic instruction therefore has two parts: A compare is made between a memory value and a test value; if the values are the same, a swap occurs. The entire compare&swap function is carried out atomically—that is, it is not subject to interruption.
Example:

```c++
/* program mutualexclusion */
const int n = /* number of processes */;
int bolt;
void P(int i)
{
    while (true) {
    while (compare_and_swap(bolt, 0, 1) == 1)
        /* do nothing */;
    /* critical section */;
    bolt = 0;
    /* remainder */;
    }
}
void main() {
    bolt = 0;
    parbegin (P(1), P(2), ... ,P(n));
}
```

A shared variable `bolt` is initialized to 0. The only process that may enter its critical section is one that finds `bolt` equal to 0. All other processes attempting to enter their critical section go into a busy waiting mode. When a process leaves its critical section, it resets `bolt` to 0; at this point one and only one of the waiting processes is granted access to its critical section.

#### Exchange Instruction

```c++
void exchange (int *register, int *memory) {
    int temp;
    temp = *memory;
    *memory = *register;
    *register = temp;
}
```

Example:

```c++
/* program mutualexclusion */
int const n = /* number of processes */;
int bolt;
void P(int i)
{
    while (true) {
        int keyi = 1;
        do exchange (&keyi, &bolt)
        while (keyi != 0);
        /* critical section */;
        bolt = 0;
        /* remainder */;
    }
}
void main() {
    bolt = 0;
    parbegin (P(1), P(2), ..., P(n));
}
```

A shared variable `bolt` is initialized to 0. Each process uses a local variable key that is initialized to 1. The only process that may enter its critical section is one that finds `bolt` equal to 0. It excludes all other processes from the critical section by setting `bolt` to 1.  
When a process leaves its critical section, it resets `bolt` to 0, allowing another process to gain access to its critical section.  
Note the following expression always holds because of the way in which the variables are initialized and because of the nature of the exchange algorithm:
$$\mathrm{bolt}+\sum_i\mathrm{key}_i=n$$
If bolt = 0, then no process is in its critical section. If bolt = 1, then exactly one process is in its critical section, namely the process whose key value equals 0.

#### Test & Set Instruction

```c++
bool test_and_set (bool *target) ‏{
    boolean rv = *target;
    *target = true;
    return rv:
}
```

Example:

```c++
/* program mutualexclusion */
const int n = /* number of processes */;
int bolt;
void P(int i)
{
    while (true) {
    while (test_and_set(bolt) == 1)
        /* do nothing */;
    /* critical section */;
    bolt = 0;
    /* remainder */;
    }
}
void main() {
    bolt = 0;
    parbegin (P(1), P(2), ... ,P(n));
}
```

忙等待锁 (Busy Waiting Lock)：

```c++
Lock::Acquire() {
   while (test_and_set(bolt));
     //spin
}
Lock::Release() {
    bolt = 0;
}

```

无忙等待锁：

```c++
class Lock {
   int bolt = 0;
   WaitQueue q;
}

Lock::Acquire() {
   while (test_and_set(bolt)) {
      // add this TCB to wait queue q;
      schedule();
   }
}

Lock::Release() {
   bolt = 0;
   remove one thread t from q;
   wakeup(t);
}

```

### Advantages

* It is applicable to any number of processes on either a single processor or multiple
processors sharing main memory.
* It is simple and therefore easy to verify.
* It can be used to support multiple critical sections; each critical section can be
defined by its own variable.

### Disadvatages

* **Busy waiting** is employed: Thus, while a process is waiting for access to a critical section, it continues to consume processor time.
* **Starvation is possible**: When a process leaves a critical section and more than one process is waiting, the selection of a waiting process is arbitrary. Thus, some process could indefinitely be denied access.
* **Deadlock is possible**: Consider the following scenario on a single-processor system. Process P1 executes the special instruction (e.g., `compare&swap`, `exchange`) and enters its critical section. P1 is then interrupted to give the processor to P2, which has higher priority. **If P2 now attempts to use the same resource as P1, it will be denied access because of the mutual exclusion mechanism.** Thus, it will go into a busy waiting loop. However, P1 will never be dispatched because it is of lower priority than another ready process, P2.

## Summary

* 锁是一种高级的同步抽象方法
  * 互斥可以使用锁来实现
  * 需要硬件支持
* 常用的三种同步实现方法
  * 禁用中断（仅限于单处理器）
  * 软件方法（复杂）
  * 原子操作指令（单处理器或多处理器均可）
