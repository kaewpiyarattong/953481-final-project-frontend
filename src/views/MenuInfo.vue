<template>
  <div class="row justify-content-center mx-5 mb-2">
    <h3>Name: {{ $store.getters.getMenu.menu[0].title }}</h3>
    <img
      class="img-thumbnail"
      v-if="$store.getters.getMenu.menu[0].image_name"
      :src="
        require(`../assets/FoodImages/${$store.getters.getMenu.menu[0].image_name}`)
      "
    />
      <h3>Ingredients: </h3>
      <ul>
      <li class="list-unstyled" v-for="k,w in $store.getters.getMenu.menu[0].ingredients.split(',')" :key="w">{{k}}</li>
      </ul>
    
      <h3> Instructions: </h3>
      {{ $store.getters.getMenu.menu[0].instructions }}
  </div>
  <button type="submit" @click="addBookmark" v-if="$store.getters.getMenu.menu[0].id in getBookmarkID" class="btn btn-dark btn-lg btn-block">
    Add to Bookmark
  </button>

  <button type="submit" @click="removeBookmark" v-else class="btn btn-dark btn-lg btn-block">
    Remove from Bookmark
  </button>

</template>

<script>
import MenuService from "@/services/MenuService.js";

export default {
  name: "MenuInfo",
  methods: {
    addBookmark(){
      MenuService.addBookmark(this.$store.getters.getCurrentUser.id, this.$store.getters.getMenu.menu[0].id).then(
        res=>{
          console.log(res)
          this.$router.push({name:'Bookmark'})
        }
      )
    },
    removeBookmark(){
      MenuService.removeBookmark(this.$store.getters.getCurrentUser.id, this.$store.getters.getMenu.menu[0].id).then(
        res=>{
          console.log(res)
          this.$router.push({name:'Bookmark'})
        }
      )
    }
  },
  computed: {
    getBookmarkID(){
      let kai = []
      for (let i = 0; i < this.$store.getters.getBookmark.menus.length; i++) {
        kai.push(this.$store.getters.getBookmark.menus[i].id)
      }
      return kai
    }
  },
};
</script>

<style scoped>
img {
  width: 400px;
  height: auto;
}
</style>
