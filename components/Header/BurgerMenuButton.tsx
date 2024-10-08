import React, { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface BurgerMenuButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export function BurgerMenuButton({
  type = "button",
  active,
  className,
  ...props
}: BurgerMenuButtonProps) {
  return (
    <button
      type={type}
      className={twMerge("relative w-6 h-4", className)}
      {...props}
    >
      <span
        className={twMerge(
          "absolute top-0 left-1/2 -translate-x-1/2 translate-y-0 rotate-0 w-full h-0.5 bg-black rounded transition-all",
          active ? "-rotate-45 top-1/2 -translate-y-1/2" : ""
        )}
      />
      <span
        className={twMerge(
          "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-black rounded opacity-100 transition-opacity",
          active ? "opacity-0" : ""
        )}
      />
      <span
        className={twMerge(
          "absolute top-full left-1/2 -translate-x-1/2 -translate-y-0.5 w-full h-0.5 bg-black rounded transition-all",
          active ? "rotate-45 top-1/2 -translate-y-1/2" : ""
        )}
      />
    </button>
  );
}
