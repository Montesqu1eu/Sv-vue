<template>
  <li class="cart__item product">
    <div class="product__pic">
      <img :src="item.product.image" width="120" height="120" :srcset="item.product.image + ' 2x'" alt="Название товара">
    </div>
    <h3 class="product__title">
      {{ item.product.title }}
    </h3>
    <span class="product__code">
      Артикул: {{ item.product.id }}
    </span>

    <div class="product__counter form__counter">
      <Counter @update="changeAmount" :default-num="amount"/>
    </div>

    <b class="product__price">
      {{ (amount * item.product.price) | numberFormat }} ₽
    </b>

    <button
      class="product__del button-del"
      type="button"
      aria-label="Удалить товар из корзины"
      @click.prevent="deleteProduct(item.productId)"
    >
      <svg width="20" height="20" fill="currentColor">
        <use xlink:href="#icon-close"></use>
      </svg>
    </button>
  </li>
</template>

<script>
import numberFormat from '@/helpers/numberFormat';
import { mapMutations } from 'vuex';
import Counter from '@/components/Counter';

export default {
  name: 'CartItem',
  components: { Counter },
  filters: {
    numberFormat
  },
  data() {
    return {
      amount: null,
    };
  },
  props: {
    item: {
      type: Object,
      default: {}
    }
  },
  beforeMount() {
    this.amount = this.item.amount;
  },
  methods: {
    ...mapMutations({
      deleteProduct: 'deleteCartProduct',
      updateCartProductAmount: 'updateCartProductAmount'
    }),
    changeAmount(amount) {
      this.amount = amount;
      this.updateCartProductAmount({
        productId: this.item.product.id,
        amount: this.amount
      });
    }
  },
};
</script>

<style scoped>

</style>
