<template>
  <div class="row justify-content-center">
    <h2>Your Bookmark</h2>
    <Card
      v-for="menu in $store.getters.getBookmark.menus"
      :key="menu.id"
      :menu="menu"
    />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "BookMark",
  components: {
    Card,
  },
  data(){
      return{
          menus:null
      }
  }
};
</script>
