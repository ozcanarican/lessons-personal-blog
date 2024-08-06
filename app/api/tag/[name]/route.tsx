import { BlogPostType } from "@/customTypes/BlogPostType";
import GetBlogPosts from "@/utils/BlogCreation";

export function GET(req: Request, { params }: { params: { name: string } }) {
  let posts = GetBlogPosts();
  let filteredPosts: BlogPostType[] = [];
  posts.map((post) => {
    if (post.tags.includes(params.name)) {
      filteredPosts.push(post);
    }
  });
  return new Response(JSON.stringify(filteredPosts), { status: 200 });
}
