"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Asin = /** @class */ (function () {
    function Asin(name) {
        this.name = name;
    }
    Asin.prototype.eat = function () { };
    Asin.prototype.sleep = function () { }; //可以定义自己的属性
    return Asin;
}());
var boy = {
    name: '',
    eat: function () { },
    run: function () { },
    cry: function () { }
};
// 接口继承类……………………^_^
var Auto = /** @class */ (function () {
    function Auto() {
        this.state = 1;
    }
    return Auto;
}());
var c = /** @class */ (function () {
    function c() {
        this.state = 1;
    }
    return c;
}());
var Bus = /** @class */ (function (_super) {
    __extends(Bus, _super);
    function Bus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bus;
}(Auto));
// 接口和类的关系
// 接口之间可以相互继承，实现接口的复用
// 类之间也可以相互继承 实现方法和属性的复用
// 接口是可以通过类来实现的，但是接口只能约束类的公有成员
//接口也可以抽离出类的成员 抽离的时候会包括公有成员 私有成员和受保护成员
