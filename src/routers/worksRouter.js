import VueRouter from 'vue-router'

import worksApp from '../views/works/works_app.vue'
import molandy from '../views/works/molandyCard.vue'

export default new VueRouter({
    routes: [
        {path: '/', component: worksApp},
        {path: '/molandy', component: molandy},
    ]
})