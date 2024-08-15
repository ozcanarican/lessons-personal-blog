import { BlogCard } from "@/components/BlogCard";
import { BlogPostType } from "@/customTypes/BlogPostType";

const amount = 12;

async function getBlogs(
  page: number,
): Promise<{ total: number; posts: BlogPostType[] }> {
  const url = `${process.env.HOST}/api/blog?start=${page * amount}&end=${page * amount + amount}`;
  console.log(url);
  const res = await fetch(url, { cache: "force-cache" });
  const result = await res.json();
  return result;
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  let page = searchParams.page ? parseInt(searchParams.page) : 0;
  let result = await getBlogs(page);
  let end = result.total / amount;
  let pages: number[] = [];

  for (let i = 0; i < end; i++) {
    pages.push(i);
  }

  return (
    <div className="padded my-4">
      <h1 className="content-title mb-2">Yazdığım Yazılar</h1>
      <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-6">
        {result.posts.map((blog) => {
          return <BlogCard blog={blog} key={blog.fileName} />;
        })}
      </div>
      <div className="mt-6 flex gap-1">
        {pages.map((page) => {
          return (
            <div
              key={"page" + page}
              className="bg-black text-white hover:bg-blue-600"
            >
              <a href={`/blog?page=${page}`} className="py-1 px-3 block">
                {" "}
                {page + 1}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
