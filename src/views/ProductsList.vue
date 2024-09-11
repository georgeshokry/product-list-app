<template>
    <b-container fluid>
      <b-row class="py-5" cols="1" cols-lg="3" cols-md="2" cols-sm="1" cols-xl="3">
        <b-col >
            <ProductCard class="mb-4" />
        </b-col>
        <b-col>
            <ProductCard class="mb-4" />
        </b-col>
        <b-col>
            <ProductCard class="mb-4" />
        </b-col>
        <b-col>
            <ProductCard class="mb-4" />
        </b-col>
        <b-col>
            <ProductCard class="mb-4" />
        </b-col>
        <b-col>
            <ProductCard class="mb-4" />
        </b-col>
      </b-row>
    </b-container>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
export default {
    name: 'ProductsList',
    components:{
        ProductCard
    },
    data(){
        return {

        }
    }
}
</script>
