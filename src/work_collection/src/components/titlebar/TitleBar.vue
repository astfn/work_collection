<template>
  <div id="TitleBar-CPN" class="ts-box_shadow ts-bg">
    <div class="left">
      <slot name="left">✨</slot>
    </div>
    <div class="center">
      <slot name="center">defaultContent</slot>
    </div>
    <div class="right">
      <slot name="right">✨</slot>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "TitleBar-CPN",
    setup() {},
  });
</script>
<style lang="less" scoped>
  #TitleBar-CPN {
    width: 100%;
    height: 45px;

    display: grid;
    grid-template-columns: 20% 60% 20%;
    text-align: center;

    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: 0px 1px 15px 0px var(--color10);

    background-color: var(--color7);
  }

  .left,
  .center,
  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: var(--color2);
  }
</style>
