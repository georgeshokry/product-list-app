<template>
    <h4 class="my-2 font-weight-bold">
      € <span>{{ priceAfterDiscount(price, discountPercentage) }} </span>
      <span class="b-card__price__strapped">€ {{price}}</span>
    </h4>
</template>
  
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ProductPrice',
  props:{
    price:{
      type: Number,
      default: 0,
      required: true
    },
    discountPercentage:{
      type: Number,
      default: 0,
      required: true
    }
  },
  methods:{
    priceAfterDiscount(originalPrice: number, discountPercentage: number): string {
      const discountAmount = (originalPrice * discountPercentage) / 100;
      const finalPrice = originalPrice - discountAmount;
      
      return finalPrice.toFixed(2);  // Always returns 2 decimal places
    },
  }

})
</script>
<style scoped lang="scss">
.b-card {
  &__price {
    &__strapped {
      color: rgb(162, 162, 162);
      text-decoration: line-through;
    }
  }
}
</style>
  