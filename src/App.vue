<template>
  <div class="demo-wrapper">
    <div class="app-wrapper">
      <div id="app">
        <!-- <NavBar /> -->
        <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
        <Ppf msg="Welcome to PPF Calculator" />
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
//import NavBar from "./components/NavBar.vue";
import Ppf from "./components/Ppf.vue";

export default {
  name: "app",
  components: {
    // HelloWorld
    // NavBar,
    Ppf
  }
};
</script>

<style lang="scss">
@import "./src/assets/scss/main.scss";
</style>


