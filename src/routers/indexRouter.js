import VueRouter from 'vue-router'

// 导入对应的路由组件
import MainHome from '../views/main/home.vue'
import MainOthers from '../views/main/others.vue'
import MainAbout from '../views/main/about.vue'
import MainContact from '../views/main/contact.vue'

export default new VueRouter({
    routes: [
        {path: '/', redirect: '/main/home'},
        {path: '/main/home', component: MainHome},
        {path: '/main/others', component: MainOthers},
        {path: '/main/about', component: MainAbout},
        {path: '/main/contact', component: MainContact}
    ],
    linkActiveClass: 'link_active'
})