<template>
  <div id="app">
    <section class="catalog">
      <product-list :products="products"/>
      <base-pagination v-model="page" :count="countProducts" :per-page="productsPerPage"/>
    </section>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import products from './data/products';
import BasePagination from '@/components/BasePagination.vue';

export default {
  components: {
    ProductList,
    BasePagination,
  },
  name: 'App',
  data() {
    return {
      page: 1,
      productsPerPage: 3,
    };
  },
  computed: {
    products() {
      const offset = (this.page - 1) * this.productsPerPage;

      return products.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return products.length;
    },
  },
};
</script>
