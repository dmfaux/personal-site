import Link from "next/link";

import Paragraph from "@/components/Paragraph/Paragraph";
import prisma from "@/lib/prisma";

const Blog = async () => {
  const blogs = await prisma.post.findMany({
    take: 3,
    orderBy: { createdAt: "desc" },
  });
  return (
    <div className="bg-[--bg-color] text-[--font-color] w-full p-4 rounded-2xl text-center shadow-lg">
      <div className="flex flex-col gap-2 lg:w-[1200px]">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col min-[1387px]:flex-row  items-center mb-8"
          >
            <div
              className="w-[500px] h-[300px] overflow-hidden rounded-xl"
              style={{
                backgroundImage: `url(assets/blog/${blog.image})`,
                backgroundSize: "cover",
              }}
            ></div>

            <div className="flex flex-col mx-4">
              <div className="mx-6 text-left">
                <small>{blog.createdAt.toDateString()}</small>
                <h2 className="text-2xl font-extrabold">{blog.title}</h2>
              </div>

              <div className="mx-6 text-left">
                <Paragraph options={{ cutOff: 200 }}>{blog.content}</Paragraph>
                <Link
                  href={`/blog/${blog.Slug}`}
                  className="cursor-pointer text-blue-700"
                >
                  readme &rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
