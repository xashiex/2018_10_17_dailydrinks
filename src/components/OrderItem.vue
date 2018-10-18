<script>
export default {
  name: 'OrderItem',
  props: {
    order: undefined,
  },
  methods: {
    update() {
      this.$emit('update', this.order);
    },
    remove() {
      if (window.confirm('Are you sure you want to DELETE this order?')) {
        this.$emit('remove', this.order);
      }
    },
  },
};
</script>

<template lang="pug">
tr.OrderItem
  td.name {{ order.name }}
  td.price ${{ order.price | currency }}
  td.notes {{ order.notes }}
  td.btns
    a.btn.update-btn.fas.fa-pen(href="javascript:;" title="Update" @click="update")
    a.btn.remove-btn.fas.fa-trash-alt(href="javascript:;" title="Delete" @click="remove")
</template>

<style lang="scss">
@import '../styles/_variable.scss';
@import '../styles/_mixin.scss';

.OrderItem {
  font-size: 1rem;
  width: 100%;
  td {
    padding: 0.5rem;
    vertical-align: middle;
    line-height: 1.25;
  }
  .price {
    text-align: center;
  }
  .btns {
    text-align: right;
    white-space: nowrap;
  }
  .btn {
    font-size: 0.5em;
    text-align: center;
    color: $color-fg;
    background-color: $color-bg;
    margin-right: 0.5em;
    &:last-child {
      margin-right: 0;
    }
    &.remove-btn {
      color: $color-warning;
      border-color: $color-warning;
    }
  }
}
</style>
