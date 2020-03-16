import React, { Children } from 'react';
import { Button } from 'antd';
import { OmitProps } from 'antd/lib/transfer/renderListBody';


// 函数式组件

// 编写函数式组件时 为属性指定类型
interface Greeting {
    name: string;
    firstName: string;
    lastName: string;
}

// const Hello = (props: Greeting) => <Button>Hello {props.name}</Button>

// const Hello = (props:Greeting)=><Button>Hello ceshi {props.name}</Button>

const Hello : React.FC<Greeting>= ({
  name,
  firstName,
  lastName,
  children
}) => <Button>Hello {name} {firstName} {lastName} {children}</Button>

// const Hello: React.FC<Greeting> = ({
//     name,
//     firstName,
//     lastName,
//     children
// }) => <Button>Hello {name}</Button>

Hello.defaultProps = {
    name:'999',
    firstName: 'ma',
    lastName: 'ying'
}

export default Hello;


// React.FC 优点

// 在函数的参数中隐含生成children属性
// 给函数定义一些静态属性的时候给出一些提示
//  要使用defaultProps时候 默认属性必须是可选的属性

// interface Greeting {
// name: string;
// firstName?: string;
// lastName?: string;
// }

// 此时才能使用

// Hello.defaultProps = {
//   name:'999',
//   firstName: 'ma',
//   lastName: 'ying'
// }

// 结论：不要使用React.FC 使用常规的定义方式