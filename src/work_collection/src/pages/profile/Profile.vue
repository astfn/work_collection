<template>
  <div id="Profile-CPN">
    <title-bar>
      <template v-slot:left><h2>🧾</h2></template>
      <template v-slot:center><h2>Profile</h2></template>
      <template v-slot:right><h2>🧾</h2></template>
    </title-bar>

    <div class="content">
      <!-- header -->
      <header class="ts-box_shadow">
        <div class="avatar-box">
          <img :src="avatar" />
        </div>
        <div class="important-info">
          <span>
            hello大家好!我是Ashun,22届大学生,立志成为一名资深前端工程师😀
          </span>
        </div>
      </header>

      <!-- hobbys -->
      <div class="hobby ts-box_shadow">
        <section>
          <h4>我喜欢:</h4>
          <ul>
            <li v-for="item in workhobbys">{{ item }}</li>
          </ul>
        </section>

        <section>
          <h4>除此之外,我还喜欢:</h4>
          <ul>
            <li v-for="item in lifeHobbys">{{ item }}</li>
          </ul>
        </section>
      </div>

      <!-- show-myself -->
      <div class="show-myself-box ts-box_shadow">
        <aside>
          <h3>某次音乐赛</h3>
          <video
            :poster="require('@/assets/images/video-cover/演唱-意外.jpg')"
            :src="require('@/assets/videos/演唱-意外.mp4')"
            controls
          ></video>
        </aside>

        <aside>
          <h3>跑酷</h3>
          <video :src="require('@/assets/videos/团侧.mp4')" controls></video>
        </aside>

        <aside>
          <h3>参与国家教育部 #青春为祖国歌唱# 活动</h3>
          <video
            :poster="require('@/assets/images/video-cover/青春为祖国歌唱.jpg')"
            src="http://[2409:8c44:b00:24:21::]/om.tc.qq.com/AIhCbqFGdJkfL7ZUaY-50SBbgObycDwZWcoW2kW1KiZE/uwMROfz2r57BIaQXGdGnC2deB3dUr_IkisDvBob9yrMGODlR/svp_50001/szg_56638081_50001_22375bcb5c544c1a9acfce960110661c.f622.mp4?sdtfrom=v3010&guid=b6a723776de838c47cc00c129071cfa2&vkey=5D5FC3D8CB4737FE5349DCF6A7B8F5D4EF84209ED20BD4EF09127BFCEF4D51705D8DC6D16FF7A20B528DA1F062A14AD3CC08F44917C96E27513A5E522CDA76936B637A3E2A29C2684F6357D230C6DD24D365F5ED516B381C5DCD63D47036FBD0C1C6117E67E39E1143F6CBEB3A94A91308DD407C292F6E1B1142FA67ADB5E200D3B5CE3D9078057F"
            controls
          ></video>
        </aside>
      </div>

      <!-- WeChat -->
      <div class="WeChat-box ts-box_shadow">
        <h3>WeChat</h3>
        <div class="img-box">
          <img :src="WeChat" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import TitleBar from "components/titlebar/TitleBar.vue";

  import { profile } from "common/local-data.js";
  export default defineComponent({
    name: "Profile-CPN",
    components: {
      TitleBar,
    },
    setup() {
      const { avatar, WeChat, lifeHobbys, workhobbys } = profile;

      return { avatar, WeChat, workhobbys, lifeHobbys };
    },
  });
</script>
<style lang="less" scoped>
  #Profile-CPN {
    width: 100%;
    height: 100%;
    // background-color: var(--color1);
  }

  .content {
    margin: 30px auto 0px;
    padding: 15px;
    max-width: 700px;
    // background-color: burlywood;
  }

  header,
  .hobby,
  .show-myself-box,
  .WeChat-box {
    border-radius: 3px;
    box-shadow: 0px 0px 8px 2px var(--color7);
    background-color: #fff;
    cursor: pointer;

    &:hover {
      box-shadow: 0px 0px 18px 2px var(--color8);
    }
  }

  header {
    padding: 5px;
    display: flex;

    & > .avatar-box {
      padding: 5px;
      border-right: 3px dashed var(--color3);

      img {
        margin: 2px;
        width: 45px;
        height: 45px;
        border-radius: 50%;
      }
    }

    & > .important-info {
      padding: 0px 16px;
      display: flex;
      justify-content: center;
      align-items: center;

      span {
        letter-spacing: 2px;
      }
    }
  }

  .hobby {
    margin-top: 15px;
    padding: 5px 15px;
    section {
      margin-top: 8px;
      padding: 5px;
      ul {
        margin: 8px 0px 0px 30px;
        li {
          margin: 5px 0px;
        }
      }
    }
  }

  .show-myself-box {
    margin-top: 15px;
    padding: 15px 15px;

    aside {
      margin: 15px 0px;

      display: flex;
      flex-direction: column;
      justify-content: center;
      h3 {
        text-align: center;
      }
      video {
        margin: 10px;
        border-radius: 10px;
      }
    }
  }

  .WeChat-box {
    margin: 20px auto 0px;
    padding: 15px 15px;
    h3 {
      text-align: center;
    }

    .img-box {
      margin: 20px auto 10px;
      width: 150px;
      height: 150px;
      overflow: hidden;

      border: 2px dashed var(--color6);
      &,
      img {
        border-radius: 8px;
      }

      img {
        width: 100%;
      }
    }
  }
</style>
