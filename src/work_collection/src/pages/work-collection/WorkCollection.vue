<template>
  <div id="WorkCollection-CPN">
    <title-bar>
      <template v-slot:left><h2>✨</h2></template>
      <template v-slot:center><h2>Work Collection</h2></template>
      <template v-slot:right><h2>✨</h2></template>
    </title-bar>

    <div class="content">
      <div class="work-item" v-for="item in works">
        <work-collection-item :itemInfo="item" />
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import TitleBar from "components/titlebar/TitleBar.vue";
  import WorkCollectionItem from "components/work-collection-item/WorkCollectionItem.vue";

  import { works } from "common/local-data.js";

  export default defineComponent({
    name: "WorkCollection-CPN",
    components: {
      TitleBar,
      WorkCollectionItem,
    },
    setup() {
      // console.log(works);
      return { works };
    },
  });
</script>
<style lang="less" scoped>
  #WorkCollection-CPN {
    width: 100%;
    height: 100%;
    // background-color: var(--color1);
  }
  .content {
    margin-top: 40px;
    padding: 0px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    & > .work-item {
      margin: 15px;
      width: 100%;
      max-width: 720px;
      height: 120px;

      cursor: pointer;
    }
  }
</style>
