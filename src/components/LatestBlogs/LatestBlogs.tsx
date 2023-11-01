import React from "react";
import Link from "next/link";
import Image from "next/image";

import Paragraph from "@/components/Paragraph/Paragraph";
import prisma from "@/lib/prisma";

const LatestBlogs = async () => {
  const blogs = await prisma.post.findMany({
    take: 3,
    orderBy: { createdAt: "desc" },
  });
  return (
    <div className="bg-[--bg-color] min-[1297px]:w-full p-4 rounded-2xl text-center shadow-lg text-[--font-color]">
      <h1 className="text-4xl mb-8">Latest Blog Articles</h1>
      <div className="flex gap-2 flex-col items-start min-[1297px]:flex-row">
        {blogs.map((blog) => (
          <>
            <div className="h-full">
              <div
                key={blog.id}
                className="w-[400px] h-full flex flex-col items-center"
              >
                <div className="h-[200px] overflow-hidden rounded-xl">
                  <img src={`/assets/blog/${blog.image}`} alt={blog.title} />
                </div>

                <div className="my-6">
                  <small>{blog.createdAt.toDateString()}</small>
                  <Link
                    href={`/blog/${blog.id}`}
                    className="cursor-pointer underline text-left"
                  >
                    <h2 className="text-2xl font-extrabold">{blog.title}</h2>
                  </Link>
                </div>

                <div className="flex-grow">
                  <Paragraph options={{ cutOff: 200 }}>
                    {blog.content}
                  </Paragraph>
                </div>
              </div>

              <hr className="block min-[1297px]:hidden my-4 w-full" />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
