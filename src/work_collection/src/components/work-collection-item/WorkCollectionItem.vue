<template>
  <div id="WorkCollectionItem-CPN">
    <a :href="link" target="_blank">
      <div class="wrapper-box">
        <img :src="imageSrc" />
        <p>{{ name }}</p>
      </div>
    </a>
  </div>
</template>
<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "WorkCollectionItem-CPN",
    props: {
      itemInfo: {
        type: Object,
        require: true,
        default: () => ({}),
      },
    },
    setup(props) {
      const { link, imageSrc, name } = props.itemInfo;

      return { link, imageSrc, name };
    },
  });
</script>
<style lang="less" scoped>
  #WorkCollectionItem-CPN {
    width: 100%;
    height: 100%;
    background-color: var(--color1);
    border-radius: 15px;
  }
  a {
    text-decoration: none;
  }
  .wrapper-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    overflow: hidden;

    transition: 0.3s ease-in-out;
    border-radius: 15px;
    box-shadow: -15px -15px 20px var(--box-shadow-shallow),
      15px 15px 20px var(--box-shadow-deep), inset 0 0 0 var(--box-shadow-deep),
      inset 0 0 0 var(--box-shadow-shallow);

    &:hover {
      box-shadow: 0px 0px 0px var(--box-shadow-shallow),
        0px 0px 0px var(--box-shadow-deep),
        inset -15px -15px 50px var(--box-shadow-shallow),
        inset 15px 15px 30px var(--box-shadow-deep);
    }

    & > img {
      height: 50px;
    }
    & > p {
      margin-top: 15px;
      font-weight: bold;

      color: transparent;
      // color: var(--color5);
      background-image: linear-gradient(
        to right,
        var(--color8),
        var(--color7),
        var(--color5),
        var(--color7),
        var(--color8)
      );
      background-clip: text;
      background-position: 0 0;
      background-size: 200% 100%;
      animation: colorful 2.5s infinite linear;

      @keyframes colorful {
        from {
          background-position: 0 0;
        }
        to {
          background-position: -200% 0;
        }
      }
    }
  }
</style>
