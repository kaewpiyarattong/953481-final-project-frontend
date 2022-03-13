<template>
  <div class="row justify-content-center mx-5 mb-2">
    <h3>Name: {{ $store.getters.getMenu.menu[0].title }}</h3>
    <img
      class="img-thumbnail"
      v-if="$store.getters.getMenu.menu[0].image_name"
      :scr="$store.getters.getMenu.menu[0].image_name"
    />
    <p>
      <strong>Ingredients: </strong>
      {{ $store.getters.getMenu.menu[0].ingredients }}
    </p>
    <p>
      <strong> Instructions: </strong>
      {{ $store.getters.getMenu.menu[0].instructions }}
    </p>
  </div>
  <button
    @click="saveBookmark"
    type="submit"
    class="btn btn-dark btn-lg btn-block"
  >
    Add to Bookmark
  </button>
  <button
    @click="deleteBookmark"
    type="submit"
    class="btn btn-danger mx-2"
  >
    Delet from bookmark
  </button>
</template>

<script>
import MenuService from "@/services/MenuService.js";

export default {
  name: "MenuInfo",
  methods: {
    saveBookmark() {
      MenuService.addBookmark(
        this.$store.getters.getCurrentUser.id,
        this.$store.getters.getMenu.menu[0].id
      )
        .then((res) => {
          console.log(res);
          this.$router.push({name:"BookMark"})
        })
        .catch(() => {
          console.log("could not add to bookmark");
        });
    },
    deleteBookmark(){
        MenuService.removeBookmark(
            this.$store.getters.getCurrentUser.id,
            this.$store.getters.getMenu.menu[0].id
        )
        this.$router.push({name:"BookMark"})
        this.$router.go()
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
