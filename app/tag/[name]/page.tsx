import { ActionGetTags } from "@/actions/ActionGetTags";
import { BlogCard } from "@/components/BlogCard";

export default async function TagPage({
  params,
}: {
  params: { name: string };
}) {
  const posts = await ActionGetTags(params.name);
  return (
    <div className="padded my-4">
      <h1 className="content-title mb-2">Yazdığım Yazılar</h1>
      <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-6">
        {posts.map((blog) => {
          return <BlogCard blog={blog} key={blog.fileName} />;
        })}
      </div>
    </div>
  );
}
