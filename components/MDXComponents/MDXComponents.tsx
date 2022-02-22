import React from "react";
import { CustomImage } from "../MD/CustomImage";
import Image from "next/image";

export const MDXComponents = {
  h1: (props: Object) => (
    <h1
      className="mt-[48px] mb-[24px] flex w-full text-2xl font-semibold items-left dark:text-primary-20"
      {...props}
    />
  ),
  h2: (props: Object) => (
    <h2
      className="mt-[48px] mb-[24px] flex text-2xl font-semibold items-left dark:text-primary-20"
      {...props}
    />
  ),

  img: (props: Object) => <CustomImage {...props} />,
  hr: (props: Object) => (
    <hr
      className="w-full mb-8 border-gray-200 border-1 dark:border-primary-80/60"
      {...props}
    />
  ),
  a: (props: Object) => (
    <a
      {...props}
      target="_blank"
      className="font-medium text-blue-400 underline transition-all hover:text-blue-500 "
    />
  ),
  blockquote: (props: Object) => (
    <blockquote
      className="w-full pl-4 mt-4 mb-4 border-l-4 border-support-40"
      {...props}
    />
  ),
  ul: (props: Object) => <ul className="pl-4 mt-4 list-disc" {...props} />,
  p: (props: Object) => (
    <p className="leading-loose dark:text-primary-30" {...props} />
  ),
  Image,
};
