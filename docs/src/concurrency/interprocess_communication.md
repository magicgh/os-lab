# Interprocess Communication

## 并发进程的正确性

### 独立进程

* 不和其他进程共享资源或状态
* **确定性**：输入状态决定结果
* **可重现**：能够重现其实太监
* 调度顺序不重要

### 并发进程

* 在多个进程间有资源共享
* 不确定性
* 不可重现

### 并发正确性

* 执行过程是不确定和不可重现的
* 程序错误可能是间歇性发生的

### 并发执行的好处

* 共享资源
* 加速执行

## 原子操作

不会被线程调度机制打断的操作；这种操作一旦开始，就一直运行到结束，中间不会有任何上下文切换。

## 原子锁

Lock.acquire() and Lock.release()

## 进程的交互关系

* mutual exclusion
* deadlock
* starvation

## Critical Section

* 访问临界资源的代码，任何时候都要互斥执行

* entry section：检查是否可进入临界区的一段代码,如可进入就设置正在访问临界区标志。
* exit section: 清除标志。
* remainder section: 其他部分。

* 临界区访问规则：空闲则入，忙则等待，有效等待，让权等待（可选）
* 实现方法：禁用硬件中断方法、软件方法、更高级的抽象方法。

### 禁用硬件中断

* 没有中断，就没有上下文切换，因此没有并发
* 硬件将中断处理延迟到中断被启用之后
* 缺点：进程无法被停止下来，并发度较低；临界区很长，无法确定响应中断所需要的时间。
·

## 基于软件的同步解决方案

* 方法一：共享变量 `turn`，表示某线程在临界区。满足「忙则等待」，但有时不满足「空闲则入」。
* 方法二：共享 `flag[]` 数组，表示线程[] 是否在临界区。存在的问题，两个线程同时 check 对方，不满足忙则等待。
* 方法三：共享 `flag[]` 数组，表示线程[] 是否想在临界区。如果其他人想，等待；只有自己想，进入。不满足空闲则入，例如两个进程同时想进来。
* Peterson 算法：两个变量 `turn` 和 `flag[]`，`flag[]` 表示准备进入临界区。但两个进程同时想进入会出现 deadlock。

* Dekkers 算法

## 高级抽象的同步方法

* 锁是一种抽象的数据结构
  * 二进制变量（锁定、解锁）
  * Lock::Acquire
  * Lock::Release
  
## 原子操作

* Test and set
* exchange

## 用 TS 指令实现自旋锁

### Test and value

```c++
class Lock {
    int value = 0;
}

Lock::Acquire() {
    while(test-and-set(value)); //spin
}

Lock::Release() {
    value = 0;
}
```

### Exchange

``` c++
class Lock {
    bool tmp = 1, value = 0;
}

Lock::Acquire() {
    do {XCHG(&value, &tmp);}
    while(tmp == 1);
}

Lock::Release() {
    value = 0;
}
```

在锁的数据结构里加上一个等待队列。如果 value 是 0，则将其置 1，不进入 while 循环中；如果 value 是1，则进入 while 循环，将此进程写入到等待队列中，并执行调度程序，其他进程可以继续执行。  
释放锁时，把等待队列中的进程写入到就绪队列。
这种方法，使用放弃 CPU 使用权的方式来提高 CPU 利用效率。

## 总结

* 锁是一种高级的同步抽象方法
  * 互斥可以使用锁来实现
  * 需要硬件支持
* 常用的三种同步实现方法
  * 禁用中断（仅限于单处理器）
  * 软件方法（复杂）
  * 原子操作指令（单处理器或多处理器均可）