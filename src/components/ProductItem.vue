<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#">
      <img
        :src="product.image"
        :alt="product.title"
      />
    </a>

    <h3 class="catalog__title">
      <a href="#">
        {{ product.title }}
      </a>
    </h3>

    <span class="catalog__price">
              {{ product.price }}
        </span>

    <ul class="colors colors--black">
      <li class="colors__item" v-for="color in product.color" :key="color.colorId">
        <label class="colors__label">
          <input
            class="colors__radio sr-only"
            type="radio"
            value="#73B6EA"
            name="color"
            v-model="color.colorId"
          />
          <span
            class="colors__value"
            :style="{'background-color':  color.colorValue}"
          >
              </span>
        </label>
      </li>

    </ul>
  </li>
</template>

<script>

export default {
  name: 'ProductItem',
  props: ['product'],
};
</script>

<style>

</style>
