<template>
    <div class="d-flex align-items-center">
      <b-form-rating :value="rating" variant="warning" inline precision="2" no-border class="px-0"  readonly></b-form-rating> 
      <span class="ms-2" v-if="reviews !== 0">({{reviews}})</span>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    name: 'ProductRate',
    props:{
        rating:{
            type: Number,
            default: 0,
            required:true
        },
        reviews:{
            type: Number,
            default: 0,
            required:true
        },
    }
});
</script>