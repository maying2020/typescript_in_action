import React, { Component } from 'react';
import { Button } from 'antd';


// 类组件
// 编写类组件的时候 要为它的属性和类型都指定一个类型
interface Greeting {
    name: string;
    firstName?: string;
    lastName?: string;
}

// 在react的声明文件中  对它所有的API都重新进行了定义


interface State{
  count:number
}
class HelloClass extends Component<Greeting, State>{
  state:State = {
    count:0
  }

  static defaultProps = {
    firstName:'',
    lastName:''
  }

  render(){
    return (
      <>
      <p>你点击了{this.state.count}</p>
      <Button onClick={()=>{this.setState({count:this.state.count + 1})}}>hello class { this.props.name}</Button>
      </>
    )
  }
}

export default HelloClass;

