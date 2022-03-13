<template>
  <div class="row justify-content-center">
    <h2>Your Bookmark</h2>
    <form class="container mt-5" @submit.prevent="searchMenu">
      <input
        v-model="search"
        style=""
        type="text"
        @change="changeQuery"
      />
      <button class="btn btn-primary" >Submit</button>
    </form>
    <div
      class="container text-danger"
      v-if="candidate_query != search"
      @click="search = candidate_query"
    >
      {{ candidate_query }}
    </div>

    <Card
      v-for="menu in $store.getters.getBookmark.menus"
      :key="menu.id"
      :menu="menu"
    />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import MenuService from "@/services/MenuService.js";


export default {
  name: "BookMark",
  data(){
    return{
      searchType: "",
      search: "",
      candidate_query: null,
      menus: null,
    }
  },
  components: {
    Card,
  },
  
  methods:{
    searchMenu() {
        MenuService.searchBookmark(this.$store.getters.getCurrentUser.id, this.search).then((res) => {
            this.$store.dispatch("setBookmark", res.data);
            this.candidate_query = res.data.candidate_query;
        });
      
    },
    changeQuery() {
      this.candidate_query = null;
    },
  }
};
</script>

<style scoped>
input {
  margin: 10px;
}
</style>
