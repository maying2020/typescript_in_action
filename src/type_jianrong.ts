// // 类型兼容性
// // 当一个类型y可以被赋值给另一个类型x时  我们就可以说类型x兼容类型y

// // x兼容y：x（目标类型） = y（源类型）

// let s:string = 'a'
// s = null;

// // 字符串类型是兼容null类型的  也就是说null是字符型的自类型
// // ts允许我们把一些不同的类型的值相互赋值 增加了语言的灵活性

// // 接口兼容性（成员少的兼容成员多的）
// interface X{
//   a:any;
//   b:any
// }

// interface Y{
//   a:any;
//   b:any;
//   c:any
// }

// let x:X= {a:1,b:2}
// let y:Y= {a:1,b:2,c:3}

// x = y; //y具备x的所有类型 就可以认定为是x的类型 那就是x类型可以兼容y类型
// // y = x; 错误


// // 函数的兼容性 发生在两个函数相互赋值的情况下
// type Handler = (a:number,b:number) =>void //（目标类型）
// function hof(handler:Handler){ //当给hof传入参数（源类型）的时候会验证是否兼容
//   return handler
// }

// // 函数兼容的必备条件
// // 目标函数的参数个数要多于原函数
// let handler1= (a:number)=>{}
// hof(handler1)

// let handler2= (a:number,b:number,c:string)=>{}
// // hof(handler2)


// // 可选参数和剩余参数

// let aa = (p1:number,p2:number)=>{};
// let bb = (p1:number,p2?:number)=>{};
// let ccc = (...args:number[])=>{};


// // 固定参数兼容可选参数和剩余参数的
// aa == bb
// aa == ccc
// // 可选参数是不兼容固定参数和剩余参数的

// // bb == aa
// // bb == ccc

// // 剩余参数可以兼容固定参数和可选参数
// ccc == aa;
// ccc == bb;


// // 参数类型必须要匹配
// let handler3 = (a:string)=>{}
// // hof(handler3) //类型不兼容