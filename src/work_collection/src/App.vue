<template>
  <side-bar />
  <div id="main" class="ts-bg">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script>
  import SideBar from "components/sidebar/SideBar.vue";
  import { initTheme } from "common/utils.js";
  export default {
    name: "App",
    components: { SideBar },
    setup() {
      initTheme();
    },
  };
</script>
<style>
  @import "assets/css/index.css";
</style>
