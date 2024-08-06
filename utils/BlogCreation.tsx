import { readdirSync, statSync, readFileSync } from "fs";
import { BlogPostType } from "../customTypes/BlogPostType";

export default function GetBlogPosts() {
  const dir = process.cwd() + "/markdowns";
  let dirFiles = readdirSync(dir);
  let posts: BlogPostType[] = [];

  let fileParts: any;

  dirFiles.map((file) => {
    try {
      let { birthtime } = statSync(dir + "/" + file);
      let fileContent = readFileSync(dir + "/" + file).toString();
      fileParts = fileContent.split("-----");
      let header: { title: string; image: string; tags: string[] } = JSON.parse(
        fileParts[0],
      );
      posts.push({
        image: header.image,
        title: header.title,
        tags: header.tags,
        content: fileParts[1],
        fileName: file,
        creation: birthtime.getTime(),
      });
    } catch (e) {
      console.log("Atlanan dosya:", file, e);
      console.log(fileParts[0]);
    }
  });

  posts.sort((a, b) => b.creation - a.creation);
  return posts;
}
