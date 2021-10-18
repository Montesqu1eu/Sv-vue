import Vue from "vue";
import App from "./App.vue";

import { firstInfo, secondInfo } from "./data";

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
