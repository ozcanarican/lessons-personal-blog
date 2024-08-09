"use client";

import { BlogPostType } from "@/customTypes/BlogPostType";

export function RefCard({ blog }: { blog: BlogPostType }) {
  return (
    <div className="relative  rounded p-2 w-full group bg-gray-500">
      <a href={`/blog/${blog.fileName}`}>
        <img
          src={blog.image}
          alt={blog.title}
          className="max-w-[80%] h-[150px] group-hover:scale-[102%] duration-300 absolute -top-10 ml-auto mr-auto left-0 right-0"
        />
        <div className="mb-1 font-bold mt-[100px] text-center !text-white">
          {blog.title}
        </div>
        <div className="italic text-gray-300 text-center">{blog.desc}</div>
      </a>
      <div className="flex gap-2 justify-center">
        {blog.tags.map((tag, index) => {
          if (tag != "ref") {
            return (
              <div
                className="bg-[rgba(0,0,0,0.5)] bg-gray-800 text-sm text-gray-200 mt-4 capitalize p-1 px-2 rounded-sm"
                key={`${blog.fileName}-tag-${index}`}
              >
                <a href={`/tag/${tag}`}> #{tag}</a>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
