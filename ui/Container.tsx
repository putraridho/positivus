import { HTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export function Container({
  className,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={twMerge("max-w-7xl px-5 mx-auto", className)} {...props} />
  );
}
