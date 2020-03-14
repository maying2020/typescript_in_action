// 声明合并
// 把程序中散落各地的变量进行合并

// 接口声明合并

// 接口中非函数成员 要保证唯一性，不唯一的情况下 类型必相同
// 接口中的函数 被视为函数重载，实现的时候需要使用更宽泛的类型

// 重载的顺序在下图标记

interface A {
  x:number;
  // y:string //
  foo(bar:number):number; //5
  foo(bar:'a'):number; //字面量的被提升到第一位 所以此时他是2
}

interface A {
  y:number;
  foo(bar:string):string //3
  foo(bar:number[]):number[] //4
  foo(bar:'b'):number; // 字面量的被提升到第一位 所以此时他是1 
}
let aa :A = {
  x:3,
  y:5,
  foo(bar:any){
    return bar
  }
}


// 命名空间和函数的声明合并    命名空间放后面
// 相当于给函数增加了属性
function Lib(){}

namespace Lib{
  export let version = '1.0'
}


// 命名空间和类的声明合并    命名空间放后面
// 相当于给类添加了静态属性
class C{}

namespace Lib{
  export let state = '2.0'
}

// 命名空间和枚举的声明合并

// 给枚举类型增加了一个方法
enum Color{
  Red,
  Yello,
  Blue
}

namespace Color{
  export function mix(){}
}


// 命名空间是照顾老的开发模式

