<template>
  <div id="Theme-CPN">
    <title-bar>
      <template v-slot:left><h2>🎨</h2></template>
      <template v-slot:center><h2>Theme</h2></template>
      <template v-slot:right><h2>🎨</h2></template>
    </title-bar>

    <div class="content">
      <div class="theme-item" v-for="item in themes" @click="setTheme(item)">
        <theme-box :theme="item" />
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import TitleBar from "components/titlebar/TitleBar.vue";
  import ThemeBox from "components/theme-box/ThemeBox.vue";

  import { themes } from "common/local-data.js";
  import { setTheme } from "common/utils.js";

  export default defineComponent({
    name: "Theme-CPN",
    components: {
      TitleBar,
      ThemeBox,
    },
    setup() {
      // console.log(themes);
      return { themes, setTheme };
    },
  });
</script>
<style lang="less" scoped>
  #Theme-CPN {
    width: 100%;
    height: 100%;
    // background-color: var(--color1);
  }

  .content {
    margin: 40px auto 0px;
    padding: 0px 20px;

    width: 100%;
    max-width: 700px;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    & > .theme-item {
      margin: 20px 10px;
      width: 150px;
      height: 150px;
      cursor: pointer;
    }
  }
</style>
