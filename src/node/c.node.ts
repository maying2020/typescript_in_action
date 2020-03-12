let c1 = require('./a.node')
let c2 = require('./b.node')

console.log(c1,c2)

// node不能执行ts文件 去寻找js文件 使用node命令执行
// node ./src/node/c.node.ts

// 或者安装ts-node 之后就可以直接执行ts文件了