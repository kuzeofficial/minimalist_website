import { Fragment } from "react";
import Head from "next/head";
import { getDatabase, getPage, getBlocks } from "../../shared/lib/notion";
import Link from "next/link";
import { LayoutDefault } from "../../layouts/LayoutDefault.tsx";
import NavBar from "../../components/NavBar";
import Image from "next/image";

export const Text = ({ text }) => {
  if (!text) {
    return null;
  }
  return text.map((value) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        key={value.id}
        className={`${bold ? "font-bold" : ""} ${
          code
            ? "font-monospace dark:bg-support-80/40 px-1 py-[0.2px] rounded-md"
            : ""
        } ${italic ? "italic" : ""} ${strikethrough ? "line-through" : ""} ${
          underline ? "underline" : ""
        } ${
          color ? `text-${color}-200` : ""
        } text-primary-80 dark:text-primary-10`}
      >
        {text.link ? (
          <a
            href={text.link.url}
            className="font-medium text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 hover:text-blue-900"
          >
            {text.content}
          </a>
        ) : (
          text.content
        )}
      </span>
    );
  });
};

const renderBlock = (block) => {
  const { type, id } = block;
  const value = block[type];
  {
    console.log(value);
  }
  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text text={value.text} />
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <Text text={value.text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2>
          <Text text={value.text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          <Text text={value.text} />
        </h3>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li>
          <Text text={value.text} />
        </li>
      );
    case "to_do":
      return (
        <div className="flex items-stretch">
          <label htmlFor={id}>
            <input
              type="checkbox"
              className="w-4 h-4 mt-1 mr-2 align-top transition cursor-pointer"
              id={id}
              defaultChecked={value.checked}
            />{" "}
            <Text text={value.text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary className="cursor-pointer text-primary-80 dark:text-primary-30 ">
            <Text text={value.text} />
          </summary>
          {value.children?.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return <p>{value.title}</p>;
    case "image":
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure className="w-full h-auto ">
          <Image
            src={src}
            alt={caption}
            layout="responsive"
            placeholder="blur"
            quality={100}
            blurDataURL={src}
            width={100}
            height={50}
            className="rounded-lg"
          />
          {caption && (
            <figcaption className="dark:text-primary-40 text-primary-70">
              {caption}
            </figcaption>
          )}
        </figure>
      );
    case "divider":
      return (
        <hr className="w-full mb-8 border-gray-200 border-1 dark:border-primary-80/40" />
      );
    case "quote":
      return (
        <blockquote
          key={id}
          className="flex justify-start px-3 border-l-4 border-black dark:border-white focus:bg-primary-10 hover:bg-primary-10 text-primary-90 dark:text-primary-40"
        >
          {value.text[0].plain_text}
        </blockquote>
      );
    case "code":
      return (
        <pre className="rounded-md font-sm dark:bg-primary-80/40 bg-primary-30/90">
          <div className="flex justify-center w-full h-auto text-sm shadow-sm shadow-support-40 bg-support-40 rounded-t-md">
            {value.language}
          </div>
          <code
            lang={value.language}
            key={id}
            className=" flex px-8 dark:text-primary-20 text-sm py-[20px] text-primary-80"
          >
            {value.text[0].plain_text}
          </code>
        </pre>
      );
    case "file":
      const src_file =
        value.type === "external" ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split("/");
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <div className="flex justify-start dark:text-primary-20 text-primary-70">
            📎
            <Link href={src_file} passHref className="mr-2">
              {lastElementInArray.split("?")[0]}
            </Link>
          </div>
          {caption_file && (
            <figcaption className="dark:text-primary-20 text-primary-70">
              {caption_file}
            </figcaption>
          )}
        </figure>
      );
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};

export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return <div />;
  }
  return (
    <div>
      <Head>
        <title>{page.properties.Posts.title[0].plain_text}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutDefault>
        <NavBar />
        <article className="w-full mt-14">
          <div className="flex justify-center mb-4">
            <h1 className="text-4xl font-bold text-primary-100 dark:text-primary-10">
              <Text text={page.properties.Posts.title} />
            </h1>
          </div>
          <section className="mb-20">
            {blocks.map((block) => (
              <Fragment key={block.id}>{renderBlock(block)}</Fragment>
            ))}
          </section>
          <div className="mb-10">
            <Link href="/blog">
              <a className="px-2 py-1 rounded-md dark:hover:bg-primary-80/25 dark:text-primary-40 text-primary-80 hover:bg-primary-20/95">
                Go back
              </a>
            </Link>
          </div>
        </article>
      </LayoutDefault>
    </div>
  );
}

export const getStaticPaths = async () => {
  const databaseId = "8c5ca271d1f74e4a96c11a01465d77f0";
  const database = await getDatabase({ databaseId });
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const page = await getPage(id);
  const blocks = await getBlocks(id);

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        };
      })
  );
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]["children"] = childBlocks.find(
        (x) => x.id === block.id
      )?.children;
    }
    return block;
  });

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  };
};
