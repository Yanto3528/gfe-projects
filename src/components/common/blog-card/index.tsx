import { RiArrowRightLine } from "@remixicon/react";
import { Badge } from "@/components/ui/badge";

type Props = {
  imageUrl: string;
  category: string;
  title: string;
  content: string;
  href: string;
};

export function BlogCard({ imageUrl, title, category, content, href }: Props) {
  return (
    <article className="shadow-card bg-bg-primary rounded-lg overflow-hidden">
      <img
        src={imageUrl}
        alt={`${title} thumbnail`}
        className="w-full h-[288px] object-cover"
      />
      <div className="px-4 py-6 flex flex-col gap-3">
        <div className="flex flex-col items-start gap-2">
          <Badge>{category}</Badge>
          <h3 className="text-lg">{title}</h3>
        </div>
        <div className="flex flex-col items-start flex-1 justify-between gap-6">
          <p className="text-fg-secondary">{content}</p>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-fg-brand font-medium flex items-center gap-2 group pl-0.5"
          >
            Read more <RiArrowRightLine size={20} />
          </a>
        </div>
      </div>
    </article>
  );
}
