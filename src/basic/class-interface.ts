interface Human{
  name:string;
  eat():void;
}

class Asin implements Human{
  constructor(name:string){
   this.name=name
  }
  name:string
  eat(){}
  sleep(){} //可以定义自己的属性
}

// 类实现接口的时候必须实现接口中所有的属性
// 接口只能约束类的公有成员
// 接口可以继承



// 接口继承接口……………………^_^

interface Man extends Human{
  run():void
}
interface Child extends Human{
  cry():void
}  

interface Boy extends Man,Child{}

let boy:Boy = {
  name:'',
  eat(){},
  run(){},
  cry(){}
}

// 接口继承类……………………^_^

class Auto{
  state = 1
}

interface AutoInterface extends Auto{

}

class c implements AutoInterface{
  state = 1
}

class Bus extends Auto implements AutoInterface{
  
}

// 接口和类的关系

// 接口之间可以相互继承，实现接口的复用
// 类之间也可以相互继承 实现方法和属性的复用
// 接口是可以通过类来实现的，但是接口只能约束类的公有成员
//接口也可以抽离出类的成员 抽离的时候会包括公有成员 私有成员和受保护成员