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
import SEO from "@components/SEO/SEO";
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
      <SEO
        title="Cristian Fonseca | Web Developer 🚀 🧑‍💻"
        description="Building projects from zero to faster web, with frameworks like serverless, React / Next.js."
        canonical="https://cristianfonseca.com"
        openGraph={{
          url: "https://cristianfonseca.com",
          title: "Cristian Fonseca | Web Developer 🚀 🧑‍💻",
          description:
            "Building projects from zero to faster web, with frameworks like serverless, React / Next.js.",
          images: [
            {
              url: "https://cristianfonseca.com/images/HOME-SEO.png",
              width: 1542,
              height: 640,
              alt: "Cristian Fonseca | Web Developer 🚀 🧑‍💻 Personal Website",
              type: "image/png",
            },
          ],
          site_name: "Cristian Fonseca | Web Developer 🚀 🧑‍💻",
        }}
        twitter={{
          handle: "@cristian_devk",
          site: "@cristian_devk",
          cardType: "summary_large_image",
        }}
      />
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
