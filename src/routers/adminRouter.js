import VueRouter from 'vue-router'

import message from '../views/admin/message.vue'

export default new VueRouter({
    routes: [
        {path: '/', redirect:'/message'},
        {path: '/message', component: message}
    ],
    linkActiveClass: 'link_active'
})