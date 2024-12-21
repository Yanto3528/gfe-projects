import { createLazyFileRoute } from "@tanstack/react-router";
import { TestimonialCard } from "@/components/common/testimonial-card";
import ProfileThumbnail from "@/assets/profile-thumbnail.png";

export const Route = createLazyFileRoute("/testimonial-card")({
  component: TestimonialCardPage,
});

const testimonial = {
  name: "Sarah Dole",
  username: "sarahdole",
  avatarUrl: ProfileThumbnail,
  testimonial:
    "I've been searching for high-quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!",
};

function TestimonialCardPage() {
  return (
    <main className="container">
      <div className="pt-[200px] flex justify-center">
        <div className="max-w-[340px] w-full">
          <TestimonialCard {...testimonial} />
        </div>
      </div>
    </main>
  );
}
