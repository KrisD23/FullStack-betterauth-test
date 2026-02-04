import prisma from "@/lib/db";

async function main() {
  const blogPosts = [
    {
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

  for (const post of blogPosts) {
    await prisma.blogPost.create({
      data: post,
    });
  }

  console.log("Seed data has been inseted successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
