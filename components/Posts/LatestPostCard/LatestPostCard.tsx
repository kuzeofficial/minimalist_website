import React from "react";
import {
  BadgeCheckIcon,
  CalendarIcon,
  EyeIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
interface PostProp {
  post: {
    title: string;
    publishedAt: string;
    author: string;
    preview: string;
    site: string;
    tags: [string];
    slug: {
      current: string;
    };
  };
}

export const LatestPostCard = ({ post }: PostProp) => {
  return (
    <Link href={`/blog/${post.slug.current}`}>
      <a
        className={`transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 from-support-30  to-[#818CF8]`}
      >
        <div className="flex flex-col justify-between h-full p-4 bg-white rounded-lg dark:bg-primary-90">
          <div className="flex flex-col justify-between md:flex-row">
            <h4 className="w-full mb-6 text-lg font-medium tracking-tight text-gray-900 md:text-lg sm:mb-10 dark:text-gray-100">
              {post.title}
            </h4>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex w-[110px] items-center text-xs text-gray-800 dark:text-gray-200 max-w-[110px]">
              <CalendarIcon className="w-4 h-4" />
              <span className="ml-1 align-baseline capsize">
                {new Date(post.publishedAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex">
              <BadgeCheckIcon className="w-4 h-4 text-green-600" />
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};
