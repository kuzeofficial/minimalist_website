import { useState, useEffect } from "react";
import {
  HomeIcon,
  NewspaperIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/outline";
import useDarkMode from "@hooks/useDarkMode";
import NavBarElement from "./NavBarElement";
export const NavBar = () => {
  const { toggleTheme } = useDarkMode();
  const [mode, setMode] = useState(false);
  function handleChangeTheme() {
    setMode(!mode);
    toggleTheme(!mode);
  }
  useEffect(() => {
    localStorage.theme === "dark" ? setMode(true) : setMode(false);
  }, []);
  return (
    <nav className="sticky  z-50 flex flex-row justify-between items-center sm:w-[640px] w-full h-4 py-[1.7rem] px-4 mb-4 bg-opacity-100 shadow-lg dark:bg-primary-90/95 dark:text-gray-200 bg-secondary-10/95 backdrop-filter backdrop-blur-sm backdrop-brightness-150 top-3 rounded-2xl ease-in-out duration-300 transition-all">
      <div className="flex flex-row">
        <NavBarElement
          destination="/"
          icon={<HomeIcon className="w-5 h-5 mr-2" />}
          text="Home"
        />
        <NavBarElement
          destination="/blog"
          icon={<NewspaperIcon className="w-5 h-5 mr-2" />}
          text="Blog"
        />
      </div>
      <div>
        <button
          aria-label="Toggle dark mode"
          className="flex items-center justify-center px-1 py-1 bg-gray-200 border-2 rounded-lg w-9 h-9 hover:border-gray-400 dark:hover:border-gray-400 dark:text-gray-200 dark:border-transparent dark:bg-secondary-80"
          onClick={() => handleChangeTheme()}
        >
          {mode ? (
            <SunIcon className="w-5 h-5 transition duration-300 ease-out hover:scale-125" />
          ) : (
            <MoonIcon className="w-5 h-5 transition duration-300 ease-out hover:scale-125" />
          )}
        </button>
      </div>
    </nav>
  );
};
