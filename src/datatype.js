"use strict";
// 原始类型
var bool = false;
var num = 3;
var str = 'yishu';
// 数组
var arr = [1, 2, 3];
var arr2 = [1, 2, 3, '4'];
// 元组
var tuple = [0, '2'];
tuple.push(7);
console.log('tuple', tuple); // [0, "2", 7]
// tuple[2] //不可以访问
// 函数
// 写法一
var add = function (x, y) { return x + y; };
// 利用ts的类型推断功能返回值 可以省略
// 写法二
var compute; //定义函数类型
compute = function (a, b) { return a + b; };
// 对象
var obj = { x: 1, y: 2 };
obj.x = 3;
// symbol
var s1 = Symbol();
var s2 = Symbol();
console.log(s1 == s2); //false
// undefined null
var un = undefined;
var nu = null;
//void
// any
var ceshi;
// 枚举类型
var Role;
(function (Role) {
    Role[Role["ceshi1"] = 1] = "ceshi1";
    Role[Role["ceshi2"] = 2] = "ceshi2";
    Role[Role["ceshi3"] = 3] = "ceshi3";
    Role[Role["ceshi4"] = 4] = "ceshi4";
})(Role || (Role = {}));
console.log('Role', Role.ceshi1); //0
console.log('Role', Role[2]);
// 字符串枚举
var Message;
(function (Message) {
    Message["success"] = "\u6210\u529F\u4E86\uFF01";
    Message["fail"] = "\u5931\u8D25\u4E86\uFF01";
})(Message || (Message = {}));
console.log('Message', Message);
// 函数定义
function add1(a, b) {
    return a + b;
}
var add2;
add1(1, 2);
function add5(x, y) {
    return y ? x + y : x;
}
add5(3, 5);
function add6(x) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return x + rest.reduce(function (pre, cur) { return pre + cur; });
}
console.log('add6(1,2,3,4,5)', add6(1, 2, 3, 4, 5));
// 函数重载
// function add9(...rest:number[]):number;
// function add10(...rest:string[]):string;
// function add11(...rest:any[]):any{
//   //...
// }
