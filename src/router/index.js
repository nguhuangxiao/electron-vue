import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const routes = [{
    path: '/',
    name: 'Index',
    component: resolve => require(['@/view/index'], resolve),
}];
export default new Router({
    mode: 'history',
    linkActiveClass: 'active',
    routes,
})
