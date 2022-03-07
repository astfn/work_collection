<template>
  <transition name="hidden">
    <div v-if="!isHidden" id="SideBar-CPN" class="ts-bg">
      <div class="content">
        <div class="hidden-box" @click="hiddenHandel">
          <div class="hidden-btn">
            <img :src="hiddenBtnInfo.defaultImgSrc" />
          </div>
        </div>
        <div class="item" v-for="item in sideBarItemsInfo">
          <side-bar-item :info="item" />
        </div>
      </div>
    </div>

    <div v-else="isHidden" class="show-box" @click="hiddenHandel">
      <div class="show-btn">
        <img :src="hiddenBtnInfo.activeImgSrc" />
      </div>
    </div>
  </transition>
</template>
<script>
  import { defineComponent, ref } from "vue";

  import SideBarItem from "./SideBarItem.vue";
  import { SideBarInfo } from "common/local-data.js";

  export default defineComponent({
    name: "SideBar-CPN",
    components: { SideBarItem },
    setup() {
      const { hiddenBtnInfo, sideBarItemsInfo } = SideBarInfo;
      // console.log(hiddenBtnInfo);

      /* handel */
      let isHidden = ref(false);
      const hiddenHandel = () => {
        isHidden.value = !isHidden.value;
      };

      return { hiddenBtnInfo, sideBarItemsInfo, isHidden, hiddenHandel };
    },
  });
</script>
<style lang="less" scoped>
  #SideBar-CPN {
    width: 50px;
    height: 100%;
    z-index: 1;
    // background-color: #fff;
    background-color: var(--color2);
    box-shadow: 1px 0px 10px 0px var(--color9);
  }
  .content {
    & > .item {
      margin: 5px;
    }
  }

  /* 显示隐藏动画↓ */
  .hidden-enter-from,
  .hidden-leave-to {
    transition: 0.6s;
    margin-left: -50px;
  }

  .hidden-enter-to,
  .hidden-leave-from {
    transition: 0.6s;
    margin-left: 0px;
  }

  .hidden-box {
    height: 45px;
    padding-right: 3px;
    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 15px;
    cursor: pointer;

    & > .hidden-btn {
      & > img {
        width: 35px;
        height: 35px;
      }
    }
  }
  /* 显示隐藏动画↑*/

  .show-box {
    position: absolute;
    top: 60px;
    left: 0;
    margin-bottom: 15px;

    border: 2px dashed var(--color6);
    border-left: none;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;

    backdrop-filter: blur(2px);
    cursor: pointer;

    & > .show-btn {
      & > img {
        width: 35px;
        height: 35px;
      }
    }
  }
</style>
