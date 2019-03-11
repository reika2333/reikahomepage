/*
*   留言 数据库设计
 */

var mongoose = require('mongoose')

var Schema = mongoose.Schema

var messageSchema = new Schema({
    id:{
        type: String,
        required: true
    },
    create_time: {
        type: String,
        default: Date.now
    },
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
})

module.exports = messageSchema