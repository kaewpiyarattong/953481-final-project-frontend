<template>
  <div class="row justify-content-center">
    <form class="container mt-5" @submit.prevent="searchMenu">
      <select
        class="select"
        name="searchType"
        id="searchType"
        v-model="searchType"
      >
        <option value="" selected disabled>Select search type</option>
        <option value="BYNAME">Search by name</option>
        <option value="BYING">Search by ingredients</option>
      </select>
      <input
        v-model="search"
        style=""
        type="text"
        v-if="searchType"
        @change="changeQuery"
      />
      <button class="btn btn-primary" v-if="searchType">Submit</button>
    </form>

    <div
      class="container text-danger"
      v-if="candidate_query != search"
      @click="search = candidate_query"
    >
      {{ candidate_query }}
    </div>
    <Card
      v-for="menu in $store.getters.getMenus.menus"
      :key="menu.id"
      :menu="menu"
    />
    <nav class="navbar mt-10 justify-content-center">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <router-link
            class="page-link"
            :to="{ name: 'Home', query: { page: page - 1 } }"
            v-if="page > 1"
            >Previous</router-link
          >
        </li>
        <li class="page-link">{{ page }}</li>
        <li class="page-item">
          <router-link
            class="page-link"
            :to="{ name: 'Home', query: { page: page + 1 } }"
            >Next</router-link
          >
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { watchEffect } from "@vue/runtime-core";
import MenuService from "@/services/MenuService.js";

export default {
  name: "Home",
  components: {
    Card,
  },
  data() {
    return {
      menus: null,
      allMenu: null,
      searchType: "",
      search: "",
      candidate_query: null,
    };
  },
  props: {
    page: {
      type: Number,
      required: true,
    },
  },
  async created() {
    await watchEffect(() => {
      MenuService.getAllMenu(this.page).then((res) => {
        this.$store.dispatch("setMenus", res.data);
      });
    });
  },
  computed: {
    hasNextPage() {
      let totalPage = Math.ceil(this.allMenu / this.limit);
      return this.page < totalPage;
    },
  },
  methods: {
    searchMenu() {
      if (this.search != "") {
        if (this.searchType == "BYNAME") {
          MenuService.searchByName(this.search).then((res) => {
            this.$store.dispatch("setMenus", res.data);
            this.candidate_query = res.data.candidate_query;
          });
        } else {
          MenuService.searchByIngredients(this.search).then((res) => {
            this.$store.dispatch("setMenus", res.data);
            this.candidate_query = res.data.candidate_query;
          });
        }
      }
    },
    changeQuery() {
      this.candidate_query = null;
    },
  },
};
</script>

<style scoped></style>
