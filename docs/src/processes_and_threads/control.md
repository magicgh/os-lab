# Control

## Switch Processes

* 暂停当前运行进程，从运行状态变为其他状态
* 调度另一个进程从就绪状态变为运行状态

When to Switch Processes:

* Clock interrupt
* I/O interrupt
* Memory fault

### 要求

* 切换前，保存进程上下文（保存至 PCB）
* 切换后，恢复进程上下文
* 快速切换

### 进程生命周期的信息

* 代码
* 数据
* 状态寄存器：CR0, IP
* 通用寄存器：AX, BX, CX
* An associated set of system resources

### 上下文切换

以进程 P0、进程 P1 为例：  
P0 -- 中断或系统调用 -- P0 保存 -- P1 恢复 -- P1 -- 中断或系统调用 -- P1 保存 -- P0 恢复 -- P0
