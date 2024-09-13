import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
        path: '/',
        redirect: '/products',
    },
    {
        
        path: '/products',
        component: () => import('@/views/ProductsWrapper.vue'),
        children:[
            {
                path: '',
                name: 'products',
                component: () => import('@/views/ProductsList.vue'),
            },
            {
                path: ':productId(\\d+)',
                name: 'details',
                component: () => import('@/views/ProductDetails.vue'),
            },
        ]
      },
      {
        path: '/404',
        name: 'not-found',
        component: () => import('@/views/NotFound.vue'),
        beforeEnter(to, from, next){
            // to prevent open this page by user
            if(to.name === 'not-found' && !from.name){
                next('/')
            }else{
                next()
            }
        }
    }

  ],
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});