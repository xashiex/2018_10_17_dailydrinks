<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TheFooter',
  computed: {
    ...mapState([
      'list',
    ]),
    totalDrinks() {
      return this.list.length;
    },
    totalPrices() {
      return this.list.reduce((acc, current) => acc + current.price, 0);
    },
  },
  methods: {
    ...mapActions([
      'clear',
    ]),
    onClear() {
      if (window.confirm('Are you sure you want to CLEAR ALL ORDERS?')) {
        this.clear();
      }
    },
  },
};
</script>

<template lang="pug">
.TheFooter
  .cc.padding
    span Total Drinks: {{ totalDrinks | currency }}
    span Total Prices: ${{ totalPrices | currency }}
    a.btn.clear-btn(href="javascript:;" title="Clear All Orders" @click="onClear") CLEAR ALL
</template>

<style lang="scss">
@import '../styles/_variable.scss';
@import '../styles/_mixin.scss';

.TheFooter {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: $color-bg;
  span {
    margin-left: 1rem;
    &:first-of-type {
      margin-left: 0;
    }
  }
  .cc {
    position: relative;
    display: flex;
    align-items: center;
  }
  .clear-btn {
    margin-left: auto;
    color: $color-warning;
    border-color: $color-warning;
  }
}
</style>
