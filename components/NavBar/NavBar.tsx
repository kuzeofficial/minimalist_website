import { useState, useEffect } from "react";
import {
  HomeIcon,
  NewspaperIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import useDarkMode from "@hooks/useDarkMode";
import NavBarElement from "./NavBarElement";
import { useRouter } from "next/router";
export const NavBar = () => {
  const { route } = useRouter();
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
    <nav className="sticky z-50 flex flex-row justify-between items-center sm:w-[640px] w-full h-4 py-[1.7rem] px-4 mb-4 bg-opacity-100 shadow-lg dark:bg-[#3B3B3B]/95 dark:text-gray-200 bg-gray-100/95 backdrop-filter backdrop-blur-sm backdrop-brightness-150 top-3 rounded-2xl ease-in-out duration-300 transition-all">
      <div className="flex flex-row">
        <NavBarElement
          route={route}
          destination="/"
          icon={<HomeIcon className="w-6 h-6 mr-2" />}
          text="Home"
        />
        <NavBarElement
          route={route}
          destination="/blog"
          icon={<NewspaperIcon className="w-6 h-6 mr-2" />}
          text="Blog"
        />
      </div>
      {/* <div className="flex items-stretch ml-20 rounded-full transform transition-all bg-gradient-to-r p-1 from-[#FFD3BA] to-[#E67635]"> */}
      <div>
        {/* <Image
          src="https://avatars.githubusercontent.com/u/65286318?v=4"
          width="45px"
          height="45px"
          className="rounded-full "
          alt="Avatar"
        /> */}
        <button
          className="flex items-center justify-center px-1 py-1 bg-gray-200 border-2 rounded-lg hover:border-gray-400 dark:hover:border-gray-400 dark:text-gray-200 dark:border-transparent dark:bg-secondary-80"
          onClick={() => handleChangeTheme()}
        >
          {mode ? (
            <SunIcon className="w-6 h-6 transition duration-300 ease-out hover:scale-125" />
          ) : (
            <MoonIcon className="w-6 h-6 transition duration-300 ease-out hover:scale-125" />
          )}
        </button>
      </div>
    </nav>
  );
};
