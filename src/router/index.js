import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Callback from "../components/Callback.vue";

Vue.use(VueRouter);

const routesData = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/callback",
    name: "callback",
    component: Callback
  }
];

const router = new VueRouter({
  mode: "history",
  routes: routesData
});

export default router;
