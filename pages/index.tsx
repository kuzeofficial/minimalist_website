import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "@components/NavBar";
import { LayoutDefault } from "@layouts/LayoutDefault";
import Hero from "@components/Hero";
import Portfolio from "@components/Portofolio";
import Footer from "@components/Footer";
import Posts from "@components/Posts";
import { orderByDate } from "shared/lib/order-by-date";
import { sanityClient } from "../sanity";
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
      </LayoutDefault>
    </div>
  );
};

export default Home;
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
      posts: posts,
    },
  };
};
