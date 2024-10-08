import { cva } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const typographyVariants = cva("", {
  variants: {
    size: {
      h1: "text-h1-mob lg:text-h1",
      h2: "text-h2-mob lg:text-h2",
      h3: "text-h3-mob lg:text-h3",
      h4: "text-h4-mob lg:text-h4",
      p: "text-base lg:text-lg",
    },
    weight: {
      400: "font-normal",
      500: "font-medium",
      regular: "font-normal",
      medium: "font-medium",
    },
  },
});

interface TypographyProps
  extends HTMLAttributes<
    HTMLParagraphElement | HTMLHeadingElement | HTMLSpanElement
  > {
  as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  size?: "h1" | "h2" | "h3" | "h4" | "p";
  weight?: 400 | 500 | "regular" | "medium";
}

export function Typography({
  as = "p",
  size = "p",
  weight = "regular",
  className,
  children,
  ...props
}: TypographyProps) {
  return React.createElement(
    as,
    {
      className: twMerge(
        typographyVariants({
          size,
          weight,
          className,
        })
      ),
      ...props,
    },
    children
  );
}
