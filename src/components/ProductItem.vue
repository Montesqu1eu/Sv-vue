<template>
  <li class="catalog__item">
    <a
      class="catalog__pic"
      href="#" @click.prevent="goToPage('product',{id:product.id})"
    >
      <img
        :src="product.image"
        :alt="product.title"
      >
    </a>

    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>
    <span class="catalog__price">
      {{ product.price | numberFormat }} Р
    </span>

    <ul class="colors colors--black">
      <li
        v-for="color in product.colors"
        :key="color.colorId"
        class="colors__item"
      >
        <label class="colors__label">
          <input
            v-model="color.colorId"
            class="colors__radio sr-only"
            type="radio"
            value="#73B6EA"
            name="color"
          >
          <span
            class="colors__value"
            :style="{'background-color': color.colorValue}"
          />
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
import goToPage from '@/helpers/goToPage';
import numberFormat from '@/helpers/numberFormat';

export default {
  name: 'ProductItem',
  props: ['product'],
  filters: {
    numberFormat
  },
  methods: {
    goToPage
  }

};
</script>

<style>

</style>
