// 公共配置
const HtmlWebpackPlugin = require('html-webpack-plugin')

const vueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: {
        'app':'./src/index.ts'
    },
    output: {
        filename: '[name][chunkhash:8].js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx','vue'],
        alias:{
            vue:'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.tsx?$/i,
                use: [{
                    loader: 'ts-loader',
                    options:{
                        appendTsSuffixTo:[/\.vue$/]
                    }
                }],
                exclude: /node_modules/
            },{
                test:/\.css$/,
                use:[
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
      // 通过一个模版生成我们网站的首页也会把输出文件自动嵌入这个页面中 
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        }),
        new vueLoaderPlugin()
    ]
}
