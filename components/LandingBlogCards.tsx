import { BlogPostType } from "@/customTypes/BlogPostType";
import { BlogCard } from "./BlogCard";
import { ActionGetBlogs } from "@/actions/ActionGetBlogs";

export async function LandingBlogCards() {
  const result = await ActionGetBlogs();
  const blogs: BlogPostType[] = result.posts;
  return (
    <div className="padded my-6">
      <h1 className="content-title text-gray-800 mb-3">Yazdığım Yazılar</h1>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 lg:grd-cols-2 xl:grid-cols-3  2xl:grid-cols-4 justify-between">
        {blogs.map((blog, index) => {
          return <BlogCard blog={blog} key={"blogcard" + index} />;
        })}
      </div>
    </div>
  );
}
