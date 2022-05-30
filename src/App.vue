<template>
  <component :is="currentPageComponent" :page-params="currentPageParams"/>
</template>
<script>
import MainPage from '@/views/MainPage.vue';
import ProductPage from '@/views/ProductPage.vue';
import NotFoundPage from '@/views/NotFoundPage';
import eventBus from '@/views/eventBus';

const routes = {
  main: MainPage,
  product: ProductPage
};

export default {
  components: {
    NotFoundPage,
    MainPage,
    ProductPage,
  },
  data() {
    return {
      currentPage: 'main',
      currentPageParams: {}
    };
  },
  methods: {
    goToPage(pageName, pageParams) {
      this.currentPage = pageName;
      this.currentPageParams = pageParams || {};
    }
  },
  computed: {
    currentPageComponent() {
      return routes[this.currentPage] || 'NotFoundPage';
    }
  },
  created() {
    eventBus.$on('goToPage', (pageName, pageParams) => this.goToPage(pageName, pageParams));
  }
};

</script>
<style lang="scss"></style>
