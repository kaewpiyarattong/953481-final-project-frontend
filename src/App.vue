<template>
  <div id="nav">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light"
      v-if="this.$store.getters.getCurrentUser != null"
    >
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link :to="{ name: 'Home' }"
              ><a class="nav-link">Home</a></router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Bookmark' }"
              ><a class="nav-link">Bookmark</a></router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <router-view />
</template>

<script>
import AuthService from "@/services/AuthService.js";

export default {
  methods: {
    logout() {
      AuthService.logout();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
