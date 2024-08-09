import { readdirSync, statSync, readFileSync } from "fs";
import { BlogPostType } from "../customTypes/BlogPostType";

export default function GetBlogPosts(isBlog = true) {
  const dir = process.cwd() + "/markdowns";
  let dirFiles = readdirSync(dir);
  let posts: BlogPostType[] = [];
  let refs: BlogPostType[] = [];

  let fileParts: any;

  dirFiles.map((file) => {
    try {
      let { birthtime } = statSync(dir + "/" + file);
      let fileContent = readFileSync(dir + "/" + file).toString();
      fileParts = fileContent.split("---");
      let header: {
        desc: string;
        title: string;
        image: string;
        tags: string[];
      } = JSON.parse(fileParts[0]);
      if (header.tags.includes("ref")) {
        refs.push({
          image: header.image,
          title: header.title,
          tags: header.tags,
          desc: header.desc,
          content: fileParts[1],
          fileName: file.replace(".md", ""),
          creation: birthtime.getTime(),
        });
      } else {
        posts.push({
          image: header.image,
          title: header.title,
          tags: header.tags,
          desc: header.desc,
          content: fileParts[1],
          fileName: file.replace(".md", ""),
          creation: birthtime.getTime(),
        });
      }
    } catch (e) {
      console.log("Atlanan dosya:", file, e);
    }
  });

  posts.sort((a, b) => b.creation - a.creation);
  refs.sort((a, b) => b.creation - a.creation);
  if (isBlog) return posts;
  else return refs;
}
