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
            src="https://apd-8ed691b24490ae9d362ff539affeca538c77774ab81b8cd3.v.smtcdns.com/om.tc.qq.com/ATdKXdfPBmFHUVMxMfqpokniSNZgPbkm1eqZD_PiNl10/uwMROfz2r57BIaQXGdGnC2deB3dUr_IkisDvBob9yrMGODlR/svp_50001/szg_56638081_50001_22375bcb5c544c1a9acfce960110661c.f622.mp4?sdtfrom=v1010&guid=d5110d9db7ed2cd0ed6059336cbd90ed&vkey=7443B8104A833188FE8F69A829074F7E906C07632335B74FE6205880BEFA8222B4554E525E1F0669B030B47B5562AB8554CDE6518811AC557090C65F2809A5B7EC700005E298F83F1786253C4B065BDF577D80C0131B770DD9D30420C2771CD68A7C2EDBE76FE7AD095164EFA485CA5681E23B3F383F29D4401DF28CE36422E028A96D96D8A10C09"
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
