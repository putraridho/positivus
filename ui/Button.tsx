import { cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "py-5 px-9 text-xl font-normal rounded-[14px] outline outline-2 outline-offset-1 outline-transparent transition-all",
  {
    variants: {
      variant: {
        solid: "",
        outline: "bg-transparent ring-inset ring-1",
      },
      color: {
        brand: "focus:outline-grey",
        dark: "focus:outline-brand",
        grey: "focus:outline-dark",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        color: "brand",
        className: "bg-brand text-black",
      },
      {
        variant: "solid",
        color: "grey",
        className: "bg-grey text-black",
      },
      {
        variant: "solid",
        color: "dark",
        className: "bg-dark text-white",
      },
      {
        variant: "outline",
        color: "brand",
        className: "text-brand ring-brand hover:bg-brand hover:text-black",
      },
      {
        variant: "outline",
        color: "grey",
        className: "text-grey ring-grey hover:bg-grey hover:text-black",
      },
      {
        variant: "outline",
        color: "dark",
        className: "text-dark ring-dark hover:bg-dark hover:text-white",
      },
    ],
  }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outline";
  color?: "brand" | "dark" | "grey";
}

export function Button({
  type = "button",
  variant = "solid",
  color = "dark",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={twMerge(buttonVariants({ variant, color, className }))}
      {...props}
    />
  );
}
