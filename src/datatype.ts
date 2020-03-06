// 原始类型
let bool:boolean = false
let num:Number = 3
let str:string='yishu'

// 数组
let arr :number[]= [1,2,3]
let arr2:Array<number | string> = [1,2,3,'4']

// 元组
let tuple:[number, string] = [0,'2'];
tuple.push(7);
console.log('tuple',tuple) // [0, "2", 7]
// tuple[2] //不可以访问

// 函数
// 写法一
let add = (x:number,y:number):number=>x+y;
// 利用ts的类型推断功能返回值 可以省略
// 写法二
let compute:(x:number,y:number) =>number; //定义函数类型
compute =(a,b)=>a+b


// 对象
let obj:{x:number,y:number} = {x:1,y:2};
obj.x= 3




// symbol
let s1:symbol = Symbol();
let s2 = Symbol();
console.log(s1==s2) //false



// undefined null
let  un :undefined = undefined;
let nu:null = null;


//void
// any
let ceshi


// 枚举类型

enum Role {
  ceshi1 = 1,
  ceshi2,
  ceshi3,
  ceshi4
}
console.log('Role',Role.ceshi1) //0
console.log('Role',Role[2])


// 字符串枚举

enum Message {
  success = '成功了！',
  fail='失败了！'
}

console.log('Message',Message)




// 函数定义
function add1(a:number,b:number){
  return a + b
}

let add2:(a:number,b:number)=>number

type add3 = (a:number,b:number)=>number

interface add4{
  (x:number,y:number):number
}

add1(1,2)

function add5(x:number,y?:number){
  return y? x+y :x
}

add5(3,5)

function add6(x:number, ...rest:number[]){
  return x + rest.reduce((pre,cur)=> pre + cur)
}
console.log('add6(1,2,3,4,5)',add6(1,2,3,4,5))


// 函数重载

// function add9(...rest:number[]):number;
// function add10(...rest:string[]):string;
// function add11(...rest:any[]):any{
//   //...
// }