import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Listing',
            component: Listing
        },
        {
            path: '/content/:id',
            name: 'Content',
            component: Content
        },
        {
            path: "/admin",
            redirect: {
                name: 'Statistics',
            },
            name: 'admin',
            component: Admin,
            children: [{
                path: 'statistics',
                name: 'Statistics',
                component: Statistics,
            }, ]
        },
    ]
});