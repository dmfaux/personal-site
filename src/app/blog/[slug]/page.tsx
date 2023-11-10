import React from "react";
import prisma from "@/lib/prisma";
import Image from "next/image";
import { marked } from "marked";

import styles from "./Blog.module.css";
import Divider from "@/components/Divider/Divider";

const BlogEntry = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const { slug } = params as { slug: string };

  const blog = await prisma.post.findUnique({
    where: { slug },
  });

  const displayEntry = (content: string) => {
    return { __html: marked(content) };
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-[--font-color] text-4xl mb-4 mx-4">{blog?.title}</h1>

      <img
        src={blog ? `/assets/blog/${blog.image}` : ""}
        alt={blog ? blog.title : ""}
        className="rounded-xl max-[1339px]:w-10/12 "
      />

      <div
        className={`text-[--font-color] p-8 text-xl ${styles["blog-entry"]}`}
        dangerouslySetInnerHTML={displayEntry(blog ? blog.content : "")}
      ></div>

      <Divider />
    </div>
  );
};

export default BlogEntry;
