/*
*     集合
 */
var mongoose = require('mongoose')

var db = mongoose.connect('mongodb://localhost/test');

var messageSchema = require('./messageModel')
var userSchema = require('./userModel')

db.collection = {}
db.collection.message = mongoose.model('Message',messageSchema)
db.collection.user = mongoose.model('User',userSchema)

module.exports = db




