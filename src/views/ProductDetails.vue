<template>
    <div>
        <h2>Product Details</h2>
        <p>Product ID: {{ $route.params.productId }}</p>
    </div>
</template>

<script>

export default {
    name: 'ProductDetails',
    data(){
        return {
            noData: "no data"
        }
    }
}
</script>
    