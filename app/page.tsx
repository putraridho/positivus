import { LandingBanner, LandingPartners } from "@/components";

export default function Home() {
  return (
    <>
      <LandingBanner className="mt-10 lg:mt-[70px]" />
      <LandingPartners className="mt-[60px] lg:mt-[70px]" />
    </>
  );
}
