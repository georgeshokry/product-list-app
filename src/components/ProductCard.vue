<template>
  <b-card 
    :title="product.title" 
    :img-src="product.thumbnail" 
    :img-alt="product.title"
    img-top
    img-height="200"
    class="custom-card img-fluid"
    variant="primary"
  >
    <!-- Discount Badge -->
    <b-badge variant="danger" class="discount-badge" v-if="checkHeighDiscount(product.discountPercentage)">-{{product.discountPercentage}}%</b-badge>
    <!-- Card Text -->
    <b-card-text class="mb-0">
      {{product.description}}
    </b-card-text>

    <!-- Rating -->
    <div class="d-flex align-items-center">
      <b-form-rating :value="product.rating" variant="warning" inline precision="2" no-border class="px-0"></b-form-rating> 
      <span class="ms-2">({{product.reviews.length}})</span>
    </div>

    <!-- Price Section -->
    <h4 class="my-2 font-weight-bold">
      € <span>{{ priceAfterDiscount(product.price, product.discountPercentage) }} </span>
      <span class="b-card__price__strapped">€ {{product.price}}</span>
    </h4>

    <!-- Footer Buttons -->
    <template #footer>
      <div class="d-flex justify-content-end">
        <b-button variant="outline-secondary" class="me-2">View details</b-button>
        <b-button variant="primary">Add to cart</b-button>
      </div>
    </template>
  </b-card>
</template>

<script lang="ts">
import Vue from 'vue';
import {Product} from '@/store/ProductTypes'
import { PropType } from '@vue/composition-api';
export default Vue.extend({
  name: 'ProductCard',
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
    priceAfterDiscount(originalPrice: number, discountPercentage: number): string {
      const discountAmount = (originalPrice * discountPercentage) / 100;
      const finalPrice = originalPrice - discountAmount;
      
      return finalPrice.toFixed(2);  // Always returns 2 decimal places
    },
    checkHeighDiscount(discValue: number){
      return discValue >= 10
    }
  }
});
</script>

<style lang="scss" scoped>
.custom-card {
  position: relative;

  .card-img-top {
    max-height: 200px;
    object-fit: cover;
  }
}

.b-card {
  &__price {
    &__strapped {
      color: rgb(162, 162, 162);
      text-decoration: line-through;
    }
  }
}

.discount-badge {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 10px;
  font-size: 1rem;
  border-radius: 50%;
  background-color: red;
  color: white;
}
</style>
