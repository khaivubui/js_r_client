#[no_mangle]
pub extern fn nth_fibonacci(num: i32) -> i32 {
    if num < 2 { return num; }
    nth_fibonacci(num - 1) + nth_fibonacci(num - 2)
}
