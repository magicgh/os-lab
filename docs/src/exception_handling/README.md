# Exception Handling

## Basic principles and concepts

* System Call: 应用程序**主动**向操作系统发出服务请求。
* Exception: 由于非法指令或其他原因导致**当前指令执行失败**，（如：内存出错）后的处理请求。
* Hardware Interrupt: 来自硬件设备的处理请求。

### Summary

* 源头：
  * 中断：外设
  * 异常：应用程序意想不到的行为
  * 系统调用：应用程序请求 OS 服务
* 相应方式
  * 中断：异步
  * 异常：同步
  * 系统调用：异步或同步
* 处理机制
  * 中断：持续且对应用程序透明
  * 异常：杀死或重新继续执行
  * 系统调用：等待和持续

## Interrupt Handling

### Establish Interrupt Mechanisms

* 建立中断服务例程
  * 初始化
    * 设置时钟中断触发次数
    * 设置 `sie` 的 TI 使能 STIE 位
  * 服务例程
    * 调用 OpenSBI 提供的接口设置下次时钟中断触发时间
* 让 CPU 能响应中断
  * 硬件设置
    * sstatus: 保存全局中断的使能位
    * sie: 指出 CPU 目前能处理或忽略的中断
    * stvec: 中断入口地址
  * 初始化
    * 设定 `sie` 的 TI 使能 STIE 位
    * 设定 `sstatus` 的使能中断 SIE 位
    * 实现中断服务总控函数
    * 设置 `stvec` 指向中断服务总控函数的入口地址
* 相应并处理中断
  * 硬件设置
    * sepc: 保存中断的指令地址
    * pc: 设置为 `stvec`
    * scause: 设置中断的来源
    * sstatus: SIE 位置零以禁用中断
    * stval: 保存了中断相关的附加信息
  * 软件保存
    * x[0-32]: 通用寄存器
    * pc: 设置为 `stvec`
    * scause: 设置为中断的来源
    * sstatus: SIE 位置零以禁用中断
    * stval: 保存了中断相关的附加信息
  * 产生中断后
    * 硬件设置
    * 软件保存被打断现场
    * 执行软件实现的中断服务例程
    * 软件恢复被打断现场
    * 继续执行
  * 硬件中断服务例程可被打断
    * 不同硬件中断源可能在硬件中断处理时出现
    * 中断请求会保持到 CPU 做出响应
    * 硬件中断服务例程中需要临时禁止中断请求
* 保存或恢复现场
  * 还需要为被中断的服务保存和恢复当时程序运行时的上下文
    * x[0-32]: 通用寄存器
    * sstatus: 系统系状态
    * sepc: 触发异常/中断的指令地址
    * scause: 指示发生异常/中断的种类
    * stval: 保存了发生异常/中断的附加信息
  * SAVE_ALL 寄存器

## System Call

When an application wants to print a string, it will trigger the system call `write()`.

* 系统调用
  * 在 RISC-V 中，`ecall` 和 `sret` 指令用于系统调用
  * 堆栈切换和特权级的转换
* 函数调用
  * 在 RISC-V 中，`call` 和 `ret` 指令用于系统调用
  * 无堆栈切换和特权级的转换

### Expenditure of System Call

开销会超过函数调用，主要来源：

* 切换内核堆栈
* 验证参数
* 切换页表
* 拷贝数据

### Implementation of System Call

* 应用发起请求
* `std lib` 发出系统调用请求
  * 发出设置系统调用号和参数，发出 `ecall`
* 硬件设置
  * sepc：保存请求后的指令地址
  * pc: 设置为 `stvec`
  * scause: 设置为 `ecall from u-mode`
  * sstauts: SIE 位置零以禁用中断
  * stval: 保存了相关的附件信息
* 软件保存被打断现场
* 执行软件实现的中断服务例程
* 软件恢复现场
* 应用继续执行
