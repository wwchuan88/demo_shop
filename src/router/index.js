// 路由器对象模块

import Vue from 'vue';
import VueRouter from 'vue-router';
import MSite from '../pages/MSite/MSite.vue';
import Order from '../pages/Order/Order.vue';
import Profile from '../pages/Profile/Profile.vue';
import Search from '../pages/Search/Search.vue';
import Login from '../pages/Login/Login.vue';

// 声明使用插件
Vue.use(VueRouter);

export default new VueRouter({
    //所有路由
    routes:[
        {
            path:'/msite',
            component:MSite,
            meta:{
                footerGuide:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                footerGuide:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                footerGuide:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{  //可以用$route.meta取到值  作用可以作一些指定该路由的显隐的操作
                footerGuide:true
            }
        },
        {
            path:'/',
            redirect:'/msite',
            meta:{
                footerGuide:true
            }
        }
        ,
        {
            path:'/login',
            component:Login
        }
    ]
})