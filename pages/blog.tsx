import Head from "next/head";
import NavBar from "@components/NavBar";
import { LayoutDefault } from "../layouts/LayoutDefault";
import { getDatabase } from "shared/lib/notion";
import { get } from "lodash";
import { IPosts, ITags } from "@utils/types_notion";
import { convert_to_date } from "@utils/date";
import Link from "next/link";
const Blog = ({ posts }: IPosts) => {
  return (
    <div>
      <Head>
        <title>Next.js App</title>
        <meta name="description" content="A new Next.js application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutDefault>
        <NavBar />
        <div className="mb-16"></div>
        {posts.map((post) => {
          const title = get(post, "properties.Posts.title[0].plain_text");
          const comment = get(
            post,
            "properties.Comment.rich_text[0].plain_text"
          );
          const tags = get(post, "properties.Tags.multi_select");
          const date = get(post, "last_edited_time");
          const dateString = convert_to_date(date);
          return (
            <Link href={`/blog/${post.id}`} key={post.id} passHref>
              <div className="w-full px-4 py-2  rounded-lg cursor-pointer dark:hover:bg-primary-90 hover:bg-primary-10 transition-all  mb-[2px]">
                <div className="w-full">
                  <div className="w-[303px] mb-1">
                    {tags.map((tag: ITags) => (
                      <a
                        className={`${
                          tag.color === "default"
                            ? "bg-support-50"
                            : `bg-${tag.color}-500`
                        } py-[0.5px] mr-1 px-1 text-[13px] text-primary-10 rounded-lg`}
                        key={tag.id}
                      >
                        {tag.name}
                      </a>
                    ))}
                  </div>
                  <div className="flex flex-col justify-between md:flex-row">
                    <h4 className="w-full sm:w-[458px] mb-2 text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
                      {title}
                    </h4>
                    <p className="w-[150px] mb-4 text-sm text-left text-gray-500 md:text-right md:mb-0">
                      {dateString}
                    </p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{comment}</p>
                </div>
              </div>
            </Link>
          );
        })}
        <p className="dark:text-[#F7F7F7]"></p>
      </LayoutDefault>
    </div>
  );
};

export default Blog;
export const getStaticProps = async () => {
  const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID;
  const database = await getDatabase({ databaseId });
  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
