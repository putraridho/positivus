import { Content } from "./Content";
import { Illustration } from "./Illustration";
import { Container } from "@/ui";

interface LandingBannerProps {
  className?: string;
}

export function LandingBanner({ className }: LandingBannerProps) {
  return (
    <div className={className}>
      <Container className="flex flex-col lg:flex-row items-stretch justify-between gap-2.5 w-full">
        <Content className="lg:max-w-[531px]" />
        <Illustration className="hidden lg:flex" />
      </Container>
    </div>
  );
}
