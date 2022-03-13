<template>
  <div class="row justify-content-center">
    <select class="select" name="searchType" id="searchType" v-model="searchType">
      <option value="">Select search type</option>
      <option value="BYNAME">Search by name</option>
      <option value="BYING">Search by ingredients</option>
    </select>
    <input v-model="search" style="margin-left:10px;" type="text">
    <Card v-for="menu in $store.getters.getMenus.menus" :key="menu.id" :menu ="menu" />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { watchEffect } from '@vue/runtime-core';
import MenuService from '@/services/MenuService.js'

export default {
  name: "Home",

  components:{
    Card,
  },

  data(){
    return{
      menus: null,
      allMenu:null,
      searchType: "",
      search: ""
    }
  },
  async created(){
    await watchEffect(()=>{
      if(this.serch != null){
      if (this.searchType == "BYNAME"){
        MenuService.searchByName(this.search)
          .then((res)=>{
            this.menus = res.data;
            this.Allmenu = res.headers["x-total-count"]
          })
          .catch((e) => {
              console.log(e);
            });
      }
      else if(this.searchType == "BYING"){
        MenuService.searchByIngredients(this.search)
          .then((res)=>{
            this.menus = res.data;
            this.Allmenu = res.headers["x-total-count"]
          })
          .catch((e) => {
              console.log(e);
            });
      }}
    })
    
  },
  computed:{
    hasNextPage() {
      let totalPage = Math.ceil(this.allMenu / this.limit);
      return this.page < totalPage;
    },
  }
};
</script>

<style scoped>
</style>
