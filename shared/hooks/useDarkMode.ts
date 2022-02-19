function useDarkMode() {
  const toggleTheme = (toggleValue: boolean) => {
    if (toggleValue === false) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  const checkThemeFirstRender = () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return { toggleTheme, checkThemeFirstRender };
}
export default useDarkMode;
