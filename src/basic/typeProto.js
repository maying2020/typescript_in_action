"use strict";
// 类型保护
var Java = /** @class */ (function () {
    function Java() {
    }
    Java.prototype.helloJava = function () {
        console.log('hello java!');
    };
    return Java;
}());
var javaScript = /** @class */ (function () {
    function javaScript() {
    }
    javaScript.prototype.javaScript = function () {
        console.log('hello javaScript!');
    };
    return javaScript;
}());
// 类型断言法则 
// function getLanguage(type: Type){
// let lang = type ===  Type.Strong ? new Java(): new javaScript;
// if((lang as Java).helloJava){
//   (lang as Java).helloJava()
// } else {
//   (lang as javaScript).javaScript()
// }
// return lang
// }
// 缺点：需要多次添加，代码可读性差，类型保护机制就是为了解决这个问题的
// 类型保护
// ts能够在特定的区块中保证变量属于某种确定的类型
// 可以在此区块内放心的引用此类型的属性 或者调用此类型的方法
// 四种创建这种区块的方法
// instanceof
// if(lang instanceof Java){
//   lang.helloJava()
// } else{
//   lang.javaScript()
// }
// in
// if('java' in lang){
//   lang.java()
// } else {
//   lang.javascript()
// }
// typeof
// if(typeof x ==='string'){
//   x.length
// } else{
// x.toFixed();
// }
// 通过创建一个类型保护函数来判断
// 不同的判断方法有不同的使用场景：
// typeof：判断一个变量的类型
// instanceof：判断一个实例是否属于某个类
// in：判断一个属性是否属于某个对象
// 类型保护函数：某些判断可能不是一条语句能够搞定的，需要更多复杂的逻辑，适合封装到一个函数内
