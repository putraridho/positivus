import { Button, Typography } from "@/ui";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface ContentProps {
  className?: string;
}

export function Content({ className }: ContentProps) {
  return (
    <div className={twMerge("flex flex-col lg:items-start w-full", className)}>
      <Typography as="h1" size="h1" weight="medium">
        Navigating the digital landscape for success
      </Typography>
      <div className="flex lg:hidden items-center justify-center mt-2.5">
        <Image
          src="/Illustration.png"
          alt="illustration"
          width={362}
          height={310}
          className="max-w-full"
        />
      </div>
      <Typography className="mt-5 lg:mt-9 lg:mr-8 lg:text-xl">
        Our digital marketing agency helps businesses grow and succeed online
        through a range of services including SEO, PPC, social media marketing,
        and content creation.
      </Typography>
      <Button className="mt-10 lg:mt-9">Book a consultation</Button>
    </div>
  );
}
