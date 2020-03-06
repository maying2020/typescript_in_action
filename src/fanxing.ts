// 泛型：不预先确定的数据类型具体的类型在使用的类型才能确定
function log(value:any):any{
  console.log(value)
  return value
}

// 进行泛型的改造
function log1<T>(value:T):T{
  console.log(value)
  return value
}

// 调用泛型
log1<string[]>(['a','b'])

//使用ts的类型推断调用
log1(['a','b'])


// 使用泛型定义一个函数类型

type Log= <T>(value:T)=>T
let myLog:Log = log1

// 泛型接口

interface Log1{
  <T>(value:T):T
}

interface Log2<T>{
  (value:T):T
}
let myLog1:Log2<number> = log1

// interface Log2<T= string>{
//   (value:T):T
// } 定义一个默认类型
// let myLog1:Log2 = log1
// myLog1('1')

