type Props = {
  avatarUrl: string;
  name: string;
  username: string;
  testimonial: string;
};

export function TestimonialCard({
  avatarUrl,
  name,
  username,
  testimonial,
}: Props) {
  return (
    <div className="p-6 bg-bg-primary space-y-4 rounded-lg shadow-card w-full">
      <figure className="flex items-center gap-4">
        <img
          src={avatarUrl}
          alt={`${name}'s Profile Picture`}
          className="w-12 aspect-square"
        />
        <figcaption className="flex flex-col gap-[1px]">
          <h4 className="text-fg-primary text-lg font-semibold">{name}</h4>
          <span className="text-fg-secondary text-sm">@{username}</span>
        </figcaption>
      </figure>
      <blockquote className="text-fg-secondary">{testimonial}</blockquote>
    </div>
  );
}
