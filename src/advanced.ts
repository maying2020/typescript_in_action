// // 高级类型：交叉类型（适合做对象的混入）和联合类型（使类型具有一定的不确定性，可以增强代码的灵活性）
// // 交叉类型：将多个类型合并为一个类型 新的类型具有所有类型得到特性
// // 联合类型：类型并不确定 可以为多个类型中的一个
//  interface DogInterface{
//    run():void
//  }

//  interface CatInterface{
//   jump():void
// }
// // 交叉类型取所有类型的并集
// let pet : DogInterface & CatInterface = {
//   run(){},
//   jump(){}
// }
// // 联和类型
// let a:number|string='a'
// // 字符串联合类型
// let b :'a'| 'b' | 'c' = 'b'
// // 数字联合类型
// let c:1| 2 | 3 = 1

// // 对象的联和类型(实例取所有类成员的交集)
// class Dog implements DogInterface{
//   run(){}
//   eat(){}
// }
// class Cat implements CatInterface{
//   jump(){}
//   eat(){}
// }

// enum Master{Boy,Girl}

// function getPet(master:Master){
//   let pet = master === Master.Boy ? new Dog(): new Cat();
//   pet.eat(); 
//   // pet.run();   
//   return pet
// }

// //  可区分的联和类型

// interface Square{
//   kind:'square',
//   size:number
// }

// interface Rectangle{
//   kind:'rectangle',
//   width:number
//   height:number
// }

// interface Circle{
//   kind:'circle',
//   r:number
// }
// // type  shape = Square | Rectangle ;


// // function area(s:shape){
// //   switch(s.kind){ //通过kind创建类型保护区块 
// //     case 'square':
// //       return s.size *  s.size
// //     case 'rectangle':
// //       return s.height *  s.width
// //   }
// // }

// // 利用返回值类型 ts分支就会判断所有的switch分支是不是包含了所有的情况
// // type  shape = Square | Rectangle  | Circle ;

// // function area(s:shape) : number{
// //   switch(s.kind){ //通过kind创建类型保护区块 
// //     case 'square':
// //       return s.size *  s.size
// //     case 'rectangle':
// //       return s.height *  s.width
// //   }
// // }

// // 利用nerver类型
// type  shape = Square | Rectangle  | Circle ;

// function area(s:shape){
//   switch(s.kind){ //通过kind创建类型保护区块 
//     case 'square':
//       return s.size *  s.size
//     case 'rectangle':
//       return s.height *  s.width
//       case 'circle':
//         return Math.PI  *  s.r  & s.r
//       default:
//         return ((e:never)=>{throw new Error(e)})(s)
//   }
// }



// 索引类型
// 常见的场景 从对象中抽取一些属性 形成一个数组
let obj1 = {
  a:1,
  b:2,
  c:3
}

function getValues(obj:any, key: string[]){
  return key.map(key=>obj[key])
}

console.log(getValues(obj1,['a','b']))
console.log(getValues(obj1,['d','e'])) //undefined


// 3.10 3.23
// 3.11 3.24
// 3.12 3.25
// 3.13 3.26
// 3.14 3.27

// 索引类型的查询操作符
// keyof T

interface Obj{
  a:number,
  b:string
}

let key :keyof Obj  //key类型变成了 a和b的联和类型


// 索引类型访问操作符 T[k]
let value:Obj['a'] //value的类型就是a的类型 number


// 泛型约束 T extends U


function getValues2<T,K extends keyof T>(obj:T, key: K[]):T[K][]{
  return key.map(key=>obj[key])
}

// console.log(getValues2(obj1,['d','e'])) //报错



// 索引类型可以实现对象属性的查询和访问
// 配合泛型约束 能够建立对象，对象属性以及属性值 之间 的约束关系


// 映射类型 预设了很多映射类型

// 通过映射类型 ，我们可以从一个旧的类型 生成新的 类型

interface Obj3 {
  a:string,
  b:number,
  c:boolean
}

type ReadonlyObj =  Readonly<Obj3> 

type PartialObj =  Partial<Obj3> 

type PickObj = Pick<Obj3,'a'|'b'>

type RecordObj =  Record<'x' | 'y', Obj3>

// 条件类型 增加了类型的不唯一性，也 增加了语言的灵活性
// 由 条件表达式决定的类型
// T extends U ? X:Y

type TypeName<T> = 
T extends string ? 'string':
T extends number ? 'number':
T extends boolean ? 'boolean':
T extends undefined ? 'undefined':
T extends Function ? 'function':
'object'

type T1 = TypeName<string>
type T2 = TypeName<string[]>

// (A|B) extends U ? X :Y 分布式条件类型 此时类型 T是一个联合类型 此时结果类型变成多个条件的联合类型
// ==
// (A extends U ? X:Y) | (B extends U ? X:Y)

// type T3 = TypeName<string | string[]>

// 实现一些类型的过滤
 type Diff<T,U> = T extends U ? never : T //Exclude<T,U>
 type T4 = Diff<'a'|'b'|'c','a'|'e'>

// 1.<'a','a'|'e'> | <'b','a'|'e'> | <'c','a'|'e'>

// 2.never | 'b' | 'c' 

// 3. 'b' | 'c'

type NotNull<T>=Diff<T,undefined | null> //NonNullable<T>
type Ts = NotNull<string | number | undefined | null>

// Extract<Text,U>

type T6  = Extract<'a'|'b','a'|'e'>


// ReturnType<T>

