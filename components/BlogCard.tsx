"use client";

import { BlogPostType } from "@/customTypes/BlogPostType";

export function BlogCard({ blog }: { blog: BlogPostType }) {
  return (
    <div className="border relative bg-gray-50  rounded p-2 w-full group hover:shadow duration-300 hover:scale-[101%]">
      <div className="flex absolute right-0 top-0 z-10 gap-2">
        {blog.tags.map((tag, index) => {
          if (index < 3) {
            return (
              <div
                className="bg-[rgba(0,0,0,0.5)] text-sm text-white p-1 px-2 rounded-sm"
                key={`${blog.fileName}-tag-${index}`}
              >
                <a href={`/tag/${tag}`}> #{tag}</a>
              </div>
            );
          }
        })}
      </div>

      <a href={`/blog/${blog.fileName}`}>
        <img
          src={blog.image}
          alt={blog.title}
          className="max-w-[100%] group-hover:scale-[102%] duration-300"
        />
        <div className="text-gray-800 mb-1 text-lg font-bold">{blog.title}</div>
        <div className="italic text-gray-600">{blog.desc}</div>
      </a>
    </div>
  );
}
