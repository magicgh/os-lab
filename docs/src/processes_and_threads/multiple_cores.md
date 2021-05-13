# Multiple Cores

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
