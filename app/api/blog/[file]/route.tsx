import { CreateBlogObject } from "@/utils/BlogCreation";
import { readFileSync } from "fs";

export async function GET(
  req: Request,
  { params }: { params: { file: string } },
) {
  const fileName = `${params.file}.md`;
  try {
    let blog = CreateBlogObject(fileName);
    if (blog) return new Response(JSON.stringify(blog), { status: 200 });
    else return new Response("Something went wrong", { status: 500 });
  } catch (e) {
    return new Response("File not found", { status: 404 });
  }
}
