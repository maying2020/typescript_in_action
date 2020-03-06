"use strict";
// 泛型：不预先确定的数据类型具体的类型在使用的类型才能确定
function log(value) {
    console.log(value);
    return value;
}
// 进行泛型的改造
function log1(value) {
    console.log(value);
    return value;
}
// 调用泛型
log1(['a', 'b']);
//使用ts的类型推断调用
log1(['a', 'b']);
var myLog = log1;
var myLog1 = log1;
// interface Log2<T= string>{
//   (value:T):T
// } 定义一个默认类型
// let myLog1:Log2 = log1
// myLog1('1')
