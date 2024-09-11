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
        name: 'products',
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
            }
        ]
      },

  ],
});