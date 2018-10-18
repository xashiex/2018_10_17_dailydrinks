<script>
import { mapMutations } from 'vuex';

export default {
  name: 'TheHeader',
  methods: {
    ...mapMutations([
      'showForm',
    ]),
  },
};
</script>

<template lang="pug">
.TheHeader
  .cc.padding
    h1 Daily Drinks
    a.btn.add-btn.padding.fas.fa-plus(
      href="javascript:;"
      title="Add a New Order"
      @click="showForm()"
    )
</template>

<style lang="scss">
@import '../styles/_variable.scss';
@import '../styles/_mixin.scss';

.TheHeader {
  position: fixed;
  width: 100%;
  background-color: $color-bg;
  .cc {
    position: relative;
  }
  .add-btn {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    display: block;
    font-size: 2rem;
    color: $color-fg;
    border-width: 2px;
    background-color: $color-bg;
  }
}
</style>
