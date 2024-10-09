"use client";

import { Container } from "@/ui";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface LandingPartnersProps {
  className?: string;
}

export function LandingPartners({ className }: LandingPartnersProps) {
  return (
    <Container className={twMerge("px-0 lg:px-5", className)}>
      <div className="hidden lg:block overflow-hidden whitespace-nowrap">
        <div className="inline-block w-max animate-partner-left">
          <PartnerImage
            src="/Company logo-0.png"
            alt="company logo"
            width={125}
            height={48}
          />
          <PartnerImage
            src="/Company logo-1.png"
            alt="company logo 1"
            width={127}
            height={48}
          />
          <PartnerImage
            src="/Company logo-2.png"
            alt="company logo 2"
            width={129}
            height={48}
          />
          <PartnerImage
            src="/Company logo-3.png"
            alt="company logo 3"
            width={147}
            height={48}
          />
          <PartnerImage
            src="/Company logo-4.png"
            alt="company logo 4"
            width={126}
            height={48}
          />
          <PartnerImage
            src="/Company logo-5.png"
            alt="company logo 5"
            width={111}
            height={48}
          />
        </div>
        <div className="inline-block w-max animate-partner-left">
          <PartnerImage
            src="/Company logo-0.png"
            alt="company logo"
            width={125}
            height={48}
          />
          <PartnerImage
            src="/Company logo-1.png"
            alt="company logo 1"
            width={127}
            height={48}
          />
          <PartnerImage
            src="/Company logo-2.png"
            alt="company logo 2"
            width={129}
            height={48}
          />
          <PartnerImage
            src="/Company logo-3.png"
            alt="company logo 3"
            width={147}
            height={48}
          />
          <PartnerImage
            src="/Company logo-4.png"
            alt="company logo 4"
            width={126}
            height={48}
          />
          <PartnerImage
            src="/Company logo-5.png"
            alt="company logo 5"
            width={111}
            height={48}
          />
        </div>
      </div>
      <div className="flex lg:hidden flex-col gap-5">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block w-max animate-partner-left">
            <PartnerImage
              src="/Company logo-0.png"
              alt="company logo"
              width={125}
              height={48}
            />
            <PartnerImage
              src="/Company logo-1.png"
              alt="company logo 1"
              width={127}
              height={48}
            />
            <PartnerImage
              src="/Company logo-2.png"
              alt="company logo 2"
              width={129}
              height={48}
            />
          </div>
          <div className="inline-block w-max animate-partner-left">
            <PartnerImage
              src="/Company logo-0.png"
              alt="company logo"
              width={125}
              height={48}
            />
            <PartnerImage
              src="/Company logo-1.png"
              alt="company logo 1"
              width={127}
              height={48}
            />
            <PartnerImage
              src="/Company logo-2.png"
              alt="company logo 2"
              width={129}
              height={48}
            />
          </div>
          <div className="inline-block w-max animate-partner-left">
            <PartnerImage
              src="/Company logo-0.png"
              alt="company logo"
              width={125}
              height={48}
            />
            <PartnerImage
              src="/Company logo-1.png"
              alt="company logo 1"
              width={127}
              height={48}
            />
            <PartnerImage
              src="/Company logo-2.png"
              alt="company logo 2"
              width={129}
              height={48}
            />
          </div>
        </div>
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block w-max animate-partner-right">
            <PartnerImage
              src="/Company logo-4.png"
              alt="company logo 4"
              width={126}
              height={48}
            />
            <PartnerImage
              src="/Company logo-3.png"
              alt="company logo 3"
              width={147}
              height={48}
            />
            <PartnerImage
              src="/Company logo-5.png"
              alt="company logo 5"
              width={111}
              height={48}
            />
          </div>
          <div className="inline-block w-max animate-partner-right">
            <PartnerImage
              src="/Company logo-4.png"
              alt="company logo 4"
              width={126}
              height={48}
            />
            <PartnerImage
              src="/Company logo-3.png"
              alt="company logo 3"
              width={147}
              height={48}
            />
            <PartnerImage
              src="/Company logo-5.png"
              alt="company logo 5"
              width={111}
              height={48}
            />
          </div>
          <div className="inline-block w-max animate-partner-right">
            <PartnerImage
              src="/Company logo-4.png"
              alt="company logo 4"
              width={126}
              height={48}
            />
            <PartnerImage
              src="/Company logo-3.png"
              alt="company logo 3"
              width={147}
              height={48}
            />
            <PartnerImage
              src="/Company logo-5.png"
              alt="company logo 5"
              width={111}
              height={48}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

interface PartnerImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

function PartnerImage({ src, alt, width, height }: PartnerImageProps) {
  return (
    <Image
      className="inline-block grayscale hover:grayscale-0 h-12 w-auto px-4 lg:px-12 transition-all hover:scale-125 duration-500"
      {...{ src, alt, width, height }}
    />
  );
}
