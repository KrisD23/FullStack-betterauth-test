import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { MessageCircle } from "lucide-react";
import Link from "next/link";

const Home = () => {
  const POSTS = [
    {
      id: 1,
      slug: "learn-nextjs-basics",
      title: "Learn nextjs Basics",
      content: `#Learn Next.js basics
      Next.js is a popular react framwwork that helps you build fast and SEO-freiendly websites.


      ## Why Use Next.js ?
      - Build-in Routing system
      - Server-side rendering



      **Tip:** Start with the App Router if you are building new Projects.
      
      `,
    },
  ];

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

        {POSTS.length > 0 ? (
          <div>
            {POSTS.map((post) => (
              <Card key={post.id} className="hover:bg-accent transition-colors">
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
      </section>
    </main>
  );
};

export default Home;
