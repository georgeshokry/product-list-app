<template functional>
  <div class="text-center not-found">
    <b-container>
      <b-row class="justify-content-center align-items-center">

        <!-- Main Content -->
        <b-col cols="12" md="8">
          <h1 class="not-found__main-head">
            <b-icon icon="exclamation-triangle-fill" variant="danger"></b-icon> 404
          </h1>
          <p class="not-found__lead">
            <b-icon icon="emoji-frown" variant="warning"></b-icon> Oops! The page you're looking for can't be found.
          </p>
          <b-button variant="primary" :to="{name:'products'}">
            <b-icon icon="house-door-fill"></b-icon> Go Home
          </b-button>
        </b-col>


      </b-row>
    </b-container>
  </div>
</template>
<style scoped lang="scss">
.not-found {
  margin-top: 5rem;

  &__main-head {
    font-size: 6rem;
    margin-top: 2rem;
  }

  &__lead {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
}
</style>
  