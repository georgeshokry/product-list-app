<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="p-2 d-flex justify-space-between">
    <b-navbar-brand :to="{path: '/'}">Products</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav class="d-flex flex-row-reverse">
      <b-navbar-nav>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">


      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import Vue from 'vue';


export default Vue.extend({
    name: 'NavBar',
    components:{

    },

})
</script>
