import { Button } from "@/ui";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

interface NavProps {
  className?: string;
}

export function Nav({ className }: NavProps) {
  return (
    <nav className={twMerge("flex items-center gap-6", className)}>
      <NavLink href="#about-us">About us</NavLink>
      <NavLink href="#services">Services</NavLink>
      <NavLink href="#use-cases">Use Cases</NavLink>
      <NavLink href="#pricing">Pricing</NavLink>
      <NavLink href="#blog">Blog</NavLink>
      <Button variant="outline" color="dark" className="ml-2">
        Request a quote
      </Button>
    </nav>
  );
}

interface NavLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string | URL;
}

function NavLink({ className, ...props }: PropsWithChildren<NavLinkProps>) {
  return (
    <Link
      className={twMerge(
        "text-xl px-2 hover:bg-brand rounded-md transition-all",
        className
      )}
      {...props}
    />
  );
}
