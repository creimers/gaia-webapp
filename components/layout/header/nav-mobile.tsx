"use client";

import * as React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/constants";

import { List, X } from "@phosphor-icons/react";
export default function NavMobile() {
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  // refactor with ref
  const bodyRef = React.useRef<HTMLBodyElement>();

  React.useEffect(() => {
    bodyRef.current = window.document.getElementsByTagName("body")[0];
  }, []);

  function toggleMobileNav() {
    const open = showMobileNav;
    if (bodyRef.current) {
      if (open) {
        bodyRef.current.style.overflow = "auto";
        setShowMobileNav(false);
      } else {
        bodyRef.current.style.overflow = "hidden";
        setShowMobileNav(true);
      }
    }
  }

  const pathname = usePathname();

  return (
    <nav className="md:hidden flex items-center">
      <button onClick={toggleMobileNav}>
        <List className="w-8 h-8" />
      </button>
      <div
        className={cn(
          "fixed top-0 h-[100dvh] bg-white left-0 w-screen p-8 space-y-8",
          showMobileNav ? "z-40" : "hidden"
        )}
      >
        <button onClick={toggleMobileNav} className="absolute top-3 left-4">
          <X className="h-8 w-8" />
        </button>
        <ul className="flex flex-col space-y-4 text-2xl">
          {ROUTES.map((route) => {
            const active = route.pathname === pathname;
            return (
              <li key={route.title}>
                <Link
                  onClick={toggleMobileNav}
                  href={route.pathname}
                  className={cn(
                    active
                      ? "bg-lime-600 text-white rounded"
                      : "hover:underline",
                    "font-semibold px-3 py-2"
                  )}
                >
                  {route.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
