<template>
    <b-container class="flex-grow-1 py-4">
        <b-overlay :show="getLoader" no-wrap></b-overlay>
            <b-card no-body class="overflow-hidden" v-if="getProductById">
                <b-row no-gutters>
                <b-col md="6">
                    <b-card-img-lazy :src="getProductById.images[0]"  :alt="getProductById.title" class="rounded-0 product-details__image" />
                </b-col>
                <b-col md="6">
                    <b-card-body :title="getProductById.title">
                        <h5>Brand: {{getProductById.brand}}</h5>
                        <b-card-text>
                            {{getProductById.description}}
                        </b-card-text>
                        <b-badge class="product-details__category-badge" >{{getProductById.category}}</b-badge>
                        <!-- price -->
                        <hr/>
                        <ProductPrice :price="getProductById.price" :discountPercentage="getProductById.discountPercentage"/>
                        <div class="mb-2"> All prices include TAX.</div>
                        <!-- review -->
                        <b-badge  class="product-details__discount-badge">
                            -{{getProductById.discountPercentage}}%
                        </b-badge>
                        <ProductRate class="mt-2" :rating="getProductById.rating" :reviews="getProductById.reviews.length"/>
                        <hr/>
                        <span class="product-details__low-stock" v-if="getProductById.stock <= 5"> Only {{getProductById.stock}} left in stock - order soon. </span>
                        <b-table-simple >
                            <b-tbody>
                                <b-tr>
                                <b-th>Dimensions</b-th>
                                <b-td>{{ getProductById.dimensions.height }} X {{ getProductById.dimensions.width }} X {{ getProductById.dimensions.depth }}</b-td>
                                </b-tr>
                                <b-tr>
                                <b-th>Weight</b-th>
                                <b-td>{{ getProductById.weight }}</b-td>
                                </b-tr>
                                <b-tr>
                                <b-th>SKU</b-th>
                                <b-td>{{ getProductById.sku }}</b-td>
                                </b-tr>
                                <b-tr>
                                <b-th>Warranty Information</b-th>
                                <b-td>{{ getProductById.warrantyInformation }}</b-td>
                                </b-tr>
                            </b-tbody>
                        </b-table-simple>
                    </b-card-body>
                </b-col>
            </b-row>
            <template #footer>
                <div class="d-flex justify-content-end">
                    <b-button variant="primary">Add to cart</b-button>
                </div>
            </template>
            </b-card>
            <h5 class="product-details__review-title">Customer Reviews</h5>
            <div v-if="getProductById">
                <div v-for="(review, index) in getProductById.reviews" :key="index" class="mb-4">
                    <ProductUsersReview class="my-3" :review="review"/>
                    <hr v-if="index != getProductById.reviews.length - 1">
                </div>
            </div>
    </b-container>
</template>

<script lang="ts">
import Vue from 'vue';
import ProductStore from '@/store/ProductStore';
import ProductPrice from '@/components/productDetails/ProductPrice.vue';
import { mapState } from 'pinia';
import ProductRate from '@/components/productDetails/ProductRate.vue';
import ProductUsersReview from '@/components/productDetails/ProductUsersReview.vue';

export default Vue.extend({
    name: 'ProductDetails',
    components:{
        ProductPrice,
        ProductRate,
        ProductUsersReview
    },
    data(){
        return {
            productsStore: ProductStore(),
        }
    },
    computed:{
        ...mapState(ProductStore, {
            getLoader: 'getLoader',
            getProductById: 'getSingleProduct'
        }),
    },
    async mounted(){
        console.log("🚀 ~ mounted ~ this.$route.currentRouter.params:", this.$router.currentRoute.params.productId)
        try {
            await this.productsStore.getProductById(parseInt(this.$router.currentRoute.params.productId))
        } catch (error) {
            this.$router.push({ name: 'not-found' });
        } 
    },
});
</script>
<style lang="scss" scoped>
.product-details{
    &__discount-badge {
        padding: 10px;
        font-size: 1rem;
        background-color: red;
        color: white;
    }

    &__category-badge{
        padding: 10px;
        background-color: blue;
        color: white;
        font-size:0.8rem;
        border-radius: 10%;
    }
    &__low-stock{
        font-weight: bold;
        color: rgb(156, 0, 0);
    }
    &__image{
        min-height: 635px;
        object-fit: cover;
    }
    &__review-title{
        font-weight: bold;
        margin-top: 50px;
    }
}
</style>
    