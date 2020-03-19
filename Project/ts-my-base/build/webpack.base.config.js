// 公共配置
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const {CheckerPlugin} = require('awesome-typescript-loader')
module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'app.js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    // loader: 'ts-loader',
                    loader:'awesome-typescript-loader',
                    options:{
                      transpileOnly:true //true：只做类型转换不做类型检查 默认是false
                      // 我们需要借助插件（fork-ts-checker-webpack-plugin）在 transpileOnly为true的时候也做类型检查,他会把类型检查放在一个独立的进程中进行
                    }
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
      // 通过一个模版生成我们网站的首页也会把输出文件自动嵌入这个页面中 
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        }),
        // new ForkTsCheckerWebpackPlugin()
        new CheckerPlugin() 
    ]
}
