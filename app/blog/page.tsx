import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import prisma from "@/lib/db";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const page = async () => {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
  });
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto ">
        <Button asChild variant={"ghost"}>
          <Link href="/">
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
        </Button>

        <div className="py-5">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="hover:bg-accent transition-colors mb-3"
            >
              <Link href={`/blog/${post.slug}`}>
                <CardContent className="p-4">
                  <h3 className="font-semibold">{post.title}</h3>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default page;
