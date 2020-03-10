// 高级类型：交叉类型（适合做对象的混入）和联合类型（使类型具有一定的不确定性，可以增强代码的灵活性）
 interface DogInterface{
   run():void
 }

 interface CatInterface{
  jump():void
}
// 取所有类型的并集
let pet : DogInterface & CatInterface = {
  run(){},
  jump(){}
}
// 联和类型
let a:number|string='a'
// 字符串联合类型
let b :'a'| 'b' | 'c' = 'b'

// 数字联合类型
let c:1| 2 | 3 = 1

// 对象的联和类型(实例取所有成员的交集)
  
class Dog implements DogInterface{
  run(){}
  eat(){}
}
class Cat implements CatInterface{
  jump(){}
  eat(){}
}

enum Master{Boy,Girl}

function getPet(master:Master){
  let pet = master === Master.Boy ? new Dog(): new Cat();
  pet.eat(); 
  // pet.run();   
  return pet
}

//  可区分的联和类型

interface Square{
  kind:'square',
  size:number
}

interface Rectangle{
  kind:'rectangle',
  width:number
  height:number
}

interface Circle{
  kind:'circle',
  r:number
}
// type  shape = Square | Rectangle ;


// function area(s:shape){
//   switch(s.kind){ //通过kind创建类型保护区块 
//     case 'square':
//       return s.size *  s.size
//     case 'rectangle':
//       return s.height *  s.width
//   }
// }

// 利用返回值类型 ts分支就会判断所有的switch分支是不是包含了所有的情况
// type  shape = Square | Rectangle  | Circle ;

// function area(s:shape) : number{
//   switch(s.kind){ //通过kind创建类型保护区块 
//     case 'square':
//       return s.size *  s.size
//     case 'rectangle':
//       return s.height *  s.width
//   }
// }

// 利用nerver类型
type  shape = Square | Rectangle  | Circle ;

function area(s:shape){
  switch(s.kind){ //通过kind创建类型保护区块 
    case 'square':
      return s.size *  s.size
    case 'rectangle':
      return s.height *  s.width
      case 'circle':
        return Math.PI  *  s.r  & s.r
      default:
        return ((e:never)=>{throw new Error(e)})(s)
  }
}

