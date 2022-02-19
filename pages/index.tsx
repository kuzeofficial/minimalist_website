import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "@components/NavBar";
import { LayoutDefault } from "@layouts/LayoutDefault";
import Hero from "@components/Hero";

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
      </LayoutDefault>
    </div>
  );
};

export default Home;
