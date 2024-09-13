<template>
    <div>
      <router-view></router-view>
      <b-button pill  v-show="showButton" @click="scrollToTop" class="scroll-to-top">
        <b-icon icon="arrow-up"></b-icon>
      </b-button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductsWrapper',
    data() {
    return {
      showButton: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.checkScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkScroll);
  },
  methods: {
    checkScroll() {
      this.showButton = window.scrollY > 300;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
  };
  </script>

<style scoped lang="scss">
.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
}
</style>