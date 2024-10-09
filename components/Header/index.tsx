import { Container } from "@/ui";
import Image from "next/image";
import { BurgerMenuButton } from "./BurgerMenuButton";
import { Nav } from "./NavLink";

export function Header() {
  return (
    <header>
      <Container className="flex items-center justify-between">
        <Image
          src="/logo.svg"
          alt="logo"
          width={220}
          height={56}
          className="w-36 lg:w-auto"
        />
        <Nav className="hidden lg:flex" />
        <BurgerMenuButton className="block lg:hidden" />
      </Container>
    </header>
  );
}
