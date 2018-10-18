<script>
import { mapState } from 'vuex';
import TheHeader from './components/TheHeader.vue';
import TheMain from './components/TheMain.vue';
import TheFooter from './components/TheFooter.vue';
import OrderForm from './components/OrderForm.vue';

export default {
  name: 'app',
  computed: {
    ...mapState([
      'isShowForm',
    ]),
  },
  components: {
    TheHeader,
    TheMain,
    TheFooter,
    OrderForm,
  },
};
</script>

<template lang="pug">
  .App
    TheHeader
    TheMain
    TheFooter
    OrderForm(v-if="isShowForm")
</template>

<style lang="scss">
@import './styles/_common.scss';
</style>
