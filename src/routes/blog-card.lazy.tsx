import { createLazyFileRoute } from "@tanstack/react-router";
import BlogCardThumbnail from "@/assets/blog-card-thumbnail.webp";
import { BlogCard } from "@/components/common/blog-card";

export const Route = createLazyFileRoute("/blog-card")({
  component: BlogCardPage,
});

const data = {
  title: "Top 5 Living Room Inspirations",
  content:
    "Curated vibrants colors for your living, make it pop & calm in the same time.",
  imageUrl: BlogCardThumbnail,
  category: "Interior",
  href: "https://www.greatfrontend.com/projects/challenges/blog-card",
};

function BlogCardPage() {
  return (
    <main className="container">
      <div className="pt-[120px] flex justify-center">
        <div className="max-w-[340px] w-full">
          <BlogCard {...data} />
        </div>
      </div>
    </main>
  );
}
