import { useLocalStorage } from "./hooks";

/* 主题颜色相关 */

export const setTheme = (theme) => {
  //设置主题颜色
  for (const [key, value] of Object.entries(theme))
    document.documentElement.style.setProperty(key, value);

  // 将当前主题更新到本地
  const [localTheme, setLocalTheme] = useLocalStorage("theme");
  setLocalTheme(theme);
};

export const initTheme = () => {
  const [localTheme, setLocalTheme] = useLocalStorage("theme");
  // console.log(localTheme);
  if (localTheme) {
    for (const [key, value] of Object.entries(localTheme))
      document.documentElement.style.setProperty(key, value);
  }
};
