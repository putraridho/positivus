import { Card, CardProps } from "@/components/Card";
import { SectionHeading } from "@/components/SectionHeading";
import { Container } from "@/ui";
import { twMerge } from "tailwind-merge";

const SERVICES: CardProps[] = [
  {
    heading: ["Search engine", "optimization"],
    color: "grey",
    href: "#",
    img: {
      src: "/tokyo-magnifier-web-search-with-elements 2.svg",
      alt: "tokyo-magnifier-web-search-with-elements 2",
      width: 210,
      height: 170,
    },
  },
  {
    heading: ["Pay-per-click", "advertising"],
    color: "brand",
    href: "#",
    img: {
      src: "/tokyo-selecting-a-value-in-the-browser-window 1.svg",
      alt: "tokyo-selecting-a-value-in-the-browser-window 1",
      width: 210,
      height: 148,
    },
  },
  {
    heading: ["Social Media", "Marketing"],
    color: "dark",
    href: "#",
    img: {
      src: "/tokyo-browser-window-with-emoticon-likes-and-stars-around 2.svg",
      alt: "tokyo-browser-window-with-emoticon-likes-and-stars-around 2",
      width: 210,
      height: 210,
    },
  },
  {
    heading: ["Email", "Marketing"],
    color: "grey",
    href: "#",
    img: {
      src: "/tokyo-sending-messages-from-one-place-to-another 1.svg",
      alt: "tokyo-sending-messages-from-one-place-to-another 1",
      width: 210,
      height: 194,
    },
  },
  {
    heading: ["Content", "Creation"],
    color: "brand",
    href: "#",
    img: {
      src: "/tokyo-many-browser-windows-with-different-information 1.svg",
      alt: "tokyo-many-browser-windows-with-different-information 1",
      width: 210,
      height: 196,
    },
  },
  {
    heading: ["Analytics and ", "Tracking"],
    color: "dark",
    href: "#",
    img: {
      src: "/tokyo-volumetric-analytics-of-different-types-in-web-browsers 2.svg",
      alt: "tokyo-volumetric-analytics-of-different-types-in-web-browsers 2",
      width: 210,
      height: 170,
    },
  },
];

interface LandingServicesProps {
  className?: string;
}

export function LandingServices({ className }: LandingServicesProps) {
  return (
    <Container className={twMerge("flex flex-col gap-10 lg:gap-20", className)}>
      <SectionHeading
        heading="Services"
        subheading="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:"
      />
      <div className="grid lg:grid-cols-2 gap-10">
        {SERVICES.map((service) => (
          <Card key={service.heading.join(" ")} {...service} />
        ))}
      </div>
    </Container>
  );
}
