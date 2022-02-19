import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next.js App</title>
        <meta name="description" content="A new Next.js application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center">
        <h1 className="mt-20 text-4xl font-bold text-gray-500">
          Welcome to Next.js!
        </h1>
      </main>
    </div>
  );
};

export default Home;
