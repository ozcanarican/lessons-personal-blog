import { readFileSync } from "fs";

export async function GET(
  req: Request,
  { params }: { params: { file: string } },
) {
  const fileName = `${params.file}.md`;
  try {
    let fileContent = readFileSync(process.cwd() + "/markdowns/" + fileName);
    return new Response(fileContent, { status: 200 });
  } catch (e) {
    return new Response("File not found", { status: 404 });
  }
}
