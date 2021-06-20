# Processes

## Definition

进程是指一个具有一定独立功能的程序在一个数据集合上的一次动态执行过程。

## Composition

* 代码
* 数据
* 状态寄存器：CR0, IP
* 通用寄存器：AX, BX, CX
* 进程占用系统资源

### Features

* 动态性：可动态地创建、结束进程
* 并发性：进程可以被独立调度并占用处理机运行
* 独立性：不同进程的工作不相互影响
* 制约性：因访问共享数据/资源或进程间同步而产生制约

### Relations and Discrepancies between programs

#### Relations

* Processes are the abstract of Programs in executive states  
  * Program = Static executive file  
  * Process = Program + executive states  
* Multiple executions of the some program are regarded as different processes.
* Necessary resources in executing processes: Memory and CPU

#### Discrepancies

* 进程时动态的，程序时静态的
  * 程序是有序代码的集合
  * 进程是程序的执行
* 进程是暂时的，程序时永久的
  * 进程是一个状态变化的过程
  * 程序可长久保存
* 进程与程序的组成不同：进程的组成包括程序、数据和进程控制块

## Process Control Block

操作系统用 PCB 来进程的基本状态，每个进程都在操作系统中有一个唯一对应的PCB

### 基本状态

包含：

* 进程的标识信息
* 处理机现场保存
* 进程的控制信息

At any given point in time, while the program is executing, this process can be uniquely characterized by a number of elements, including the following:

* Identifier: A unique identifier associated with this process, to distinguish it from all other processes.
* State: If the process is currently executing, it is in the running state.
* Priority: Priority level relative to other processes.
* Program counter: The address of the *next instruction* in the program to be executed.
* Memory pointers: Include pointers to the program code and data associated
with this process, plus any memory blocks shared with other processes.
* Context data: These are data that are present in registers in the processor while the process is executing.
* I/O status information: Includes outstanding I/O requests, I/O devices assigned to this process, a list of files in use by the process, and so on.
* Accounting information: May include the amount of processor time and clock time used, time limits, account numbers, and so on.

### 控制信息

* 调度和状态信息： 调度进程和处理及使用情况

* 进程间通信信息： 进程间通信相关的各种标识

* 储存管理信息

* 进程所用资源

* 有关数据结构的连接信息

### 组织形式

* 链表：同一状态进程的 PCB 组成链表
* 索引表：统一状态进程的 PCB 被同一索引指向

## Process States

### Creation

When a new process is to be added to those currently being managed, the OS builds the data structures used to manage the process, and allocates address space in main memory to the process.

#### Reasons

* New batch job
* Created by OS to provide a service
* Interactive log-on
* Spawned by existing process

### Ready

### Blocked/Waiting

A process that cannot execute until some event occurs, such as the completion of an I/O operation.

#### Reasons

* 请求并等 待系统服务
* 启动某种操作无法马上完成
* 需要的数据没有到达

### 强占

高优先级进程就绪
进程运行时间已结束

### 唤醒

### 结束

正常/错误/致命错误/被其他进程所杀

操作系统在 **中断** 中处理进程  
以 *Sleep()* 为例，创建 -> 就绪 -> 运行 -> 等待 -> 操作系统时钟中断 ...

Running, ready and blocked states are three basic states.  
Five-state Process Module: New, ready, running, blocked and exit.

等待状态结束后重新回到就绪队列。

## Suspended Processes

把一个进程从内存转到外存，低优先级让位高优先级。

* 等待挂起 (Block-suspend)
* 就绪挂起 (Ready-suspend)

## Activated Processes

把一个进程从外存转到内存

就绪挂起 -> 就绪：没有就绪进程或挂起或有高优先级的挂起进程  
等待挂起 -> 等待

## State Queue

根据不同优先级，就绪队列和等待队列可能有多个。

## Control

### Switch Processes

* 暂停当前运行进程，从运行状态变为其他状态
* 调度另一个进程从就绪状态变为运行状态

When to Switch Processes:

* Clock interrupt
* I/O interrupt
* Memory fault

#### 要求

* 切换前，保存进程上下文（保存至 PCB）
* 切换后，恢复进程上下文
* 快速切换

#### 进程生命周期的信息

* 代码
* 数据
* 状态寄存器：CR0, IP
* 通用寄存器：AX, BX, CX
* An associated set of system resources

#### 上下文切换

以进程 P0、进程 P1 为例：  
P0 -- 中断或系统调用 -- P0 保存 -- P1 恢复 -- P1 -- 中断或系统调用 -- P1 保存 -- P0 恢复 -- P0
