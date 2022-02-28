import { ArrowSmRightIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { LatestPostCard } from "./LatestPostCard/LatestPostCard";
interface BlogProps {
  posts: [
    {
      title: string;
      publishedAt: string;
      author: string;
      preview: string;
      site: string;
      tags: [string];
      slug: {
        current: string;
      };
    }
  ];
}
export const Posts = ({ posts }: BlogProps) => {
  return (
    <section>
      <h3 className="mt-12 mb-6 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
        Latest Posts
      </h3>
      <div className="flex flex-col gap-6 mb-10 md:flex-row">
        {posts.map((post) => {
          return <LatestPostCard post={post} key={post.slug.current} />;
        })}
      </div>
      <div className="flex justify-center mb-20">
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
