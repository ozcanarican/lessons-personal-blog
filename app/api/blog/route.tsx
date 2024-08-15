import GetBlogPosts from "@/utils/BlogCreation";

export async function GET(req: Request) {
  let url = new URL(req.url);
  let params = url.searchParams;
  try {
    let start: number = params.has("start")
      ? parseInt(params.get("start")!)
      : 0;
    let end: number = params.has("end") ? parseInt(params.get("end")!) : 10;
    let posts = GetBlogPosts();
    let total = posts.length;
    let subpost = posts.splice(start, end);

    return new Response(JSON.stringify({ total, posts: [...subpost] }));
  } catch (e) {
    console.log(e);
    return new Response("", { status: 500 });
  }
}
