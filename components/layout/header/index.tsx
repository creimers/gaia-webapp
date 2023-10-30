import Image from "next/image";

import Logo from "./logo-cgiar";
import NavDesktop from "./nav-desktop";
import NavMobile from "./nav-mobile";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-[50px] md:h-[70px] shadow-md bg-white/90 backdrop-blur-md flex items-center justify-between pr-4 md:px-8 z-50">
      <NavMobile />
      <div className="flex items-center space-x-8">
        <div className="w-10">
          <a
            href="https://www.cgiar.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Logo />
          </a>
        </div>
        <div className="w-14">
          <a
            href="https://scalingagronomy.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logos/eia.png"
              height={263}
              width={320}
              alt="EiA logo"
            />
          </a>
        </div>
        <span className="hidden lg:block text-lg">Acid soils dashboard</span>
      </div>
      <NavDesktop />
    </header>
  );
}
