<template>
  <section class="counter-box">
    当前数值为：{{count}}
    <button
      class="btn-increase"
      @click="handleIncrease"
    >
      点击增加
    </button>
  </section>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'Counter',

    computed: {
      ...mapGetters({
        count: 'count',
      }),
    },

    methods: {
      ...mapActions({
        setCount: 'setCount',
      }),

      /* 数量增加 */
      handleIncrease() {
        const count = this.count + 1;
        this.setCount(count);
      },
    },
  };
</script>

<style>
  .counter-box {
    .btn-increase {
      padding: 0 0.3rem;
      height:0.4rem;
      line-height:0.4rem;
      background:#1ab885;
      color:#fff;
      margin: 0 0.2rem;
    }
  }
</style>
