import Vue from "vue";
import VueRouter from "vue-router";
import PageHome from "../PageHome.vue";
import PageAtendimento from "../PageAtendimento.vue";
import PageConclusao from "../PageConclusao.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "PageHome",
    component: PageHome
  },
  {
    path: "/atendimento",
    name: "PageAtendimento",
    component: PageAtendimento
  },
  {
    path: "/revisao",
    name: "PageConclusao",
    component: PageConclusao
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
