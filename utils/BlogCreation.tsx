import { readdirSync, statSync, readFileSync } from "fs";
import { BlogPostType } from "../customTypes/BlogPostType";
const dir = process.cwd() + "/markdowns";

export default function GetBlogPosts(isBlog = true) {
  let dirFiles = readdirSync(dir);
  let posts: BlogPostType[] = [];
  let refs: BlogPostType[] = [];

  dirFiles.map((file) => {
    let blog = CreateBlogObject(file);
    if (blog) {
      if (blog.tags.includes("ref")) {
        refs.push(blog);
      } else {
        posts.push(blog);
      }
    }
  });
  posts.sort((a, b) => b.creation - a.creation);
  refs.sort((a, b) => b.creation - a.creation);
  if (isBlog) return posts;
  else return refs;
}

export function CreateBlogObject(file: string): BlogPostType | null {
  try {
    let fileContent = readFileSync(dir + "/" + file).toString();
    let { birthtime } = statSync(dir + "/" + file);
    let fileParts = fileContent.split("---");
    let header: {
      desc: string;
      title: string;
      image: string;
      tags: string[];
    } = JSON.parse(fileParts[0]);
    let blog: BlogPostType = {
      image: header.image,
      title: header.title,
      tags: header.tags,
      desc: header.desc,
      content: fileParts[1],
      fileName: file.replace(".md", ""),
      creation: birthtime.getTime(),
    };
    return blog;
  } catch (e) {
    return null;
  }
}
