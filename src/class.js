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
// 基本的类
var Dog = /** @class */ (function () {
    function Dog() {
        //  private constructor(name:string){ //加private既不能被实力化 也不能被继承
        //   this.name = name
        // }
        this.name = 'sde';
        this.les = 4;
    }
    Dog.prototype.run = function () { };
    Dog.prototype.pri = function () { };
    Dog.prototype.pro = function () { };
    Dog.food = 'ceshi'; //静态成员只能通过类型来调用 通过子类访问不了 类的静态成员可以被继承
    return Dog;
}());
console.log('Dog', Dog.prototype);
var dog = new Dog();
// console.log('dog',dog)
// dog.pri //私有成员不可访问
// dog.pro
// console.log(Dog.food,dog.food) dog.food报错
// 类的继承
var husky = /** @class */ (function (_super) {
    __extends(husky, _super);
    function husky(name, color) {
        var _this = _super.call(this) || this;
        _this.color = color;
        _this.color = color;
        _this.pro();
        return _this;
    }
    return husky;
}(Dog));
var hu = new husky('ceshih', 'green');
// console.log('hu',hu,husky.food)
// ---------------------------------------------------
// 抽象类和多态
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.eat = function () {
        console.log('eat');
    };
    return Animal;
}());
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1(name) {
        var _this = _super.call(this) || this;
        _this.name = name;
        return _this;
    }
    Dog1.prototype.run = function () { };
    Dog1.prototype.sleep = function () {
        console.log('dog1 sleep!');
    };
    return Dog1;
}(Animal));
var dog1 = new Dog1('yishu');
// dog1.eat();
// dog1.sleep();
// let animal = new Animal();  // 无法创建抽象类的实例 它只能被继承
// ts中的多态
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.sleep = function () {
        console.log('cat sleep!');
    };
    return Cat;
}(Animal));
var cat = new Cat();
var animals = [dog1, cat];
animals.forEach(function (i) {
    i.sleep();
});
var workFlow = /** @class */ (function () {
    function workFlow() {
    }
    workFlow.prototype.step1 = function () {
        return this;
    };
    workFlow.prototype.step2 = function () {
        return this;
    };
    return workFlow;
}());
new workFlow().step1().step2();
var myFlow = /** @class */ (function (_super) {
    __extends(myFlow, _super);
    function myFlow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    myFlow.prototype.next = function () {
        return this;
    };
    return myFlow;
}(workFlow));
new myFlow().next().step1().next().step2();
