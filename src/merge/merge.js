"use strict";
// 声明合并
// 把程序中散落各地的变量进行合并
var aa = {
    x: 3,
    y: 5,
    foo: function (bar) {
        return bar;
    }
};
// 命名空间和函数的声明合并    命名空间放后面
// 相当于给函数增加了属性
function Lib() { }
(function (Lib) {
    Lib.version = '1.0';
})(Lib || (Lib = {}));
// 命名空间和类的声明合并    命名空间放后面
// 相当于给类添加了静态属性
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
(function (Lib) {
    Lib.state = '2.0';
})(Lib || (Lib = {}));
// 命名空间和枚举的声明合并
// 给枚举类型增加了一个方法
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Yello"] = 1] = "Yello";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
(function (Color) {
    function mix() { }
    Color.mix = mix;
})(Color || (Color = {}));
// 命名空间是照顾老的开发模式
