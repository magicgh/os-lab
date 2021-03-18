// 禁用标准库
#![no_std]

// 不使用 main 函数作为程序入口
#![no_main]

// 内嵌汇编及内嵌整个汇编文件
#![feature(llvm_asm)]
#![feature(global_asm)]

// 打印 panic 信息
#![feature(panic_info_message)]

#[macro_use]
mod console;
mod panic;
mod sbi;
mod interrupt;

// 汇编入口
global_asm!(include_str!("entry.asm"));

// Rust 入口函数

#[no_mangle]
pub extern "C" fn rust_main() -> ! {
    // 初始化各种模块
    interrupt::init();

    unsafe {
        llvm_asm!("ebreak"::::"volatile");
    };

    loop{}
    // panic!("end of rust_main");
}
