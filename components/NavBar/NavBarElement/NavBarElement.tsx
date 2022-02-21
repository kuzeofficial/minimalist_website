import React from "react";
import Link from "next/link";
interface INavBarElement {
  route: string;
  text: string;
  icon: JSX.Element;
  destination: string;
}
export const NavBarElement = ({
  route,
  destination,
  icon,
  text,
}: INavBarElement) => {
  return (
    <Link href={destination}>
      <a
        className={`dark:hover:bg-[#515151] justify-center hover:bg-gray-200 hover:transition-all hover:duration-300 hover:rounded-md cursor-pointer flex   font-normal flex-row px-2 py-1 items-stretch ${
          route === destination
            ? "text-primary-100 dark:text-primary-10 font-semibold"
            : "text-primary-50 dark:text-primary-40/95"
        }`}
      >
        {icon}
        {text}
      </a>
    </Link>
  );
};
