// 单独导出
export let a = 1;

// 批量导出

let b  = 2;
let c = 3;

export {b, c}


// TS中导出接口
export interface P{
  x:number;
  y:number
}

// 导出函数
export function f(){}


// 导出时起别名

function g(){};
export {g as G}

// 默认导出，无需函数名

export default function(){
  console.log('default')
}

// 引入外部模块 再次导出

export {str as Hello} from './b'


