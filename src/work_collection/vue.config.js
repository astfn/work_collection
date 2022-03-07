module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  configureWebpack: {
    resolve: {
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        store: "@/store",
        router: "@/router",
        pages: "@/pages",
      },
    },
  },
};
