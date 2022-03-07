/* SideBarInfo */
export const SideBarInfo = {
  hiddenBtnInfo: {
    defaultImgSrc: require("@/assets/images/icons/sidebar/toLeft.png"),
    activeImgSrc: require("@/assets/images/icons/sidebar/toRight.png"),
  },
  sideBarItemsInfo: [
    {
      path: "/workCollection",
      imageSrc: require("@/assets/images/icons/sidebar/workCollection.png"),
      desc: "作品集",
    },

    {
      path: "/profile",
      imageSrc: require("@/assets/images/icons/sidebar/profile.png"),
      desc: "关于我",
    },
    {
      path: "/theme",
      imageSrc: require("@/assets/images/icons/sidebar/theme.png"),
      desc: "主题切换",
    },
  ],
};

/* workCollectionInfo */
export const works = [
  {
    name: "AshunMusci",
    link: "http://ashuntefannao.gitee.io/ashun_music",
    imageSrc: require("@/assets/images/icons/works/ashun_music.png"),
    desc: "",
  },
  {
    name: "AshunHotelManagementSystem",
    link: "https://github.com/astfn/ashun_hotel_order_management",
    imageSrc: require("@/assets/images/icons/works/ashun_hotel_management_System.png"),
    desc: "",
  },
  {
    name: "AshunMall",
    link: "http://ashuntefannao.gitee.io/ashunmall",
    imageSrc: require("@/assets/images/icons/works/ashun_mall.png"),
    desc: "",
  },
  {
    name: "AshunTodoList",
    link: "https://astfn.github.io/AshunToDoList/",
    imageSrc: require("@/assets/images/icons/works/ashun_todo_list.png"),
    desc: "",
  },
  {
    name: "AshunBlog",
    link: "https://astfn.github.io/",
    imageSrc: require("@/assets/images/icons/works/ashun.png"),
    desc: "",
  },
  {
    name: "github.com/astfn",
    link: "https://github.com/astfn",
    imageSrc: require("@/assets/images/icons/works/github.png"),
    desc: "",
  },
];

/* profile */
export const profile = {
  avatar: require("@/assets/images/profile/avatar.jpg"),
  WeChat: require("@/assets/images/profile/WeChat.jpg"),
  workhobbys: [
    "撰写博客,分享学习过程",
    "逛逛编码技术相关的平台、论坛",
    "与他人共同学习、探讨新技术",
  ],
  lifeHobbys: ["音乐", "跑酷", "舞蹈", "健身"],
};

/* themes */
export const themes = {
  VueGreen: {
    "--color1": "#f0fff9",
    "--color2": "#f0fffa",
    "--color3": "#d4fff1",
    "--color4": "#a9fce5",
    "--color5": "#7af0d2",
    "--color6": "#50e3c2", //主颜色
    "--color7": "#39bda4",
    "--color8": "#269686",
    "--color9": "#167066",
    "--color10": "#0e4a45",
    "--box-shadow-shallow": "rgba(255, 255, 255, 0.6)",
    "--box-shadow-deep": "rgba(0, 0, 0, 0.2)",
  },
  DaybreakBlue: {
    "--color1": "#f0faff",
    "--color2": "#f0f9ff",
    "--color3": "#cfebff",
    "--color4": "#a6d7ff",
    "--color5": "#7dc0ff",
    "--color6": "#54a6ff", //主颜色
    "--color7": "#3d83d9",
    "--color8": "#2962b3",
    "--color9": "#19458c",
    "--color10": "#112f66",
    "--box-shadow-shallow": "rgba(255, 255, 255, 0.6)",
    "--box-shadow-deep": "rgba(0, 0, 0, 0.2)",
  },
  Magenta: {
    "--color1": "#fff0f5",
    "--color2": "#ffe8f0",
    "--color3": "#ffbfd9",
    "--color4": "#ff96c4",
    "--color5": "#f76aac",
    "--color6": "#eb4096", //主颜色
    "--color7": "#c42b7d",
    "--color8": "#9e1b65",
    "--color9": "#780e4e",
    "--color10": "#520937",
    "--box-shadow-shallow": "rgba(255, 255, 255, 0.6)",
    "--box-shadow-deep": "rgba(0, 0, 0, 0.2)",
  },
  Purple: {
    "--color1": "#f8f0ff",
    "--color2": "#f7f0ff",
    "--color3": "#f0e3ff",
    "--color4": "#d7baff",
    "--color5": "#bb91ff",
    "--color6": "#9c68ff", //主颜色
    "--color7": "#7a4ed9",
    "--color8": "#5a37b3",
    "--color9": "#3e248c",
    "--color10": "#2a1a66",
    "--box-shadow-shallow": "rgba(255, 255, 255, 0.6)",
    "--box-shadow-deep": "rgba(0, 0, 0, 0.2)",
  },
  Gold: {
    "--color1": "#fffaf0",
    "--color2": "#fff5e6",
    "--color3": "#ffe3bd",
    "--color4": "#ffcf94",
    "--color5": "#ffb86b",
    "--color6": "#ff9f43", //主颜色
    "--color7": "#d97b2e",
    "--color8": "#b35b1d",
    "--color9": "#8c3f0f",
    "--color10": "#662a0a",
    "--box-shadow-shallow": "rgba(255, 255, 255, 0.6)",
    "--box-shadow-deep": "rgba(0, 0, 0, 0.2)",
  },
  Black: {
    "--color1": "#dbdbdb",
    "--color2": "#cfcfcf",
    "--color3": "#c2c2c2",
    "--color4": "#b5b5b5",
    "--color5": "#a8a8a8",
    "--color6": "#9b9b9b", //主颜色
    "--color7": "#757575",
    "--color8": "#4f4f4f",
    "--color9": "#292929",
    "--color10": "#030303",
    "--box-shadow-shallow": "rgba(255, 255, 255, 0.6)",
    "--box-shadow-deep": "rgba(0, 0, 0, 0.2)",
  },
  Red: {
    "--color1": "#fff1f0",
    "--color2": "#ffeceb",
    "--color3": "#ffc3c2",
    "--color4": "#ff999b",
    "--color5": "#ff7077",
    "--color6": "#ff4757", //主颜色
    "--color7": "#d93245",
    "--color8": "#b32036",
    "--color9": "#8c1229",
    "--color10": "#660c20",
    "--box-shadow-shallow": "rgba(255, 255, 255, 0.6)",
    "--box-shadow-deep": "rgba(0, 0, 0, 0.2)",
  },
};
