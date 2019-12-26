<template>
  <div id="app">
    <div class="el-container">
      <div class="el-row">
        <NavBar />
      </div>
      <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
      <div class="el-row">
        <Ppf msg="Welcome to PPF Calculator" />
      </div>
    </div>
  </div>
</template>

<script>
//import HelloWorld from "./components/HelloWorld.vue";
import NavBar from "./components/NavBar.vue";
import Ppf from "./components/Ppf.vue";

export default {
  name: "app",
  components: {
    // HelloWorld
    NavBar,
    Ppf
  }
};
</script>

<style lang="scss">
@import "./src/assets/scss/main.scss";
</style>


