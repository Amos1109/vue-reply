import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/Subject",
    name: "Subject",
    component: () => import("@/views/Subject.vue")
  },
  {
    path: "/Result",
    name: "Result",
    component: () => import("@/views/Result.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
