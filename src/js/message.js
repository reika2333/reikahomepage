import '../css/mystyle.less'
import 'bootstrap/dist/css/bootstrap.min.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)

import messageApp from '../views/message/message_app.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(messageApp)
})