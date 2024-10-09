import { Typography } from "@/ui";
import { cva } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

const cardVariants = cva(
  "relative flex flex-col lg:flex-row items-start lg:items-stretch justify-start gap-7 border border-solid border-dark rounded-[45px] p-[50px] shadow-solid",
  {
    variants: {
      color: {
        brand: "bg-brand",
        dark: "bg-dark",
        grey: "bg-grey",
      },
    },
  }
);

export interface CardProps {
  heading: string[];
  className?: string;
  color?: "brand" | "dark" | "grey";
  href: string;
  img: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

export function Card({
  heading,
  className,
  color = "brand",
  href,
  img,
}: CardProps) {
  return (
    <div className={twMerge(cardVariants({ color, className }))}>
      <div className="flex flex-col gap-[93px]">
        <h3 className="flex flex-col items-start justify-start text-black gap-0">
          {heading.map((h) => (
            <Typography
              key={h}
              as="span"
              size="h3"
              weight="medium"
              className={twMerge(
                "px-2 rounded-[7px]",
                color === "grey" ? "bg-brand" : "bg-white"
              )}
            >
              {h}
            </Typography>
          ))}
        </h3>
        <Link
          href={href}
          className="absolute lg:static bottom-[50px] left-[50px] flex items-center gap-4"
        >
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="20.5"
              cy="20.5"
              r="20.5"
              fill={color === "dark" ? "white" : "black"}
            />
            <path
              d="M11.25 24.701C10.5326 25.1152 10.2867 26.0326 10.701 26.75C11.1152 27.4674 12.0326 27.7133 12.75 27.299L11.25 24.701ZM30.7694 16.3882C30.9838 15.588 30.5089 14.7655 29.7087 14.5511L16.6687 11.0571C15.8685 10.8426 15.046 11.3175 14.8316 12.1177C14.6172 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0607L24.3776 28.6518C24.1631 29.452 24.638 30.2745 25.4382 30.4889C26.2384 30.7033 27.0609 30.2284 27.2753 29.4282L30.7694 16.3882ZM12.75 27.299L30.0705 17.299L28.5705 14.701L11.25 24.701L12.75 27.299Z"
              fill={color === "dark" ? "black" : "var(--brand)"}
            />
          </svg>
          <Typography
            className={twMerge(
              "hidden lg:block lg:text-xl",
              color === "dark" ? "text-white" : "btext-lack"
            )}
          >
            Learn more
          </Typography>
        </Link>
      </div>
      <div className="flex items-center justify-center ml-auto">
        <Image
          className="w-[165px] lg:w-[210px] h-auto"
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
        />
      </div>
    </div>
  );
}
