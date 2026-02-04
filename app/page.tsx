import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import prisma from "@/lib/db";

import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

const Home = async () => {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: "desc" },
    take: 3,
  });

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 px-4 text-center ">
        <h1 className="text-5xl font-bold mb-4">Hi, I am KD</h1>
        <p className="text-muted-foreground text-lg max-w-md mb-6">
          A full stack developer passionate about building great web
          experiences.
        </p>
        <div className="flex gap-2 ">
          <Button asChild>
            <Link href="/blog">Read Blog</Link>
          </Button>
          <Button variant={"outline"} asChild>
            <Link href="/comments">
              <MessageCircle className="w-4 h-4 mr-2" />
              Contact Me
            </Link>
          </Button>
        </div>
      </section>

      {/* About section */}
      <section className="max-w-4xl mx-auto px-4 py-16 ">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className=" text-muted-foreground">
          I specialize in React, Next js and TypeScript. With years of
          experience building scalable applications, i love turning ideas into
          reality
        </p>
      </section>

      {/* Recent Posts */}
      <section className="max-w-4xl mx-auto px-4 py-16 ">
        <h1 className="text-3xl font-bold mb-4">Recent Posts</h1>

        {posts.length > 0 ? (
          <div>
            {posts.map((post) => (
              <Card
                key={post.id}
                className="hover:bg-accent transition-colors mb-2"
              >
                <Link href={`/blog/${post.slug}`}>
                  <CardContent className="p-4">
                    <h3 className="font-semibold">{post.title}</h3>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No posts yet.</p>
        )}

        <Button variant={"link"} asChild className="mt-4 px-0">
          <Link href="/blog">
            View all posts <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
      </section>
    </main>
  );
};

export default Home;
