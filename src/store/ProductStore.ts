import { defineStore } from 'pinia';
import axios, {AxiosResponse} from 'axios';
import {Product, Pagination} from '@/store/ProductTypes'
// I have used https://dummyjson.com/docs/products api for listing products 
const mainApi = 'https://dummyjson.com/'



export default defineStore('ProductStore', {
  state: () => ({
    products: [] as Product[],
    pagination: {
      totalPages: 1
    } as Pagination,
    loading: false,
    categories: []

  }),
  getters: {
    getAllProducts(state): Product[]{
      return state.products
    },
    getLoader(state): boolean{
      return state.loading
    },
    getPagination(state) : Pagination{
      return state.pagination
    },
    getTotalPages(state): number{
      return state.pagination.totalPages
    },
    getAllCategories(state): Array<string>{
      return state.categories
    }
  },
  actions: {
    async fetchAllProducts(skip: number, sorting?: string | null, categoryName?: string | null){
      console.log("🚀 ~ fetchAllProducts ~ sorting:", sorting, categoryName)
      this.$state.loading = true
      const sortingQuery = (sorting ? `${'&sortBy='+sorting}` : '');
      const categoryQuery = categoryName ?  ('/category/' + categoryName) : ''
      await axios.get(
        `${mainApi}products${categoryQuery}?limit=10&skip=${skip}`+ sortingQuery
      ).then( (response) => {
          this.assignProductsData(response)
        })
        .catch( (error) => {
          // handle error
          console.log(error);
        })
        .finally( () => {
          // always executed
          this.$state.loading = false
        });
    },
    assignProductsData(response: AxiosResponse){
      this.$state.products.push(...response.data.products)
      this.$state.pagination.limit = response.data.limit
      this.$state.pagination.total = response.data.total
      this.$state.pagination.skip =  response.data.skip
      this.$state.pagination.totalPages = Math.ceil(this.$state.pagination.total/this.$state.pagination.limit)
    },
    fetchAllCategories(){
      axios.get(`${mainApi}products/category-list`)
        .then( (response) => {
          this.assignCategories(response)
        })
        .catch( (error) => {
          // handle error
          console.log(error);
        })
        .finally( () => {
          // always executed
        });
    },
    assignCategories(response: AxiosResponse){
      this.$state.categories = response.data
    },
    emptyProducts(){
      this.$state.products = []
    }
  },
});