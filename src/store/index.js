import { createStore } from "vuex";

export default createStore({
  state: {
    currentUser: JSON.parse(localStorage.getItem("user")),
    user: null,
    bookmarks: null,
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
  },
});
