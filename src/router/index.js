import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import MenuService from "@/services/MenuService.js";
import store from "@/store/index";
import MenuInfo from "@/views/MenuInfo.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: (route) => ({
      page: parseInt(route.query.page) || 0,
    }),
    beforeEnter: (to) => {
      MenuService.getAllMenu(to.query.page).then((res) => {
        store.dispatch("setMenus", res.data);
      });
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/menuInfo/:id",
    name: "MenuInfo",
    component: MenuInfo,
    beforeEnter: (to) => {
      MenuService.getMenuById(to.params.id).then((res) => {
        console.log(res.data);
        store.dispatch("setMenu", res.data);
      });
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
