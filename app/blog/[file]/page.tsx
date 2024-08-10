import { BlogPostType } from "@/customTypes/BlogPostType";
import { redirect } from "next/navigation";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

async function getBlog(fileName: string) {
  try {
    const res = await fetch(process.env.HOST! + "/api/blog/" + fileName);
    let blog: BlogPostType = await res.json();
    return blog;
  } catch (e) {
    console.log(e);
    return null;
  }
}

export default async function BlogReadingPage({
  params,
}: {
  params: { file: string };
}) {
  let blog = await getBlog(params.file);
  if (!blog) {
    redirect("/");
  }
  return (
    <div className="padded mt-6 blog flex justify-center">
      <div className="reading-box">
        <div className="font-black text-4xl mb-6 text-center">{blog.title}</div>
        <Markdown
          children={blog.content}
          components={{
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  style={dark}
                />
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
    </div>
  );
}
