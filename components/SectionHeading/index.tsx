import { Typography } from "@/ui";
import { twMerge } from "tailwind-merge";
import { Heading } from "../Heading";

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
      <Heading as="h2" size="h2" weight="medium" color="brand">
        {heading}
      </Heading>
      <Typography className="lg:flex-1 lg:max-w-[580px]">
        {subheading}
      </Typography>
    </div>
  );
}
