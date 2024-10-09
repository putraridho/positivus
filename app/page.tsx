import { LandingBanner, LandingPartners, LandingServices } from "@/components";

export default function Home() {
  return (
    <>
      <LandingBanner className="mt-10 lg:mt-[70px]" />
      <LandingPartners className="mt-[60px] lg:mt-[70px]" />
      <LandingServices className="mt-[60px] lg:mt-[140px]" />
    </>
  );
}
