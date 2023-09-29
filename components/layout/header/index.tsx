import Logo from "./logo";
import NavDesktop from "./nav-desktop";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-20 shadow-md bg-white/90 backdrop-blur-md flex items-center justify-between px-8">
      <div className="w-64">
        <Logo />
      </div>
      <NavDesktop />
    </header>
  );
}
