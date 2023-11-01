import React from "react";
import Link from "next/link";

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
      <div className="flex gap-2 flex-col items-center min-[1297px]:flex-row">
        {blogs.map((blog) => (
          <>
            <div key={blog.id} className="w-[400px] flex flex-col items-center">
              <div
                className="w-[380px] h-[300px] bg-red-500 overflow-hidden rounded-xl"
                style={{
                  backgroundImage: `url(${blog.image})`,
                  backgroundSize: "cover",
                }}
              >
                {/* <img src={blog.image} alt={blog.title} className="object-cover" /> */}
              </div>

              <div className="my-6">
                <small>{blog.createdAt.toDateString()}</small>
                <h2 className="text-2xl font-extrabold">{blog.title}</h2>
              </div>

              <div className="flex-grow">
                <Paragraph options={{ cutOff: 200 }}>{blog.content}</Paragraph>
              </div>
              <Link
                href={`/blog/${blog.id}`}
                className="cursor-pointer text-blue-700"
              >
                readme &rarr;
              </Link>
            </div>

            <hr className="block min-[1297px]:hidden my-4 w-full" />
          </>
        ))}
      </div>
    </div>
  );
};

export default LatestBlogs;
