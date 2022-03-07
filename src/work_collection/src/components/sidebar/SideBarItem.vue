<template>
  <div id="SideBarItem-CPN">
    <div :class="isActive" @click="jumpRouter">
      <img :src="imageSrc" />
    </div>
  </div>
</template>
<script>
  import { computed, defineComponent } from "vue";
  import { useRouter, useRoute } from "vue-router";

  export default defineComponent({
    name: "SideBarItem-CPN",
    props: {
      info: {
        type: Object,
        require: true,
        default: () => {},
      },
    },
    setup(props, context) {
      //props
      const { path, imageSrc, desc } = props.info;

      /* 活跃路由样式 */
      const route = useRoute();
      let isActive = computed(() => {
        let active = route.path.includes(path);
        return ["img-box", { active: active }];
      });

      /* HandelEvent */
      const router = useRouter();
      const jumpRouter = () => {
        router.push(path);
      };
      return {
        //props
        path,
        imageSrc,
        desc,
        //活跃路由样式
        isActive,
        //HandelEvent
        jumpRouter,
      };
    },
  });
</script>
<style lang="less" scoped>
  #SideBarItem-CPN {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .img-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;

    &.active {
      transition: box-shadow 0.5s;
      box-shadow: inset 0px 0px 5px 0px var(--color8);
    }
    & > img {
      margin: 3px 0px;
      width: 35px;
      height: 35px;
    }
    overflow: hidden;
  }
</style>
