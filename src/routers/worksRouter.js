import VueRouter from 'vue-router'

import worksApp from '../views/works/works_app.vue'
import molandy from '../views/works/molandyCard.vue'
import resume from  '../views/works/resume.vue'

export default new VueRouter({
    routes: [
        {path: '/', component: worksApp},
        {path: '/molandy', component: molandy},
        {path: '/resume', component: resume}
    ]
})