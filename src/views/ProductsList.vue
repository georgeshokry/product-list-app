<template>
    <b-container fluid>
        
      <b-row class="py-5 " cols="1" cols-lg="3" cols-md="2" cols-sm="1" cols-xl="3">
        <b-col v-for="(product, index) in allProducts" :key="index" class="d-flex align-items-stretch"> 
            <ProductCard class="mb-4" :product="product"/>
        </b-col>
      </b-row>
    </b-container>
</template>

<script lang="ts">
import Vue from 'vue';
import ProductCard from '@/components/ProductCard.vue';
import ProductsList from '@/store/ProductsList';

export default Vue.extend({
    name: 'ProductsList',
    components:{
        ProductCard
    },
    data(){
        return {
            productsStore: ProductsList()
        }
    },
    computed:{
      allProducts() {
        return this.productsStore.products;
      }
    },
    created(){
        this.productsStore.fetchAllProducts()
    }
})
</script>
