import { BlogPostType } from "../customTypes/BlogPostType";
import GetBlogPosts from "../utils/BlogCreation";

type ResponseType = {
  total: number;
  posts: BlogPostType[];
};

export async function ActionGetRefs(
  start: number = 0,
  end: number = 10,
): Promise<ResponseType> {
  try {
    let posts = GetBlogPosts(false);
    console.log("ham", posts, start, end);
    let total = posts.length;
    let subpost = posts.splice(start, end);

    return JSON.parse(JSON.stringify({ total, posts: [...subpost] }));
  } catch (e) {
    console.log(e);
    return { total: 0, posts: [] };
  }
}
