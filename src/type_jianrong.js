"use strict";
// 类型兼容性
// 当一个类型y可以被赋值给另一个类型x时  我们就可以说类型x兼容类型y
// x兼容y：x（目标类型） = y（源类型）
var s = 'a';
s = null;
var x = { a: 1, b: 2 };
var y = { a: 1, b: 2, c: 3 };
x = y; //y具备x的所有类型 就可以认定为是x的类型 那就是x类型可以兼容y类型
function hof(handler) {
    return handler;
}
// 函数兼容的必备条件
// 目标函数的参数个数要多于原函数
var handler1 = function (a) { };
hof(handler1);
var handler2 = function (a, b, c) { };
// hof(handler2)
// 可选参数和剩余参数
var aa = function (p1, p2) { };
var bb = function (p1, p2) { };
var ccc = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
};
// 固定参数兼容可选参数和剩余参数的
aa == bb;
aa == ccc;
// 可选参数是不兼容固定参数和剩余参数的
// bb == aa
// bb == ccc
// 剩余参数可以兼容固定参数和可选参数
ccc == aa;
ccc == bb;
// 参数类型必须要匹配
var handler3 = function (a) { };
// hof(handler3) //类型不兼容
