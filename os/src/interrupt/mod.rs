mod handler;
mod context;
mod timer;

// 中断相关的子模块

pub fn init() {
    handler::init();
    timer::init();
    println!("mod interrupt initialized");
}
