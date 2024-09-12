import { defineStore } from 'pinia';
import axios from 'axios';
import {Product} from '@/store/ProductTypes'
// I have used https://dummyjson.com/docs/products api for listing products 




export default defineStore('ProductsList', {
  state: () => ({
    products: [] as Product[],
  }),
  getters: {
    getAllProducts(state){
      return state.products
    }
  },
  actions: {
    fetchAllProducts(){
      axios.get('https://dummyjson.com/products')
        .then( (response) => {
          console.log(response.data);
          this.$state.products = response.data.products
        })
        .catch( (error) => {
          // handle error
          console.log(error);
        })
        .finally( () => {
          // always executed
        });
    }
  },
});