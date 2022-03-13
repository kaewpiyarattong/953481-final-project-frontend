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
  addBookmark(user_id, menu_id) {
    return apiClient.post("/add-bookmark", {
      user_id: user_id,
      menu_id: menu_id,
    });
  },

  removeBookmark(user_id, menu_id) {
    return apiClient.post("/remove-bookmark", {
      user_id: user_id,
      menu_id: menu_id,
    });
  },

  getBookmark(id) {
    return apiClient.post("/get-bookmark", {
      user_id: id,
    });
  },

  searchBookmark(id, query) {
    return apiClient.post("/search-bookmark", {
      user_id: id,
      query: query,
    });
  },
};
