import { ArrowSmRightIcon, EyeIcon } from "@heroicons/react/outline";
import Link from "next/link";
import React from "react";

export const Posts = () => {
  return (
    <section>
      <h3 className="mt-12 mb-6 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
        Latest Posts
      </h3>
      <div className="flex flex-col gap-6 mb-10 md:flex-row">
        <a className="transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]">
          <div className="flex flex-col justify-between h-full p-4 bg-white rounded-lg dark:bg-primary-90">
            <div className="flex flex-col justify-between md:flex-row">
              <h4 className="w-full mb-6 text-lg font-medium tracking-tight text-gray-900 md:text-lg sm:mb-10 dark:text-gray-100">
                Past, Present, and Future of React State Management
              </h4>
            </div>
            <div className="flex items-center text-gray-800 dark:text-gray-200 capsize">
              <EyeIcon className="w-6 h-6" />
              <span className="ml-2 align-baseline capsize">31,518</span>
            </div>
          </div>
        </a>
        <a className="transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
          <div className="flex flex-col justify-between h-full p-4 bg-white rounded-lg dark:bg-primary-90">
            <div className="flex flex-col justify-between md:flex-row">
              <h4 className="w-full mb-6 text-lg font-medium tracking-tight text-gray-900 md:text-lg sm:mb-10 dark:text-gray-100">
                Past, Present, and Future of React State Management
              </h4>
            </div>
            <div className="flex items-center text-gray-800 dark:text-gray-200 capsize">
              <EyeIcon className="w-6 h-6" />
              <span className="ml-2 align-baseline capsize">31,518</span>
            </div>
          </div>
        </a>
        <a className="transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]">
          <div className="flex flex-col justify-between h-full p-4 bg-white rounded-lg dark:bg-primary-90">
            <div className="flex flex-col justify-between md:flex-row">
              <h4 className="w-full mb-6 text-lg font-medium tracking-tight text-gray-900 md:text-lg sm:mb-10 dark:text-gray-100">
                Past, Present, and Future of React State Management
              </h4>
            </div>
            <div className="flex items-center text-gray-800 dark:text-gray-200 capsize">
              <EyeIcon className="w-6 h-6" />
              <span className="ml-2 align-baseline capsize">31,518</span>
            </div>
          </div>
        </a>
      </div>
      <div className="flex justify-center">
        <Link href="/blog">
          <a className="flex flex-row items-center cursor-pointer dark:text-primary-40 text-primary-80 hover:text-primary-80/50 hover:transition-all hover:ease-in-out hover:duration-300 dark:hover:text-primary-40/50 ">
            Read all posts
            <ArrowSmRightIcon className="w-4 h-4 ml-2" />
          </a>
        </Link>
      </div>
    </section>
  );
};
