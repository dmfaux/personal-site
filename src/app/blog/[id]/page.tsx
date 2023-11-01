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
    id: string;
  };
}) => {
  const { id } = params;

  const blog = await prisma.post.findFirst({
    where: {
      id,
    },
  });

  const displayEntry = (content: string) => {
    return { __html: marked(content) };
  };

  return (
    <div>
      <h1 className="text-[--font-color] text-4xl mb-4 mx-4">{blog?.title}</h1>

      <Image
        src={blog ? blog.image : ""}
        alt={blog ? blog.title : ""}
        width={1600}
        height={400}
        quality={80}
        className="rounded-xl"
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