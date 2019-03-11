import './css/mystyle.less'

import Vue from 'vue'
import VueRouter from  'vue-router'
Vue.use(VueRouter)

import app from './views/app.vue'

import indexRouter from './routers/indexRouter.js'

var vm = new Vue({
    el: '#app',
    data:{},
    render: c => c(app),
    router: indexRouter
})

