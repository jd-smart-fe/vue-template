<template>
  <section class="welcome-wrap">
    <div class="welcome-main">
      <h2 class="title">Welcome to vue</h2>
    </div>
    <Counter></Counter>
  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import Counter from './Counter';

  export default {
    name: 'Welcome',
    components: {
      Counter,
    },
  };
</script>

<style>
  .welcome-wrap {
    text-align: center;
  }
  .welcome-main {
    padding: 1.5rem 0.3rem 0.4rem;
    background: url(./images/logo.png) center 0.4rem no-repeat;
    background-size: 0.6rem;
    text-align: center;
    margin-bottom: 0.4rem;
    .title {
      font-size: 0.22rem;
      line-height:0.3rem;
    }
  }
</style>
