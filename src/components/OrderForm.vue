<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  name: 'OrderForm',
  data() {
    return {
      name: '',
      price: '',
      notes: '',
    };
  },
  computed: {
    isNew() {
      return !this.formOrder;
    },
    ...mapState([
      'formOrder',
    ]),
  },
  methods: {
    ...mapMutations([
      'hideForm',
    ]),
    ...mapActions([
      'add',
      'update',
    ]),
    submit() {
      const errMsg = [];
      if (this.name === '') errMsg.push('Please input name.');
      if (!/^[0-9]+$/.test(this.price)) errMsg.push('Incorrect format of price.');
      if (errMsg.length > 0) {
        alert(errMsg.join('\n'));
        return false;
      }
      const newOrder = {
        name: this.name,
        price: Number(this.price),
        notes: this.notes,
      };
      if (this.isNew) {
        this.add(newOrder);
      } else {
        this.update({
          id: this.formOrder.id,
          ...newOrder,
        });
      }
      this.hideForm();
      return true;
    },
  },
  mounted() {
    this.name = this.isNew ? '' : this.formOrder.name;
    this.price = this.isNew ? '' : this.formOrder.price;
    this.notes = this.isNew ? '' : this.formOrder.notes;
  },
};
</script>

<template lang="pug">
.OrderForm.modal
  .modal-container
    .modal-content
      .modal-header
        h2 {{ isNew ? 'New Order' : 'Update an Order' }}
      .modal-body
        form(@submit.prevent="submit")
          .input-item
            span.left.label
              span.warning *
              span Name
            input.right.name(type="text" placeholder="ex: 珍奶" v-model.trim="name")
          .input-item
            span.left.label
              span.warning *
              span Price
            input.right.price(type="tel" placeholder="ex: 45" v-model.trim="price")
          .input-item
            span.left.label Notes
            textarea.right.notes(maxlength="50" v-model.trim="notes")
          button.fake-btn(type="submit")
      .modal-footer
        a.btn.cancel-btn(href="javascript:;" @click="hideForm()") CANCEL
        a.btn.submit-btn(href="javascript:;" @click="submit") {{ isNew ? 'ADD' : 'UPDATE' }}
      //- a.modal-close-btn.btn.fas.fa-times(href="javascript:;")
</template>

<style lang="scss">
@import '../styles/_variable.scss';

.OrderForm {
  .input-item {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1em;
    width: 100%;
    &:last-child {
      margin-bottom: 0;
    }
    .label {
      padding: 0.5rem;
      text-align: right;
    }
    $left-w: 4rem;
    .left {
      position: relative;
      width: $left-w;
    }
    .right {
      position: relative;
      width: calc(100% - #{$left-w});
    }
  }
  input, textarea {
    color: $color-fg;
    background-color: $color-bg-2;
    border: 1px solid $color-fg;
    line-height: 1.5;
    padding: 0.5rem;
  }
  .fake-btn {
    display: none;
  }
  .modal-footer {
    display: flex;
    justify-content: space-between;
    .btn {
      width: 40%;
      text-align: center;
      font-weight: bold;
    }
  }

}
</style>
