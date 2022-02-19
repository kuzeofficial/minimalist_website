import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="flex flex-col items-center bg-white dark:bg-[#222222] backdrop-blur-3xl mx-6 ease-in-out duration-300 transition-all">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
