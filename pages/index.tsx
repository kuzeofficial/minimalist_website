import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "@components/NavBar";
import { LayoutDefault } from "@layouts/LayoutDefault";
import Hero from "@components/Hero";
import Portfolio from "@components/Portofolio";
import Footer from "@components/Footer";
import Posts from "@components/Posts";

import Link from "next/link";

const Home: NextPage = () => {
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
        <Posts />
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
