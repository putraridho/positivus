import { Typography } from "@/ui";
import { twMerge } from "tailwind-merge";

interface SectionHeadingProps {
  heading: string;
  subheading: string;
  className?: string;
}

export function SectionHeading({
  heading,
  subheading,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={twMerge(
        "flex flex-col lg:flex-row items-center lg:items-start gap-[30px] lg:gap-20 text-center lg:text-left",
        className
      )}
    >
      <Typography
        as="h2"
        size="h2"
        weight="medium"
        className="px-2 bg-brand rounded-[7px]"
      >
        {heading}
      </Typography>
      <Typography className="lg:flex-1 lg:max-w-[580px]">
        {subheading}
      </Typography>
    </div>
  );
}
