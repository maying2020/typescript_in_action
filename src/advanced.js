"use strict";
// 交叉类型取所有类型的并集
var pet = {
    run: function () { },
    jump: function () { }
};
// 联和类型
var a = 'a';
// 字符串联合类型
var b = 'b';
// 数字联合类型
var c = 1;
// 对象的联和类型(实例取所有类成员的交集)
var Dog = /** @class */ (function () {
    function Dog() {
    }
    Dog.prototype.run = function () { };
    Dog.prototype.eat = function () { };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.jump = function () { };
    Cat.prototype.eat = function () { };
    return Cat;
}());
var Master;
(function (Master) {
    Master[Master["Boy"] = 0] = "Boy";
    Master[Master["Girl"] = 1] = "Girl";
})(Master || (Master = {}));
function getPet(master) {
    var pet = master === Master.Boy ? new Dog() : new Cat();
    pet.eat();
    // pet.run();   
    return pet;
}
function area(s) {
    switch (s.kind) { //通过kind创建类型保护区块 
        case 'square':
            return s.size * s.size;
        case 'rectangle':
            return s.height * s.width;
        case 'circle':
            return Math.PI * s.r & s.r;
        default:
            return (function (e) { throw new Error(e); })(s);
    }
}
