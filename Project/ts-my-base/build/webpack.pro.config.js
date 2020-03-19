// 生产环境的配置
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    plugins: [
        new CleanWebpackPlugin() //每次成功构建之后 清空dist目录
    ]
}
