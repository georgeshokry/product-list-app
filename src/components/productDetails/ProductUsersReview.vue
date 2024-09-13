<template>
    <b-container>
      
        <b-row>
          <!-- User Avatar and Name -->
          <b-col xs="12" md="2" class="text-center">
            <p class="font-weight-bold">{{ review.reviewerName }}</p>
          </b-col>
          
          <!-- Review Content -->
          <b-col xs="12" md="10">
            
            <!-- Star Ratings -->
            <b-row class="mb-2">
              <b-col cols="12">
                <ProductRate :rating="review.rating" :reviews="0"/>
              </b-col>
            </b-row>

            <!-- Review Text -->
            <b-row>
              <b-col cols="12">
                <p>{{ review.comment }}</p>
              </b-col>
            </b-row>

            <!-- Review Date and Purchase Info -->
            <b-row>
              <b-col cols="12">
                <small class="text-muted">
                  Reviewed on {{ review.date | formateReviewDate }}
                </small>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
    </b-container>
  </template>
  
<script lang="ts">
import Vue from 'vue';
import ProductRate from './ProductRate.vue';
import {Review} from '@/store/ProductTypes'
import { PropType } from '@vue/composition-api';
import {formateDate} from '@/utils/formateDate'
export default Vue.extend({
    name: 'ProductUsersReview',
    props:{
        review:{
            type: Object as PropType<Review>,
            required: true
        },
    },
    components:{
        ProductRate
    },
    filters:{
        formateReviewDate(date: Date){
            return formateDate(date)
        }
    },
    data() {
        return {

        };
    },
});
</script>