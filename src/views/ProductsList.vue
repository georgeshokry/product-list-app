<template>
    <SideNavbar>
        <b-overlay :show="getLoader">
            <b-row class="pt-5 " cols="1" cols-lg="3" cols-md="2" cols-sm="1" cols-xl="3">
                <b-col v-for="(product, index) in allProducts" :key="index" class="d-flex align-items-stretch"> 
                    <ProductCard class="mb-4" :product="product"/>
                </b-col>
            </b-row>
        </b-overlay>
        <b-row class="d-flex justify-content-center px-4 mb-3">
            <b-col cols="auto" class="d-flex justify-content-center">
                <b-button variant="outline-primary"  class="mx-2" @click="loadMoreProducts" :disabled="currentPage >= getTotalPages">
                    Load More
                </b-button>
            </b-col>
        </b-row>
    </SideNavbar>
</template>

<script lang="ts">
import Vue from 'vue';
import ProductCard from '@/components/ProductCard.vue';
import ProductStore from '@/store/ProductStore';
import SideNavbar from '@/components/SideNavbar.vue'
import { mapState } from 'pinia';

export default Vue.extend({
    name: 'ProductsList',
    components:{
        ProductCard,
        SideNavbar
    },
    data(){
        return {
            productsStore: ProductStore(),
            currentPage: 1,
            skip: 0
        }
    },
    computed:{
        ...mapState(ProductStore, {
            allProducts: 'getAllProducts',
            getPaginationData: 'getPagination',
            getLoader: 'getLoader',
            getTotalPages: 'getTotalPages'
        }),
    },
    async mounted(){
        await this.productsStore.fetchAllProducts()
        this.productsStore.fetchAllCategories()
    },
    methods:{
        loadMoreProducts(){
            if (this.currentPage <= this.getTotalPages) {
                this.currentPage += 1;
                this.calculatePages()
                this.productsStore.fetchNextPage(this.skip)
            }
        },
        calculatePages(){
            
            this.skip = (this.currentPage - 1) * this.getPaginationData['limit'];
        }
    }
})
</script>
