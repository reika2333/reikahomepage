import '../css/mystyle.less'
import 'bootstrap/dist/css/bootstrap.min.css'

import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

import loginApp from '../views/admin/login.vue'

var vm = new Vue({
    el: '#app',
    render: c => c(loginApp)
})