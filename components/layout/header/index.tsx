import Logo from "./logo";
import NavDesktop from "./nav-desktop";
import NavMobile from "./nav-mobile";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-[50px] md:h-[80px] shadow-md bg-white/90 backdrop-blur-md flex items-center justify-between pr-4 md:px-8 z-50">
      <NavMobile />
      <div className="flex items-center space-x-8">
        <div className="w-64">
          <Logo />
        </div>
        <span className="hidden lg:block text-xs">
          Guiding acid soil management <br /> investments in Africa
        </span>
      </div>
      <NavDesktop />
    </header>
  );
}
