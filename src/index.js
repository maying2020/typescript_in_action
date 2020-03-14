"use strict";
// import './datatype';
// import './class'
// import './class-interface.ts'
// import './fanxing'
// import './typeProto'
// import './basic/advanced'
// import './es6/c'
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var hello = 'Hello TypeScript';
document.querySelectorAll('.app')[0].innerHTML = hello;
jquery_1.default('.app').css('color', 'red');
globalLib({ x: 1 });
globalLib.doSomething();
var moudle_libs_1 = __importDefault(require("./libs/moudle-libs"));
moudle_libs_1.default.doSomething();
// import umdLib from './libs/umd-libs'
// moudleLib.doSomething();
// 给类库参加一个自定义的方法
var moment_1 = __importDefault(require("moment"));
moment_1.default.myFunction = function () { };
globalLib.doAnything = function () { };
// 声明文件的依赖
// <reference types="sizzle" />
// <reference path="JQueryStatic.d.ts" />
//<reference path="JQuery.d.ts" />
// <reference path="misc.d.ts" />
// <reference path="legacy.d.ts" />
// export = jQuery;
