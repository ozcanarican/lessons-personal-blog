import { ActionGetFile } from "@/actions/ActionGetFile";
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
}): Promise<Metadata> {
  let blog = await ActionGetFile(params.file);
  return {
    title: blog?.title,
    description: blog?.desc,
    openGraph: {
      title: blog?.title,
      description: blog?.desc,
      images: [process.env.HOST! + "/" + blog?.image],
    },
  };
}

export default async function BlogReadingPage({
  params,
}: {
  params: { file: string };
}) {
  let blog = await ActionGetFile(params.file);
  if (!blog) {
    redirect("/");
  }
  return (
    <div className="padded mt-6 blog flex justify-center">
      <div className="reading-box 2xl:max-w-[1000px]">
        <div className="font-black text-4xl mb-6 text-center">{blog.title}</div>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full mb-4 rounded"
        />
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  PreTag="div"
                  language={match[1]}
                  style={dark}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code {...rest} className={className}>
                  {children}
                </code>
              );
            },
          }}
        >
          {blog.content}
        </Markdown>
      </div>
    </div>
  );
}
