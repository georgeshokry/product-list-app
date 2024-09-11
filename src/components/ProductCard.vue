<template>
    <b-card 
      title="Product Name" 
      img-src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" 
      img-alt="Image" 
      img-top
      class="custom-card img-fluid"
    >
      <b-card-text>
        The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.
      </b-card-text>
      <div class="d-flex align-items-center">
          <b-form-rating value="3" variant="warning" inline precision="2" no-border class="px-0"></b-form-rating> <span class="ms-2">(3)</span>
      </div>

      <h4 class="my-2 font-weight-bold">€ <span>{{priceAfterDiscount(9.99, 7.17)}} </span>   <span class="b-card__price__strapped">€ 9.99</span></h4>
      <template #footer>
        <div class="d-flex justify-content-end">
            <b-button variant="outline-secondary" class="me-2">View details</b-button>
            <b-button variant="primary" >Add to cart</b-button>
      </div>
      </template>
    </b-card>
  </template>

<script>

export default {
    name: 'ProductCard',
    data(){
        return {

        }
    },
    methods:{
        priceAfterDiscount(originalPrice,discountPercentage){
            const discountDecimal = discountPercentage / 100;
            const discountAmount = originalPrice * discountDecimal;
            const finalPrice = originalPrice - discountAmount;
            console.log("🚀 ~ priceAfterDiscount ~ finalPrice:", finalPrice)
            
            return finalPrice.toFixed(2);
        }
    }
}
</script>
<style lang="scss" scoped>
.custom-card {
  .card-img-top {
    max-height: 200px;
    object-fit: cover;
  }
}
.b-card{
    &__price{
        &__strapped{
            color: rgb(162, 162, 162);
            text-decoration: line-through;
        }
    }
}
</style>