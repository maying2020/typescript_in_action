// 基本的类
class Dog {
  //  private constructor(name:string){ //加private既不能被实力化 也不能被继承
  //   this.name = name
  // }
  name:string = 'sde'
  run(){}
  private pri(){}
  protected pro(){}
  readonly les:number = 4;
  static food:string = 'ceshi'  //静态成员只能通过类型来调用 通过子类访问不了 类的静态成员可以被继承

}
console.log('Dog',Dog.prototype)

let dog  = new Dog()
// console.log('dog',dog)
// dog.pri //私有成员不可访问
// dog.pro
// console.log(Dog.food,dog.food) dog.food报错

// 类的继承

class husky extends Dog{
  constructor(name:string,public color:string){
    super();
    this.color = color
    this.pro()
  }
  // color:string 在constructor中已经使用public修饰符定义过啦 所以直接成为了实例属性
}


let hu  = new husky('ceshih','green');
// console.log('hu',hu,husky.food)

// ---------------------------------------------------
// 抽象类和多态


abstract class Animal{
  eat(){
    console.log('eat')
  }
  abstract sleep():void
}

class Dog1 extends Animal {
  constructor(name:string){
    super()
    this.name = name
  }
  name:string
  run(){}
  sleep(){
    console.log('dog1 sleep!')
  }
}

let dog1 = new Dog1('yishu');
// dog1.eat();
// dog1.sleep();


// let animal = new Animal();  // 无法创建抽象类的实例 它只能被继承



// ts中的多态

class Cat extends Animal{
  sleep(){
    console.log('cat sleep!')
  }
}

let cat = new Cat();

let animals:Animal[] = [dog1,cat]

animals.forEach((i)=>{
  i.sleep()
})

class workFlow{
  step1(){
    return this
  }
  step2(){
    return this
  }
}

new workFlow().step1().step2()

class myFlow extends workFlow{
  next(){
    return this;
  }
}

new myFlow().next().step1().next().step2()