import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";
import MenuService from "@/services/MenuService.js"
import store from "@/store/index";
import MenuInfo from "@/views/MenuInfo.vue"
import BookMark from "@/views/BookMark.vue"
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: () => {
      MenuService.getAllMenu(1)
        .then((res)=>{
          console.log(res.data)
          store.dispatch("setMenus", res.data)
        })
    }
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
    beforeEnter:(to)=>{
      MenuService.getMenuById(to.params.id)
        .then((res)=>{
          console.log(res.data)
          store.dispatch("setMenu",res.data)
        })
    }
  },
  {
    path:"/bookMark",
    name:"BookMark",
    component: BookMark,
    beforeEnter:(to)=>{
      MenuService.getBookmark(to.params.id)
        .then((res)=>{
          console.log(res.data)
          store.dispatch("setBookmark",res.data)
        })
    }
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
