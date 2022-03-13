<template>
    <div class="row justify-content-center mx-5 mb-2">        
        <h3>Name: {{$store.getters.getMenu.menu[0].title}}</h3>
        <img
             class="img-thumbnail"
             v-if="$store.getters.getMenu.menu[0].image_name"
             :scr="$store.getters.getMenu.menu[0].image_name"
        />
        <p><strong>Ingredients: </strong> {{$store.getters.getMenu.menu[0].ingredients}}</p>
        <p><strong> Instructions: </strong> {{$store.getters.getMenu.menu[0].instructions}}</p>
    </div>
    <button type="submit" class="btn btn-dark btn-lg btn-block">
          Add to Bookmark
        </button>
</template>

<script>


export default({
    name: "MenuInfo",
    // data:{
    //     menu: null,
    // }
})
</script>

<style scoped>
img{
    width: 400px;
    height: auto;
}
</style>
