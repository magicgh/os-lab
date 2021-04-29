# Threads

多进程的问题：

1. 如何通信、如何共享数据
2. 系统开销较大，涉及进程的创建、进程的终止等

## Concepts

线程是进程的一部分，描述指令流执行状态，它是进程中指令执行流的最小单位，是 CPU 调度的基本单位。
**堆栈 (Heap) 资源不能共享**
线程是资源调度的基本单位，因此同一个进程内的线程共享其资源。

## Features

1. Resource ownership: A process includes a virtual address space to hold the process image; The process image is the collection of program, data, stack, and attributes defined in the process control block. From time to time, a process may be allocated control or ownership of resources,such as main memory, I/O channels, I/O devices, and files. The OS performs a protection function to prevent unwanted interference between processes with respect to resources.
2. **Scheduling/execution**: The execution of a process follows an execution path (trace) through one or more programs. This execution maybe interleaved with that of other processes. Thus, a process has an execution state (Running, Ready, etc.) and a dispatching priority, and is the entity that is scheduled and dispatched by the OS.

## Pros and Cons

优点：

1. 一个进程同时存在线程。
2. 多线程之间可以并发。
3. 线程间共享地址空间和文件等资源。

缺点：一个进程崩溃，其他进程也会崩溃。

<center>

![multithreading](./assets/multithreading.png)

</center>

## Implementation Methods

* User-Level threads: 用户级的线程库函数来完成线程的管理
* Kernel-Level threads
* Lightweight Process

### User-Level Threads

* 不依赖于操作系统
* 在用户空间实现线程机制
* 同一进程内的用户线程切换速度快
* 允许每个进程拥有自己的线程调度算法

不足：  

* 线程发起系统调用而阻塞时，整个线程进入等待。
* 不支持基于线程的*处理机*抢占，除非当前运行线程主动放弃
* 只能按进程分配 CPU 时间

## Kernel-Level Threads

由**内核**通过系统调用实现的线程机制，由**内核**实现线程的创建、终止和管理。

特点：

* 由内核维护 PCB 和 TCB
* 线程执行系统调用而被阻塞不影响其他线程
* 线程的创建、终止和切换相对较大：因为在内核中实现
* 基于线程数量的时间分配：线程数量多的进程 CPU 执行时间多

### Lightweight Process

内核支持的用户线程，一个进程可有一个或多个轻量级进程，每个 Lightweight 进程由一个**单独的内核进程**（即内核线程池）来支持，线程由内核线程池（独立内核进程）执行，但线程与内核线程池之间未绑定。
