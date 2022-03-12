import apiClient from "@/services/AxiosClient.js";
import store from "@/store/index";

export default {
  login(user) {
    return apiClient
      .post("/auth", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        return Promise.resolve(response.data);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  },
  register(user) {
    console.log(user);
    return apiClient
      .post("/register", {
        username: user.username,
        password: user.password,
      })
      .then((response) => {
        store.dispatch("setCurrentUser", response.data.user);
        return Promise.resolve(response.data);
      })
      .catch((error) => {
        return Promise.reject(error);
      });
  },
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    store.dispatch("setCurrentUser", null);
  },
};
