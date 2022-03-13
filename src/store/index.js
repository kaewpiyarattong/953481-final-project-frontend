import { createStore } from "vuex";

export default createStore({
  state: {
    currentUser: JSON.parse(localStorage.getItem("user")),
    user: null,
    bookmarks: null,
    menu: null,
    menus: null,
  },
  getters: {
    getCurrentUser(state) {
      return state.currentUser;
    },
    getUser(state) {
      return state.user;
    },
    getBookmark(state) {
      return state.bookmarks;
    },
    getMenu(state) {
      return state.menu;
    },
    getMenus(state) {
      return state.menus;
    },
  },
  mutations: {
    setCurrentUser(state, value) {
      state.currentUser = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setBookmark(state, value) {
      state.bookmarks = value;
    },
    setMenu(state, value) {
      state.menu = value;
    },
    setMenus(state, value) {
      state.menus = value;
    },
  },
  actions: {
    setCurrentUser(context, value) {
      context.commit("setCurrentUser", value);
    },
    setUser(context, value) {
      context.commit("setUser", value);
    },
    setBookmark(context, value) {
      context.commit("setBookmark", value);
    },
    setMenu(context, value) {
      context.commit("setMenu", value);
    },
    setMenus(context, value) {
      context.commit("setMenus", value);
    },
  },
});
