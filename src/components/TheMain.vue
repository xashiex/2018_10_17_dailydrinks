<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import OrderItem from './OrderItem.vue';

export default {
  name: 'TheMain',
  computed: {
    ...mapState([
      'list',
    ]),
  },
  methods: {
    ...mapMutations([
      'showForm',
    ]),
    ...mapActions([
      'remove',
    ]),
    onUpdate(order) {
      this.showForm(order);
    },
    onRemove(order) {
      this.remove(order);
    },
  },
  components: {
    OrderItem,
  },
};
</script>

<template lang="pug">
.TheMain
  .cc.padding
    table(v-if="list.length > 0")
      tbody
        OrderItem(
          v-for="order in list"
          :key="order.id"
          :order="order"
          @update="onUpdate"
          @remove="onRemove"
        )
    span(v-else) 還沒有東西耶~ 快來點些什麼吧~~~
</template>

<style lang="scss">
@import '../styles/_variable.scss';

.TheMain {
  padding-top: 4rem;
  padding-bottom: 1rem;
  background-color: $color-bg-2;
  margin-bottom: 3rem;
  table {
    width: 100%;
  }
  tr:nth-child(odd) {
    background-color: rgba(#000, 0.1);
  }
}
</style>
