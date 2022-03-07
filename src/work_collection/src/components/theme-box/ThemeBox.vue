<template>
  <div id="ThemeBox-CPN">
    <div class="wrapper-box" :style="wrapperBoxStyle">
      <div class="color-box" :style="colorBoxStyle" />
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "ThemeBox-CPN",
    props: { theme: { type: Object, require: true, default: () => ({}) } },
    setup(props) {
      const theme = props.theme;

      let wrapperBoxStyle = {
        border: `2px solid ${theme["--color9"]}`,
        "box-shadow": `0px 0px 3px 5px  ${theme["--color3"]}`,
      };
      let colorBoxStyle = {
        "background-color": theme["--color5"],
        "box-shadow": `0px 0px 3px 5px  ${theme["--color6"]}`,
      };

      return {
        wrapperBoxStyle,
        colorBoxStyle,
      };
    },
  });
</script>
<style lang="less" scoped>
  #ThemeBox-CPN {
    width: 100%;
    height: 100%;
  }
  .wrapper-box {
    padding: 20px;
    width: 100%;
    height: 100%;
    border-radius: 35px;
    // border: 2px solid ;
    transition: 0.6s;

    & > .color-box {
      width: 100%;
      height: 100%;
      border-radius: 40px;
      // background-color: chocolate;
      transition: 0.6s;
    }

    &:hover {
      &,
      & > .color-box {
        border-radius: 50%;
        transform: rotate(360deg);
      }
    }
  }
</style>
