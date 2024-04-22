import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/assets/store/index";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>",
  render: (h) => h(App),
  store,
}).$mount("#app");
