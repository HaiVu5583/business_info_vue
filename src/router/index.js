import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
// import Home from "../views/Home.vue";
// import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("user");
  if (to.name !== "Login" && !isAuthenticated) next({ name: "Login" });
  else next();
});

export default router;
