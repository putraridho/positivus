import { Typography, TypographyProps } from "@/ui";
import { cva } from "class-variance-authority";
import { createElement, PropsWithChildren } from "react";

const headingVariants = cva("px-2 rounded-[7px]", {
  variants: {
    color: {
      brand: "bg-brand text-black",
      white: "bg-white text-black",
      dark: "bg-dark text-white",
    },
  },
});

interface HeadingProps {
  as?: TypographyProps["as"];
  size: TypographyProps["size"];
  weight: TypographyProps["weight"];
  color: "brand" | "dark" | "white";
  className?: string;
}

export function Heading({
  as = "h1",
  size,
  color,
  className,
  children,
}: PropsWithChildren<HeadingProps>) {
  return createElement(
    as,
    { className: headingVariants({ color, className }) },
    <Typography as="span" size={size}>
      {children}
    </Typography>
  );
}
