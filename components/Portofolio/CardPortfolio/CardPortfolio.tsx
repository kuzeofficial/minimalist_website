import { CodeIcon, StatusOnlineIcon } from "@heroicons/react/outline";
import Link from "next/link";
interface ICardPortfolio {
  title: string;
  description: string;
  code: string;
  status: string;
  date: string;
}
export const CardPortfolio = ({
  title,
  description,
  code,
  status,
  date,
}: ICardPortfolio) => {
  return (
    <div className="mb-6 block rounded-2xl bg-primary-10/70 hover:bg-primary-20/40 dark:bg-white/[2%] p-7 shadow-surface-elevation-low  transition duration-300 dark:hover:bg-white/[3%] hover:shadow-surface-elevation-medium focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/70 ">
      {/* animate-pulse hover:scale-[1.04]*/}
      <h3 className="text-xl font-semibold transition duration-300 text-support-70/80 line-clamp-2 hover:text-support-80/90 dark:text-support-30 ">
        {/* <div class="h-2 bg-slate-700 rounded" /> */}
        {title}
      </h3>
      <div className="flex items-baseline justify-between">
        <div className="items-center font-normal dark:text-gray-300/75 text-gray-700/90">
          {/* <div class="h-2 bg-slate-700 rounded" /> */}
          {date}
        </div>
        <div className="flex space-x-2 text-gray-500/90">
          <>
            <Link href={code === "No disponible" ? "/" : code} passHref>
              <a>
                <button
                  data-tooltip-target="tooltip-default"
                  disabled={code === "No disponible"}
                  className={`flex flex-row ${
                    code === "No disponible"
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  } items-center px-1 py-1 text-sm font-medium border rounded-lg sm:px-3 border-primary-20/90 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-primary-90 dark:border-primary-80`}
                >
                  <CodeIcon className="w-4 h-4 mr-1 dark:text-support-70 text-red-800/60" />
                  {code === "No disponible" ? "Not code" : "Code"}
                </button>
              </a>
            </Link>
          </>

          <Link href={status} passHref>
            <button className="flex flex-row items-center px-1 py-1 text-sm font-medium border rounded-lg sm:px-3 border-primary-20/90 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-primary-90 dark:border-primary-80">
              <StatusOnlineIcon className="w-4 h-4 mr-1 animate-bounce text-green-400/60" />
              Live
            </button>
          </Link>
        </div>
      </div>
      <p className="mt-4 text-lg font-light dark:font-extralight dark:text-gray-400/90 text-gray-500/90 line-clamp-3">
        {description}
      </p>
    </div>
  );
};
