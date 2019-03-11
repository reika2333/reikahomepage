/**
 *
 * webpack 配置文件
 */

const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: {
        main: path.join(__dirname, './src/main.js'),
        message: path.join(__dirname, './src/js/message.js'),
        works: path.join(__dirname, './src/js/works.js'),
        admin: path.join(__dirname, './src/js/admin.js'),
        login: path.join(__dirname, './src/js/login.js')
    },
    output: {  // 输出文件的相关配置
        path: path.join(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    mode: 'development',
    // devServer: {    // 配置dev
    //     // "webpack-dev-server --open --port 2333 --contentBase src --hot"
    //     open: true,
    //     port: 2333,
    //     contentBase: 'src',
    // }
    plugins: [ // 配置插件的节点
        // new webpack.HotModuleReplacementPlugin(), // new 一个热更新的 模块对象， 这是 启用热更新的第 3 步
        new htmlWebpackPlugin({ // 创建一个 在内存中 生成 HTML  页面的插件
            template: path.join(__dirname, './src/index.html'), // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的 页面
            filename: 'index.html', // 指定生成的页面的名称
            chunks: ['main']
        }),
        new htmlWebpackPlugin({ // 创建一个 在内存中 生成 HTML  页面的插件
            template: path.join(__dirname, './src/views/message/message.html'), // 指定 模板页面，将来会根据指定的页面路径，去生成内存中的 页面
            filename: 'message.html', // 指定生成的页面的名称
            chunks: ['message']
        }),
        new VueLoaderPlugin()
    ],
    module: {   // 用于配置第三方模块加载器
        rules: [
            { test: /\.css$/, use: ['style-loader','css-loader'] },  // 配置打包处理css文件s
            { test: /\.less$/, use: ['style-loader','css-loader','less-loader']},
            { test: /\.scss$/, use: ['style-loader','css-loader','sass-loader']},
            { test: /\.jpeg|png|jpg|bmp|gif$/, use: 'url-loader'},    // 这里可以通过limit值设置base64编码的最高图片大小
            { test: /\.(ttf|woff|eot|svg|woff2)$/, use: 'url-loader'},
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},    // 配置babel来转换高级ES语法
            { test: /\.vue$/, use: 'vue-loader'}
        ]
    },
    resolve: {
        // alias:{
        //     "vue$": "vue/dist/vue.js"   // 修改倒入vue包的请求路径
        // }
    }
}