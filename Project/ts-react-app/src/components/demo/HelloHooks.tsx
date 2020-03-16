import React, { useEffect, useState } from 'react';
import { Button } from 'antd';

// 编写函数式组件时 为属性指定类型
interface Greeting {
    name: string;
    firstName: string;
    lastName: string;
}


const HelloHooks = (props: Greeting) => {
    const [count,setCount] = useState(0);
    const [text,setTex] = useState<string | null>(null);

    useEffect(()=>{
      if(count > 5){
        setTex('休息♨️一下！')
      }
    },[count])
    return (
      <>
      <p>你点击了{count}    {text}</p>
      <Button onClick={()=>{setCount(count + 1)}}>hello class {props.name}</Button>
      </>
    )
}


HelloHooks.defaultProps = {
  name:'999',
  firstName: 'ma',
  lastName: 'ying'
}

export default HelloHooks;

