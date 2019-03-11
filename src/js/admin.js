import '../css/mystyle.less'
import 'bootstrap/dist/css/bootstrap.min.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)

import adminRouter from '../routers/adminRouter.js'

import app from '../views/admin/app.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router: adminRouter
})