"use strict";
var Shape;
(function (Shape) {
    function square(r) {
        return r + r;
    }
    Shape.square = square;
})(Shape || (Shape = {}));
console.log(Shape.square(1));
console.log(Shape.circle(3));
// 命名空间最好在一个全局的环境中使用
//  import circle = Shape.circle 命名空间的别名
// 内部模块 隔离作用域
// ES6模块引入 内部模块的名称已经不叫了
// TS保留的考虑 是对全局变量时代的兼容，现在在一个完全的模块化系统中我们可以不必使用命名空间
