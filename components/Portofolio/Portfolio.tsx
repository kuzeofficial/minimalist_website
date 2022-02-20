import { FastForwardIcon } from "@heroicons/react/solid";
import Link from "next/link";
import React from "react";
import CardPortfolio from "./CardPortfolio";

export const Portfolio = () => {
  return (
    <div>
      <h3 className="mt-12 mb-6 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
        Current Projects
      </h3>
      <CardPortfolio
        title="Freemance 💸"
        date="September 2021"
        code="No disponible"
        status="https://freemance.com"
        description="A directory of Cuban freelancers made in Next.js by the frontend and backend with Nest, Node and Prisma."
      />
      <CardPortfolio
        title="Online CV 📄"
        date="February 2021"
        code="https://github.com/kuzeofficial/opencv"
        status="https://opencv-five.vercel.app/"
        description="A nice online CV with i18n, created only in React and styles with Bootstrap with dark mode included"
      />
      <CardPortfolio
        title="Rick and Morty 👽"
        date="January 2021"
        code="https://github.com/kuzeofficial/rickmortyapi"
        status="https://rickmortyapigql.vercel.app/"
        description="A small application using the Rick And Morty API and technologies Chakra is used for Next.js and GraphQL styles."
      />
      <div className="flex justify-center">
        <Link href="/projects">
          <a className="flex flex-row items-center mb-8 cursor-pointer dark:text-primary-40 text-primary-80 hover:text-primary-80/50 hover:transition-all hover:ease-in-out hover:duration-300 dark:hover:text-primary-40/50 ">
            See all
            <FastForwardIcon className="w-4 h-4 ml-2" />
          </a>
        </Link>
      </div>
    </div>
  );
};
