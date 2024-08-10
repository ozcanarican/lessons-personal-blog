import { BlogPostType } from "@/customTypes/BlogPostType";
import { BlogCard } from "./BlogCard";

async function getBlogs() {
  const res = await fetch(process.env.HOST! + "/api/blog", {
    cache: "force-cache",
  });
  return await res.json();
}

export async function LandingBlogCards() {
  const blogs: BlogPostType[] = await getBlogs();
  return (
    <div className="padded my-6">
      <h1 className="content-title text-gray-800 mb-3">Yazdığım Yazılar</h1>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-2 lg:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 justify-between">
        {blogs.map((blog, index) => {
          return <BlogCard blog={blog} key={"blogcard" + index} />;
        })}
      </div>
    </div>
  );
}
