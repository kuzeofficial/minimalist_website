import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import { MDXComponents } from "@components/MDXComponents/MDXComponents";
import { getFiles, getFileBySlug } from "shared/lib/mdx";
import Image from "next/image";
import { LayoutDefault } from "@layouts/LayoutDefault";
import NavBar from "@components/NavBar";
import Footer from "@components/Footer";
type FrontMatterProps = {
  title: string;
  date: string;
  tags: string[];
  preview: string;
  site: string;
  author: string;
  readingTime: {
    text: string;
  };
};
type Test = {
  compiledSource: string;
  scope: Record<string, unknown>;
};
interface PostProps {
  source: Test;
  frontmatter: FrontMatterProps;
}
export default function Post({ source, frontmatter }: PostProps) {
  return (
    <>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={frontmatter.site} />
        <meta name="twitter:title" content={frontmatter.author} />
        <meta name="twitter:description" content={frontmatter.title} />
        <meta name="twitter:image" content={frontmatter.preview} />
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.title} />
        <meta property="og:title" content={frontmatter.author} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content={frontmatter.site} key="ogurl" />
        <meta property="og:image" content={frontmatter.preview} key="ogimage" />
      </Head>
      <LayoutDefault>
        <NavBar />
        <section className="sm:max-w-[640px] max-w-xs mb-20">
          <h1 className="mt-8 mb-4 text-3xl font-bold tracking-tight text-left text-black md:text-5xl dark:text-white">
            {frontmatter.title}
          </h1>
          <div className="max-w-[640px] flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center mb-[16px]">
            <div className="flex items-center">
              <Image
                src="/images/65286318.webp"
                height="24px"
                width="24px"
                className="rounded-full "
                alt={frontmatter.author}
              />
              <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                {frontmatter.author} / {frontmatter.date}
              </p>
            </div>
            <p className="mt-2 text-sm text-support-60 dark:text-support-40 min-w-32 md:mt-0">
              {frontmatter.readingTime.text}
            </p>
          </div>
          <MDXRemote {...source} components={MDXComponents} />
        </section>
        <Footer />
      </LayoutDefault>
    </>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles("posts");
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const { source, frontmatter } = await getFileBySlug("posts", params.slug);

  return {
    props: {
      source,
      frontmatter: {
        ...frontmatter,
      },
    },
  };
}
