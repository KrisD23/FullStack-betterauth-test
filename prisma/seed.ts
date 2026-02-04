import prisma from "@/lib/db";

async function main() {
  const blogPosts = [
    {
      slug: "master-tailwind-css",
      title: "Master Tailwind CSS",
      content: `# Master Tailwind CSS
Tailwind CSS is a utility-first CSS framework for rapid UI development.

## Benefits
- Highly customizable
- Responsive design out of the box

**Tip:** Use Tailwind Play to experiment with styles quickly.
`,
    },
    {
      slug: "deploy-with-vercel",
      title: "Deploy with Vercel",
      content: `# Deploy with Vercel
Vercel is a platform for frontend frameworks and static sites, built to integrate with your headless content, commerce, or database.

## Why Vercel?
- Easy integration with GitHub
- Fast global CDN

**Tip:** Connect your repo and deploy in seconds!
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
