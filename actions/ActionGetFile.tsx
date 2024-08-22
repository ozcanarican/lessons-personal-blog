import { BlogPostType } from "@/customTypes/BlogPostType";
import { CreateBlogObject } from "@/utils/BlogCreation";

export async function ActionGetFile(
  fileName: string,
): Promise<BlogPostType | null> {
  try {
    let blog = CreateBlogObject(fileName + ".md");
    console.log(blog);
    if (blog) return JSON.parse(JSON.stringify(blog));
    else return null;
  } catch (e) {
    return null;
  }
}
