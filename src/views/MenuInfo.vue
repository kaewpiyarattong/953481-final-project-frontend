<template>
    <div class="row justify-content-center">
        <!-- <img
             class="img-thumbnail"
             v-if="$store.getters.getMenu"
        /> -->
        {{$store.getters.getMenu.menu}}
        <!-- <h3>Name: {{menu.title}}</h3> -->
    </div>
</template>

<script>


export default({
    name: "MenuInfo",
    // data:{
    //     menu: null,
    // }
})
</script>
