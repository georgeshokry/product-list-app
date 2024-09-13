<template>
  <b-card 
    :title="product.title" 
    :img-src="product.thumbnail" 
    :img-alt="product.title"
    img-top
    img-height="200"
    class="product-card__custom-card img-fluid"
    variant="primary"
  >
    <!-- Discount Badge -->
    <b-badge variant="danger" class="product-card__discount-badge" v-if="checkHeighDiscount(product.discountPercentage)">-{{product.discountPercentage}}%</b-badge>
    <!-- Card Text -->
    <b-card-text class="mb-0">
      {{product.description}}
    </b-card-text>

    <!-- Rating -->
    <ProductRate :rating="product.rating" :reviews="product.reviews.length"/>

    <!-- Price Section -->
     <ProductPrice :price="product.price" :discountPercentage="product.discountPercentage"/>

    <!-- Footer Buttons -->
    <template #footer>
      <div class="d-flex justify-content-end">
        <b-button variant="outline-secondary" class="me-2" :to="{ name: 'details', params: { productId: product.id } }">View details</b-button>
        <b-button variant="primary">Add to cart</b-button>
      </div>
    </template>
  </b-card>
</template>

<script lang="ts">
import Vue from 'vue';
import {Product} from '@/store/ProductTypes'
import { PropType } from '@vue/composition-api';
import ProductPrice from '@/components/productDetails/ProductPrice.vue';
import ProductRate from '@/components/productDetails/ProductRate.vue';
export default Vue.extend({
  name: 'ProductCard',
  components:{
    ProductPrice,
    ProductRate
  },
  props:{
    product:{
      type: Object as PropType<Product>,
        
    }
  },
  data(){
    return {
      
    }
  },

  methods: {
    checkHeighDiscount(discValue: number){
      return discValue >= 10
    }
  }
});
</script>

<style lang="scss" scoped>
.product-card{

  &__custom-card {
    position: relative;
  
    .card-img-top {
      max-height: 200px;
      object-fit: cover;
    }
  }
  
  &__discount-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 10px;
    font-size: 1rem;
    border-radius: 50%;
    background-color: red;
    color: white;
  }
}
</style>
