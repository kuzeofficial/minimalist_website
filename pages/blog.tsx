import React, { useRef, useEffect, useState } from "react";

import { orderByDate } from "shared/lib/order-by-date";
import { getAllFilesFrontMatter } from "shared/lib/mdx";
import { usePagination } from "shared/lib/use-pagination";
import { LayoutDefault } from "../layouts/LayoutDefault";
import NavBar from "@components/NavBar";
import { PostCard } from "@components/PostCard/PostCard";
interface BlogProps {
  posts: [
    {
      title: string;
      date: string;
      author: string;
      preview: string;
      site: string;
      tags: [string];
      slug: string;
      description: string;
    }
  ];
}

export default function Blog({ posts }: BlogProps) {
  const { next, currentPage, currentData, maxPage } = usePagination(posts, 20);
  const [element, setElement] = useState<HTMLDivElement | null>(null) || [null];
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts.filter((post: any) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  const observer = useRef<IntersectionObserver>();
  const prevY = useRef(0);

  const currentPosts = currentData();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        const y = firstEntry.boundingClientRect.y;

        if (prevY.current > y) {
          next();
        }
        prevY.current = y;
      },
      { threshold: 0.5 }
    );
  }, [next]);

  useEffect(() => {
    const currentElement: React.ReactNode = element;
    const currentObserver: any = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  return (
    <>
      <LayoutDefault>
        <NavBar />
        <h3 className="px-2 mt-12 mb-6 text-2xl font-bold tracking-tight text-black md:text-4xl dark:text-white">
          Blog
        </h3>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="block w-full px-4 py-2 border border-gray-200 rounded-md bg-primary-10 text-primary-90 dark:border-primary-90/60 focus:ring-blue-500 focus:border-blue-500 dark:bg-primary-90/50 dark:text-gray-100"
          />
          <svg
            className="absolute w-5 h-5 text-gray-400 right-3 top-3 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <div className="grid grid-cols-1 justify-center max-w-[640px] w-full">
          {!searchValue &&
            currentPosts &&
            currentPosts.map((post: any) => {
              return (
                <div key={post.slug}>
                  <PostCard
                    title={post.title}
                    slug={post.slug}
                    description={post.description}
                    tags={post.tags}
                    date={post.date}
                  />
                </div>
              );
            })}
          {!filteredBlogPosts.length && (
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              No posts found.
            </p>
          )}
          {searchValue &&
            filteredBlogPosts.map((post) => (
              <div key={post.slug}>
                <PostCard
                  title={post.title}
                  slug={post.slug}
                  date={post.date}
                  description={post.description}
                  tags={post.tags}
                />
              </div>
            ))}
        </div>
        {currentPage !== maxPage && <h1 ref={setElement}>Cargando...</h1>}
      </LayoutDefault>
    </>
  );
}

export async function getServerSideProps() {
  const unorderedPosts = await getAllFilesFrontMatter("posts");
  const posts = unorderedPosts.sort(orderByDate);
  return {
    props: { posts },
  };
}
