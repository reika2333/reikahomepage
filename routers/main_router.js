var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')

var db = require('../models/models')
var Message = db.collection.message
var User = db.collection.user

var router = express.Router()

var errObj = {
    err_code: 550,
    message: 'error'
}
var successObj = {
    err_code: 0,
    message: 'success'
}


// 主页
router.get('/',function (req,res) {
    res.sendFile(path.join(__dirname + '../../src/index.html'))
})

// 留言页get
router.get('/message',function (req,res) {
    res.sendFile(path.join(__dirname + '../../src/views/message/message.html'))
})
// 处理添加留言
router.post('/addMessage',function (req,res) {
    var body = req.body
    var id = Math.random().toString().substr(3, 10) + Date.now().toString(36)
    body.id = id
    // console.log(body)

    new Message(body).save(function (err,data) {
        if(err != null){
            console.log(err)
            return res.status(200).json(errObj)
        }else{
            res.status(200).json({
                err_code: 0,
                message: 'success'
            })
        }
    })
})
// 加载所有留言
router.get('/getMessages',function (req,res) {
    Message.find({}).sort('-create_time').exec(function (err,data) {
        if(err){
            return res.status(200).json({
                err_code: 550,
                message: 'error',
                messages: []
            })
        }
        res.status(200).json({
            err_code: 0,
            message: 'success',
            messages: data
        })
    })
})

// 作品页
router.get('/myWorks',function (req,res) {
    res.sendFile(path.join(__dirname + '../../src/views/works/works.html'))
})

//管理页登录
router.post('/login',function (req,res) {
    var body = req.body
    User.findOne({
        name: body.name
    },function (err,data) {
        if(err){
            return res.status(200).json(errObj)
        }else if(data){
            if(data.password == body.password){
                req.session.user = data
                return res.status(200).json(successObj)
            }else {
                return res.status(200).json({
                    err_code: 550,
                    message: 'password error'
                })
            }
        }
        res.status(200).json({
            err_code: 550,
            message: 'no such user'
        })
    })
})
//管理页退出登录
router.get('/logout',function (req,res) {
    req.session.user = undefined;
    res.json({
        err_code:0
    })
})

// 管理页
router.get('/admin',function (req,res) {
    if(!req.session.user){
        return res.sendFile(path.join(__dirname + '../../src/views/admin/login.html'))
    }
    res.sendFile(path.join(__dirname + '../../src/views/admin/admin.html'))
})
// 删除留言
router.post('/delectMessage',function (req,res) {
    var body = req.body
    Message.deleteOne(body,function (err,data) {
        if(err){
            return res.status(200).json(errObj)
        }
        res.status(200).json(successObj)
    })
})

module.exports = router