import Link from "next/link";
import React from "react";
interface IFooterElement {
  icon: React.ReactElement;
  text: string;
  link: string;
}
export const FooterElement = ({ icon, text, link }: IFooterElement) => {
  return (
    <Link href={link}>
      <a className="flex flex-row items-center text-gray-500 transition duration-300 cursor-pointer hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-500">
        {icon}
        {text}
      </a>
    </Link>
  );
};
