import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import drakula from "../../style";
import Image from "next/image";
import { urlFor } from "../../sanity";
export const serializers = {
  list: (props: any) => (
    <ul className="pl-4 mt-4 list-disc dark:text-primary-20">
      {props.children}
    </ul>
  ),
  types: {
    image: (props: any) => {
      return (
        <Image
          className="rounded-lg "
          src={urlFor(props.node).url()}
          width="100%"
          height="50%"
          layout="responsive"
          objectFit="contain"
          placeholder="blur"
          blurDataURL={urlFor(props.node).url()}
          alt={props.node.asset._ref}
        />
      );
    },
    block: (props: any) => {
      if (props.node.style === "blockquote") {
        return (
          <blockquote className="w-full pl-4 mt-4 mb-4 border-l-4 border-support-40 dark:text-primary-20 ">
            {props.node.children[0].text}
          </blockquote>
        );
      }
      if (props.node.style === "h1") {
        return (
          <h1 className="mt-[48px] mb-[24px] flex w-full text-4xl font-semibold items-left dark:text-primary-20">
            {props.node.children[0].text}
          </h1>
        );
      }
      if (props.node.style === "h2") {
        return (
          <h2 className="mt-[48px] mb-[24px] flex text-2xl font-semibold items-left dark:text-primary-20">
            {props.node.children[0].text}
          </h2>
        );
      }
      if (props.node.markDefs[0]?._type === "link") {
        return (
          <a
            className="font-medium text-blue-400 underline transition-all hover:text-blue-500"
            href={props.node.markDefs[0].href}
          >
            {props.node.children[0].text}
          </a>
        );
      }
      return (
        <p className="leading-loose dark:text-primary-30">
          {props.node.children[0].text}
        </p>
      );
    },
    code: (props: any) => (
      <SyntaxHighlighter
        language={props.node.language}
        style={drakula}
        lineNumberStyle={{
          padding: "0 5px 0 0",
          fontSize: 14,
          backgroundColor: "transparent",
          borderRight: "1.5px solid darkgray",
          marginRight: "10px",
        }}
      >
        {props.node.code}
      </SyntaxHighlighter>
    ),
  },
};
