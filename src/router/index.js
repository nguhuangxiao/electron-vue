import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [{
    path: '/',
    name: 'DrumpHome',
    redirect: '/online/hall'

},{
    path: '/',
    name: 'Index',
    component: resolve => require(['@/view/index'], resolve),
    children: [
        {
            path: 'online',
            name: 'Online',
            component: resolve => require(['@/view/music-online'], resolve),
            children: [
                {
                    path: 'hall',
                    name: 'Hall',
                    component: resolve => require(['@/view/music-online/hall'], resolve),
                }
            ]
        }
    ]
}];
export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes,
})
