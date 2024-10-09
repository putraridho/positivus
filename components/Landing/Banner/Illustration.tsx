import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface IllustrationProps {
  className?: string;
}

export function Illustration({ className }: IllustrationProps) {
  return (
    <div
      className={twMerge("items-center justify-center px-8 lg:px-0", className)}
    >
      <Image
        src="/Illustration.png"
        alt="illustration"
        width={601}
        height={515}
        className="max-w-full h-auto"
      />
    </div>
  );
}
