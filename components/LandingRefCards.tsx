import { BlogPostType } from "@/customTypes/BlogPostType";
import { RefCard } from "./RefCard";

async function getRefs() {
  const res = await fetch(process.env.HOST! + "/api/ref", {
    cache: "force-cache",
  });
  return await res.json();
}

export async function LandingRefCards() {
  let res = await getRefs();
  const refs: BlogPostType[] = res.posts;
  return (
    <div className="padded mt-6 py-6 bg-gray-600 text-gray-200">
      <h1 className="content-title text-gray-50 mb-12">Referanslarım</h1>
      <div className="flex flex-col md:grid md:grid-cols-2 gap-2 lg:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4 justify-between">
        {refs.map((blog, index) => {
          return <RefCard blog={blog} key={"blogcard" + index} />;
        })}
      </div>
    </div>
  );
}
