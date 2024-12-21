import { tv } from "@/lib/tailwind-variant";

export const badgeStyles = tv(
  "py-0.5 px-2 text-sm leading-5 rounded-full inline-block",
  {
    variants: {
      variant: {
        success:
          "bg-bg-success-subtle border border-line-success text-fg-success",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  }
);
