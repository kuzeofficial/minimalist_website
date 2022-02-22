import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "@components/NavBar";
import { LayoutDefault } from "@layouts/LayoutDefault";
import Hero from "@components/Hero";
import Portfolio from "@components/Portofolio";
import Footer from "@components/Footer";
import Posts from "@components/Posts";
import { getAllFilesFrontMatter } from "shared/lib/mdx";
import { orderByDate } from "shared/lib/order-by-date";
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
    }
  ];
}
const Home = ({ posts }: BlogProps) => {
  return (
    <div>
      <Head>
        <title>Next.js App</title>
        <meta name="description" content="A new Next.js application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutDefault>
        <NavBar />
        <Hero />
        <Portfolio />
        <Posts posts={posts} />
        <Footer />
        {/* {posts.map((post: any, index: any) => (
          <Link href={`/${post.id}`} key={index}>
            <a>
              <h1>{post.properties.Name.title}</h1>
            </a>
          </Link>
        ))} */}
      </LayoutDefault>
    </div>
  );
};

export default Home;
export async function getStaticProps() {
  const unorderedPosts = await getAllFilesFrontMatter("posts");
  const postss = unorderedPosts.sort(orderByDate);
  const posts = postss.slice(0, 3);

  return {
    props: { posts },
  };
}
