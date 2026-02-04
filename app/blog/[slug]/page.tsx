import MarkdownRenderer from "@/components/MarkdownRenderer";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;

  const post = await prisma.blogPost.findUnique({ where: { slug } });

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen py-16 px-4  max-w-5xl ">
      <article className="max-w-3xl mx-auto">
        <Button asChild variant={"ghost"}>
          <Link href="/blog">
            <ArrowLeft className="w-4 h-4" />
            Back to blog
          </Link>
        </Button>

        <h1 className="text-3xl font-bold mb-4">{post?.title}</h1>
        <p className="text-muted-foreground mb-8">
          {new Date(post.createdAt).toLocaleDateString()}
        </p>

        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <MarkdownRenderer content={post.content} />
        </div>
      </article>
    </main>
  );
};

export default page;
