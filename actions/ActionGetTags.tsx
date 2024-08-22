import { BlogPostType } from "../customTypes/BlogPostType";
import GetBlogPosts from "../utils/BlogCreation";

export function ActionGetTags(tag: string): Promise<BlogPostType[]> {
  let posts = GetBlogPosts();
  let filteredPosts: BlogPostType[] = [];
  posts.map((post: BlogPostType) => {
    if (post.tags.includes(tag)) {
      filteredPosts.push(post);
    }
  });
  return JSON.parse(JSON.stringify(filteredPosts));
}
