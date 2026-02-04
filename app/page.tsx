import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

const Home = () => {
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
      <section className="flex flex-col px-20 ">
        <h1 className="text-3xl font-bold">About Me</h1>
        <p className="text-lg text-muted-foreground">
          I specialize in React, Next js and TypeScript. With years of
          experience building scalable applications, i love turning ideas into
          reality
        </p>
      </section>
    </main>
  );
};

export default Home;
