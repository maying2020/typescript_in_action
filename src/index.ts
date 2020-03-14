// import './datatype';
// import './class'
// import './class-interface.ts'
// import './fanxing'
// import './typeProto'
// import './basic/advanced'
// import './es6/c'

import $ from 'jquery'

let hello: string = 'Hello TypeScript'

document.querySelectorAll('.app')[0].innerHTML = hello

$('.app').css('color','red')

globalLib({x:1})
globalLib.doSomething(); 

import moudleLib from './libs/moudle-libs'

moudleLib.doSomething();

// import umdLib from './libs/umd-libs'
// moudleLib.doSomething();

// 给类库参加一个自定义的方法

import m  from  'moment'

declare module 'moment' {
  export function myFunction():void;
}

m.myFunction = () =>{}

// 给全局类库增加方法
declare global{
  namespace globalLib{
    function doAnything():void;
  }
}

globalLib.doAnything = () =>{}

// 声明文件的依赖

// <reference types="sizzle" />
// <reference path="JQueryStatic.d.ts" />
//<reference path="JQuery.d.ts" />
// <reference path="misc.d.ts" />
// <reference path="legacy.d.ts" />
// export = jQuery;
