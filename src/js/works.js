import '../css/mystyle.less'
import '../css/molandy.less'
import 'bootstrap/dist/css/bootstrap.min.css'

import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import VueResource from 'vue-resource'
Vue.use(VueResource)

import worksRouter from '../routers/worksRouter.js'

import worksApp from '../views/works/works_app.vue'

var vm = new Vue({
    el: '#app',
    router: worksRouter
})