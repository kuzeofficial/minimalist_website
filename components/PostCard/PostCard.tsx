import React from "react";
import Link from "next/link";
import { convert_to_date } from "@utils/date";
interface BlogProps {
  title: string;
  slug: string;
  date: string;
  description: string;
  tags: string[];
}
export const PostCard = ({
  title,
  slug,
  description,
  date,
  tags,
}: BlogProps) => {
  return (
    <div className="w-full max-w-[640px]">
      <Link href={`/blog/${slug}`} passHref>
        <div className="w-full px-2 py-2 sm:max-w-[640px] rounded-lg cursor-pointer dark:hover:bg-primary-90 hover:bg-primary-10 transition-all  mb-[2px]">
          <div className="w-full">
            <div className="w-[303px] mb-1">
              {tags &&
                tags.map((tag: any) => {
                  return (
                    <a
                      className="px-[5px] dark:text-primary-20 rounded-md py-[0.5px] mr-2 text-sm dark:bg-support-50 bg-support-20 text-primary-70"
                      key={tag.id}
                    >
                      {tag}
                    </a>
                  );
                })}
            </div>
            <div className="flex flex-col justify-between md:flex-row">
              <h4 className="w-full sm:w-[458px] mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
                {title}
              </h4>
              <p className="w-[150px] mb-4 text-sm text-left text-gray-500 md:text-right md:mb-0">
                {convert_to_date(date)}
              </p>
            </div>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
