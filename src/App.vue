<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <v-Header></v-Header>
    <router-view />
    <v-Footer></v-Footer>
  </div>
</template>
<script>
import VHeader from "./components/Header";
import VFooter from "./components/Footer";

export default {
  name: "home",
  components: {
    VHeader,
    VFooter
  },
  props: {
    msg: String
  }
};
</script>
<style>
@import "./init.less";
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
