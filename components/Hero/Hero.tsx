import React from "react";
import Image from "next/image";
import { ChartBarIcon } from "@heroicons/react/solid";
import { ArrowRightIcon, DocumentIcon } from "@heroicons/react/outline";
import Link from "next/link";
export const Hero = () => {
  return (
    <>
      <div className="flex flex-col-reverse mt-12 sm:items-center sm:mt-20 sm:flex-row">
        <div className="flex flex-col w-full">
          <h1 className="mb-1 text-3xl font-extrabold tracking-tight text-black sm:text-5xl dark:text-white">
            Cristian Fonseca
          </h1>
          <h2 className="flex flex-row items-center mb-4 text-gray-700 dark:text-gray-200">
            Full Stack Developer at Evaluar
            <ChartBarIcon className="w-4 h-4 ml-1 text-gray-700 dark:text-gray-200" />
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Building projects from zero to faster web, with frameworks like
            serverless, React / Next.js.
          </p>
        </div>
        <div className="flex items-start ">
          <div className="flex flex-col w-[100px] h-[100px] justify-start transform transition-all bg-gradient-to-r p-1 from-support-20 to-support-50 rounded-full mb-8 sm:mb-0 mr-auto">
            <Image
              src="/images/65286318.webp"
              width={100}
              height={100}
              quality={100}
              className="rounded-full"
              placeholder="blur"
              blurDataURL="/images/65286318.webp"
              alt="Avatar"
            />
          </div>
        </div>
      </div>
      <div className="flex mt-4">
        <Link href="/documents/CV-Cristian.pdf">
          <a className="flex flex-row items-center p-2 font-medium transition-colors border rounded-lg cursor-pointer text-md text-support-60 hover:bg-secondary-10 border-secondary-20 hover:text-support-80 dark:hover:bg-primary-90 dark:border-primary-80 dark:hover:border-primary-70 group">
            <DocumentIcon className="w-6 h-6 mr-2" />
            Download CV
            <span className="inline-block align-middle transition-transform transform group-hover:translate-x-1">
              <ArrowRightIcon className="w-6 h-4" />
            </span>
          </a>
        </Link>
      </div>
    </>
  );
};
