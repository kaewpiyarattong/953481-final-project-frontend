import apiClient from "@/services/AxiosClient.js";

export default {
  getAllMenu(page) {
    return apiClient.get("/getAllMenu/" + page);
  },
  getMenuById(id) {
    return apiClient.get("/getMenu/" + id);
  },
  searchByName(query) {
    return apiClient.post("/search-title", {
      query: query,
    });
  },
  searchByIngredients(query) {
    return apiClient.post("/search-ingredients", {
      query: query,
    });
  },
  addBookmark() {
    return apiClient.post("/add-bookmark");
  },
  removeBookmark() {
    return apiClient.post("/remove-bookmark");
  },
  getBookmark() {
    return apiClient.post("/get-bookmark");
  },
};
