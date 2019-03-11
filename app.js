/*
    服务器
 */

// 加载包
var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var session = require('express-session')
var mainRouter = require('./routers/main_router.js')

// 创建服务器
var app = express()

// 配置body-parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// 配置session  一定要在路由之前配置
app.use(session({
    secret: 'keyboard cat',  // 配置加密字符串
    resave: true,
    saveUninitialized: true,  // 无论是否使用session 都自动分配钥匙
    cookie: { maxAge : 1000 * 60 * 30 },
}))

// 加载路由
app.use(mainRouter)

// 开放公开资源
app.use('/dist/',express.static(path.join(__dirname,'./dist/')))
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')))

// 监听端口
app.listen(2333,function () {
    console.log('2333 is running')
})