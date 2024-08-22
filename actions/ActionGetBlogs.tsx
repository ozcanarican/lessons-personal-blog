import { BlogPostType } from "@/customTypes/BlogPostType";
import GetBlogPosts from "@/utils/BlogCreation";

type ResponseType = {
  total: number;
  posts: BlogPostType[];
};

export async function ActionGetBlogs(
  start: number = 0,
  end: number = 10,
): Promise<ResponseType> {
  try {
    let posts = GetBlogPosts();
    let total = posts.length;
    let subpost = posts.splice(start, end);
    return JSON.parse(JSON.stringify({ total, posts: [...subpost] }));
  } catch (e) {
    console.log(e);
    return { total: 0, posts: [] };
  }
}
