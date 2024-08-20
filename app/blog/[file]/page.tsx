import { BlogPostType } from "@/customTypes/BlogPostType";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

export async function generateMetadata({
  params,
}: {
  params: { file: string };
}): Metadata {
  let blog = await getBlog(params.file);
  return {
    title: blog?.title,
    description: blog?.desc,
    openGraph: {
      title: blog.title,
      description: blog?.desc,
      images: [process.env.HOST! + "/" + blog?.image],
    },
  };
}

async function getBlog(fileName: string) {
  try {
    const res = await fetch(process.env.HOST! + "/api/blog/" + fileName, {
      cache: "force-cache",
    });
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
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full mb-4 rounded"
        />
        <Markdown
          remarkPlugins={[remarkGfm]}
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
