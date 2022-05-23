import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import Home from "./views/Home";

Vue.config.productionTip = false;

new Vue({
  router,
  Home,
  render: h => h(App)
}).$mount("#app");
