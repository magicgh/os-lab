# Scheduling

In a multiprogramming system, multiple processes exist concurrently in main memory. Each process alternates between using a processor and waiting for some event to occur, such as the completion of an I/O operation. The processor or processors are kept busy by executing one process while the others processes wait.

## Types of Processor Scheduling

## 调度

* 进程切换： CPU 资源占用者的切换
* 处理机调度：从就绪队列中挑选下个占用 CPU 资源的 **进程**，从多个 CPU 中挑选就绪进程可用的 CPU 资源
* 调度形式：非抢占式系统、可抢占系统
* 调度策略：如何从就绪队列中选择下一个执行进程

## Principles of Scheduling Algorithms

* CPU 使用率：处于忙状态的**时间百分比**
* 吞吐量：单位时间完成的**进程数量**
* 周转时间：进程从初始化到结束的**总时间**
* 等待时间：进程在就绪队列的总时间
* 响应时间：从提交请求到产生相应所花费的时间
*带宽和延迟不可兼得*

## 处理机调度策略的相应时间目标

* 减少响应时间
* 减少平均响应时间的波动（操作系统的计算延迟）

## 处理机调度策略的吞吐量目标

* 增加吞吐量：
  * 减少开销
  * 系统资源的高效开销
* 减少等待时间
  * 减少每个进程的等待时间
* 操作系统需要保证吞吐量不受用户交互的影响

## 处理机调度的公平性目标

*公平不等于公正（例如：富人和穷人缴同等额度的税）*

* 保证每个进程占用相同的 CPU 的时间
* 保证每个进程的等待时间相同
* 公平通常会增加平均响应时间，降低效率

## 调度算法

* 先来先服务算法：依据进程进入就绪状态的先后顺序排列（超市结账排队）
  * 优点：简单
  * 缺点：
    * 平均等待时间波动较大：短进程可能排在长进程后面；
    * I/O 和 CPU 资源利用较低：CPU 密集进程不使用 I/O，I/O 密集进程不使用 CPU
* 短进程优先算法：选择就绪队列中执行时间最短的进程占用 CPU 进入运行状态
  * 就绪队列按预期的执行时间来排序
  * 具有最优平均周转时间
  * 连续的段进程流会使长进程无法获得 CPU 资源，对长进程不公平
  * 需要预估下一个 CPU 计算的持续时间（问用户），欺骗就杀死 or 基于历史的记录学习（动量梯度下降） $t_i = \alpha t_i + (1-\alpha)\tau_{i-1}$
* 最高响应比优先算法  
    选择就绪队列中相应比 R 值最高的进程
    $$R = (w+s)/s$$
  * w: waiting time
  * s: service time  

  在短进程有限的基础上进行改进；不可抢占；关注进程的等待时间；防止无限期推迟
* 时间片轮转算法
  * 时间片： 分配处理及资源的基本时间单位
  * 算法思路：时间片结束后，按 FCFS (First come, first service) 算法切换到下一个就绪进程；每隔 $n-1$ 个时间片进程执行一个时间片 q
  * 举例：P1-53, P2-8, P3-68, P4-24 （时间片为20）  
        P1 0-20，P2 20-28，P3 28-48，P4 48-68（P2 已结束）  
        P1 68-88，P3 88-108，P4 108-112 （P4 已结束）  
        P1 112-125，P3 125-145 （P1 已结束）  
        P3 145-153 （P3已结束）  
        等待时间 $\begin{aligned}
            P1 &= (68-20) + (112-88) = 72 \\
            P2 &= (20-0) = 20 \\
            P3 &= (28-0)+(88-48)+(125-108)+(145-145) = 85 \\
            P4 &= (48-0)+(108-68)=88 \\
        \end{aligned}$  
        平均等待时间：$(72+20+85+88)/4 = 66.25$  
  * 时间片太大：等待时间太长
  * 时间片太小：开销太大
  
* 多级队列调度算法
  * 就绪队列被划分为几个对立的子队列，是上述几种算法的综合
  * 每个队列都有自己的调度策略
  * 队列之间的调度：
    * 固定优先级
    * 时间片轮转
  * 多级反馈队列算法
    * 进程可在不同队列间移动的多级队列算法
    * CPU 密集型进程优先级下降得很快
    * 对 I/O 密集型进程有利
* 公平共享调度算法
  * 公平共享调度控制用户对系统资源的访问

## 实时操作系统

* 定义:正确性依赖于其 **时间** 和 **功能** 两方面的操作系统
* 实时操作系统的性能指标
  * 时间约束的及时性
  * 速度和平均性能相对不重要
* 分类
  * 强实时操作系统
    * 要求在指定时间内必须完成重要的任务
  * 弱实时操作系统
    * 重要进程有高优先级

* Hard deadline: 错过任务实现会导致灾难性后果;必须验证,在最坏的情况下能够满足实现
* Soft deadline: 通常能满足任务时限;尽力保证满足任务时限
* 可调度性: 表示一个实时操作系统能够满足任务时限要求
* 实时调度算法
  * 速率单调调度算法: 通过 **周期** 安排优先级,周期越短优先级越高
  * 最早截止时间优先算法: 截止时间越早优先级越高

* 多处理器调度
  * 多个处理机组成一个多处理器系统
  * 处理机间可负载共享
  * 对称多处理机的进程分配:
    * 静态进程分配
    * 动态进程分配
  * 优先级反置: 操作系统中出现高优先级进程长时间等待低优先级进程所占用资源的现象
    * 解决方法: 优先级继承、优先级天花板协议

## Multiple Cores

## Cache Coherence

* Broadcast

* Flashing

## Algorithms

### SQMS (Single Queue Multiprocessor Schedule)

* Lack of scalability.
* Weak in cache affinity, violates the locality principle.

* Let process run in the same CPU, load balance will be invalid.

* Thus either assure the cache affinity or load balance.

### MQMS (Multi-Queue Multiprocessor Scheduling)

* Queues assign to different CPUs, and the scheduling algorithms can be different.

* 所有进程都可以保持在一个 CPU 上。
  
* 容易造成负载不均。

> 例如：某一个 CPU 任务执行完毕后，该 CPU 处于空转状态。因此只有通过进程的跨 CPU 迁移才能实现负载均衡。

* 具有可扩展性，队列数可根据 CPU 数进行扩展。

**如何进行进程工作的迁移？**

* Work stealing: 进程、页表基址等需要迁移。

## SMP and Linux Kernel

Linux Kernel 2.4 的 $O(n)$ 调度算法：*initial queue* 和 *expired queue*， 单队列机制。

Linux Kernel 2.6 的 $O(1)$ 调度算法：由 Ingo Molnar 设计，由于 Linux 系统有 140 中优先级，因此用一个 140 维的数组存放。在 active bitarray 中寻找 left-most bit 的位置，并在 APA 中寻找 APA[x]， 从 APA[x] 中 dequeue 一个 process，对于当前执行完的 process，重新计算 priority 再 enqueue 到 expired priority array 相应的队列 EPA[x] 中。在一定时间间隔后，要进行 load balance 分析。

**操作系统内核和驱动程序属于动态链接库。**

CPS 算法：通过计算进程消耗的 CPU 时间而不是优先级来进行调度。占用的资源越少，优先级就越高。但有些进程相比于其他进程更加重要即使执行的时间很长，因此会对每个进程进行赋权。分配给进程的运行时间 = 调度周期 × 进程权重/总权重之和。
Linux 引入 vruntime 进行计算：实际运行时间 × 1024/进程权重。

问题：新进程的 vruntime 为 0，则在相当长时间内都会保持抢占 CPU 的优势，因此应该设定一个最小值从而与老进程保持在一个合理的差距范围内。  

休眠进程在唤醒后的 vruntime 相比于其他 active 进程较小，因此会强占 CPU，因此在进程重新唤醒后应该对 vruntime 进行一些补偿。在 Linux 中 sched_features 的 WAKEUP_PREEMPT 位决定在休眠后是否主动强占 CPU。

进程从一个 CPU 迁移到另一个 CPU 上时 vruntime 会不会变？
当一个进程从 CPU_x 出去并进入 CPU_y 的运行队列中时，它的 vruntime = vruntime - min_vruntime_x + min_vruntime_y。

同时 vrumtime 可能会溢出，因此在比较 vruntime 的时候应该先减去 min_vruntime。

## (BFS) Brain Fuck Scheduler

一种时间片轮转算法的变种，在多处理机情况的但就绪队列选择，增加了队列互斥访问的开销。
