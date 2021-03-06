// 禁用标准库
#![no_std]

// 不使用 main 函数作为程序入口
#![no_main]

// 内嵌汇编及内嵌整个汇编文件`
#![feature(llvm_asm)]
#![feature(global_asm)]

// 打印 panic 信息
#![feature(panic_info_message)]

//! - `#![feature(alloc_error_handler)]`
//!   我们使用了一个全局动态内存分配器，以实现原本标准库中的堆内存分配。
//!   而语言要求我们同时实现一个错误回调，这里我们直接 panic
#![feature(alloc_error_handler)]

#[macro_use]
mod console;
mod panic;
mod sbi;
mod interrupt;
mod memory;

extern crate alloc;

// 汇编入口
global_asm!(include_str!("entry.asm"));

// Rust 入口函数

/// Rust 的入口函数
///
/// 在 `_start` 为我们进行了一系列准备之后，这是第一个被调用的 Rust 函数
#[no_mangle]
pub extern "C" fn rust_main() -> ! {
    // 初始化各种模块
    interrupt::init();
    memory::init();

    let remap = memory::mapping::MemorySet::new_kernel().unwrap();
    remap.activate();

    println!("kernel remapped");

    sbi::shutdown();
}