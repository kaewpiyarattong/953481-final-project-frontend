<template>
    <div class="col-md-4 mt-2 card">
      <router-link :to="{ name: 'MenuInfo', params:{id:menu.id} }">
        <!-- image -->
        <div>
            <img 
            class="img-fluid"
            v-if="menu.image_name.length"
            :src="menu.image_name"
            
        />
        </div>
        <!-- name -->
        <div class="card-body">
          <h5 class="card-title">
            {{ menu.title }}
          </h5>
        </div>
        </router-link>
    </div>
</template>

<script>
// import MeneService from "@/services/MenuService.js";

export default {
  name: "Card",
  props:{
    menu: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.card {
  background-color: #FFEFD8;
  color: #000000;
  margin: 20px;
  padding-bottom: 8px;
  border-radius: 10px;
  align-items: center;
}
.card:hover {
  background-color: #FEC994;
}
.event-card {
  padding: 20px;
  cursor: pointer;
  border: 1px solid hsl(30, 92%, 59%);
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
