import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="flex flex-col items-center bg-white dark:bg-[#222222] backdrop-blur-3xl mx-6 ease-in-out duration-300 transition-all">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
