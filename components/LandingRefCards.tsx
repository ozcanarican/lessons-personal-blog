import { BlogPostType } from "@/customTypes/BlogPostType";
import { RefCard } from "./RefCard";
import { ActionGetRefs } from "@/actions/ActionGetRefs";

export async function LandingRefCards() {
  let res = await ActionGetRefs();
  const refs: BlogPostType[] = res.posts;
  if (refs.length > 0) {
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
  } else {
    return <></>;
  }
}
