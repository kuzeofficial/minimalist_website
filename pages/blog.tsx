import React, { useRef, useEffect, useState } from "react";
import NavBar from "@components/NavBar";
import { sanityClient } from "../sanity";
import { PostCard } from "@components/PostCard/PostCard";
import { Post } from "../typings";
import { LayoutDefault } from "@layouts/LayoutDefault";
import { orderByDate } from "shared/lib/order-by-date";

interface Props {
  posts: [Post];
}

export default function Blog({ posts }: Props) {
  const [searchValue, setSearchValue] = useState("");
  const filteredBlogPosts = posts.filter((post: any) =>
    post.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const currentPosts = posts;

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
            currentPosts.map((post) => {
              return (
                <div key={post.slug.current}>
                  <PostCard
                    title={post.title}
                    slug={post.slug.current}
                    description={post.description}
                    // categories={post.categories}
                    date={post._createdAt}
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
              <div key={post.slug.current}>
                <PostCard
                  title={post.title}
                  slug={post.slug.current}
                  date={post._createdAt}
                  description={post.description}
                  // tags={[]}
                />
              </div>
            ))}
        </div>
      </LayoutDefault>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"]{
    _id,
    title,
    categories,
    author-> {
     name,
     image
   },
   description,
   mainImage,
   publishedAt,
   slug
  }`;
  const unorderedPosts = await sanityClient.fetch(query);
  const postss = unorderedPosts.sort(orderByDate);
  const posts = postss.slice(0, 3);
  return {
    props: {
      posts,
    },
  };
};
