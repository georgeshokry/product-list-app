<template>
  
        <div class="d-flex p-2">
          <b-nav
            vertical
            class=" bg-light vh-100 sidebar position-sticky"
          >
          <!-- sorting -->
          <b-row class="p-0 mt-2">
              <h5 class="d-inline-flex"><b-icon icon="sort-down"></b-icon>Sort By</h5>
          </b-row>
          <div class="d-inline-flex p-0">
              <b-form-select v-model="selectedSort" :options="sortOptions" @change="sortChanged"></b-form-select>
          </div>
          <!-- category list -->
          <b-row class="p-0 mt-4">
              <h5 class="d-inline-flex"><b-icon icon="filter"></b-icon> Filters</h5>
            </b-row>
            <b-row class="categories p-0 mt-2">
                <b-form-group label="Category">
                    <b-form-radio-group
                    id="category"
                    v-model="selectedCategory"
                    :options="allCategories"
                    @change="categoryChanged"
                    ></b-form-radio-group>
                </b-form-group>
            </b-row>
            <div class="d-flex py-2 justify-content-center">
              <b-button v-if="sortFilterInprogress"  variant="outline-primary" @click="clearFilters">Clear Filters/Sort</b-button>
            </div>
        </b-nav>
          <!-- Main content area -->
          <b-container class="flex-grow-1 p-4">
                <slot></slot>
          </b-container>
        </div>
  </template>
  
  <script lang="ts">
  import Vue from 'vue';
  import { mapState } from 'pinia';
  import ProductStore from '@/store/ProductStore';

  export default Vue.extend({
    name: 'SideNavbar',
    data() {
      return {
        sortOptions: [
            { value: '', text: 'Select an option' },
            { value: 'price&order=asc', text: 'Price Low to High' },
            { value: 'price&order=desc', text: 'Price High to Low' },
            { value: 'rating&order=asc', text: 'Rate Low to High' },
            { value: 'rating&order=desc', text: 'Rate High to Low' },
        ],
        selectedCategory: '',
        selectedSort: '',
        productStore: ProductStore()
      };
    },
    computed: {
        ...mapState(ProductStore, {
            allCategories: 'getAllCategories',
            allProducts: 'getAllProducts'
        }),
        sortFilterInprogress() : boolean{
            return this.selectedCategory.length > 0 || this.selectedSort.length > 0
        }
    },
    mounted(){
        this.assignSortingFromQuery()
        this.assignCategoryFromQuery()
    },
    methods: {
        sortChanged(){
            this.$router.push({ query:{...this.$router.currentRoute.query, 'sortBy': this.selectedSort} });
        },
        async applyFilterSort(sorting: string){
            await this.productStore.fetchAllProducts(0,sorting)
        },
        assignSortingFromQuery(){
            if(this.$router.currentRoute.query){
                this.selectedSort = this.$router.currentRoute.query.sortBy.toString()
            }
        },
        categoryChanged(){
            this.$router.push({ query:{...this.$router.currentRoute.query, 'category': this.selectedCategory} });
        },
        assignCategoryFromQuery(){
            if(this.$router.currentRoute.query?.category){
                this.selectedCategory = this.$router.currentRoute.query.category.toString()
            }
        },
        clearFilters(){
            this.selectedCategory = ''
            this.selectedSort = ''
            this.$router.push({ query:{} });
        }
    },
  });
  </script>
  
  <style scoped lang="scss">
  .sidebar {
    width: 250px;
    top: 0;
    overflow-y: auto;
    overflow-x: hidden;
  }
  
  .b-container {
    min-height: 100vh;
  }

  .categories{
    max-height: 300px;
    overflow-y: auto;
    max-width: 220px;
  }
  </style>
  