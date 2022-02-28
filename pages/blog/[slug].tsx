import React from "react";
import NavBar from "@components/NavBar";
import Link from "next/link";
import Image from "next/image";
import Footer from "@components/Footer";
import BlockContent from "@sanity/block-content-to-react";
import { serializers } from "@components/Serialize/serialize";
import { sanityClient, urlFor } from "../../sanity";
import { Post } from "../../typings";
import { LayoutDefault } from "@layouts/LayoutDefault";
import { GetStaticProps } from "next";
import { BackspaceIcon } from "@heroicons/react/solid";
import Separator from "@components/Separator";
import { CommentBlog } from "@components/CommentsBlog/CommentBlog";
interface Props {
  post: Post;
}
const PostContent = ({ post }: Props) => {
  return (
    <LayoutDefault>
      <NavBar />
      <article className="w-full mx-auto mb-3">
        <h1 className="mt-8 mb-4 text-3xl font-bold tracking-tight text-left text-black md:text-5xl dark:text-white">
          {post.title}
        </h1>
        <div className="flex items-center space-x-2">
          <div className="max-w-[640px] flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center mb-[16px]">
            <div className="flex items-center">
              <Image
                src={urlFor(post.author.image).url()}
                width="24px"
                height="24px"
                alt={post.author.name}
                className="rounded-full "
              />{" "}
              <p className="ml-4 text-sm font-light dark:text-primary-50">
                Blog post by{" "}
                <span className="text-support-50">{post.author.name} </span>
              </p>
            </div>

            <p className="mt-2 text-sm text-support-60 dark:text-support-40 min-w-32 md:mt-0">
              Published at {new Date(post._createdAt).toLocaleString()}
            </p>
          </div>
        </div>
        <BlockContent
          className="px-2 mt-10"
          blocks={post.body}
          projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!}
          dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
          serializers={serializers}
        />
        <Link href="/blog">
          <a className="flex flex-row items-center w-[120px] justify-center rounded-md ml-2 mb-20 mt-6 py-1 dark:hover:bg-primary-90 dark:text-primary-20 text-sm border dark:border-primary-80 text-primary-80 hover:bg-primary-10 cursor-pointer hover:scale-105">
            <BackspaceIcon className="w-4 h-4 mr-2 dark:text-primary-10 text-primary-80" />
            Go Back
          </a>
        </Link>
        <Separator />
        <CommentBlog post={post} />
        <div className="items-center justify-center px-4 py-2 mb-8 rounded-md bg-primary-20 dark:bg-primary-90">
          <h3 className="mt-4 text-xl font-semibold dark:text-primary-20 text-primary-90">
            Comments:
          </h3>
          <hr className="w-[100px] mb-4 border-gray-400 border-1 dark:border-primary-70" />
          {post.comments[0] ? (
            post.comments.map((comment) => (
              <div key={comment._id} className="mb-4">
                <p className="dark:text-primary-20">
                  <span className="text-support-50 dark:text-support-30">
                    {comment.name}
                  </span>{" "}
                  <span className="m-1 italic font-light">said</span>{" "}
                  {comment.comment}
                </p>
              </div>
            ))
          ) : (
            <p className="mb-4 dark:text-primary-30">No comments yet</p>
          )}
        </div>
      </article>
      <Footer />
    </LayoutDefault>
  );
};
export default PostContent;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
    _id,
   slug {
    current
  }
  }`;
  const posts = await sanityClient.fetch(query);
  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      categories,
      publishedAt,
      'comments': *[
        _type == "comment" &&
        post._ref == ^._id &&
        approved == true
      ],
      author-> {
       name,
       image
      },
     description,
     mainImage,
     slug,
     body
    }`;
  const post = await sanityClient.fetch(query, {
    slug: params?.slug,
  });
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
    revalidate: 60, // after 60 seconds , will update the cache
  };
};
