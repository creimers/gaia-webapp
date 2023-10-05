"use client";

import * as React from "react";
import { createPortal } from "react-dom";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/constants";

import { List, X } from "@phosphor-icons/react";
export default function NavMobile() {
  const [mounted, setMounted] = React.useState(false);
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  // refactor with ref
  const bodyRef = React.useRef<HTMLBodyElement>();

  React.useEffect(() => {
    bodyRef.current = window.document.getElementsByTagName("body")[0];
    setMounted(true);
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

  // if (!mounted) return null;

  return (
    <nav className="md:hidden flex items-center">
      <button
        onClick={toggleMobileNav}
        className="w-[75px] flex justify-center"
      >
        <List className="w-8 h-8" />
      </button>

      {mounted
        ? createPortal(
            <div
              className={cn(
                "fixed top-0 h-[100dvh] bg-white/90 backdrop-blur left-0 w-screen p-8 space-y-8",
                showMobileNav ? "z-[100]" : "hidden"
              )}
            >
              <button
                onClick={toggleMobileNav}
                className="absolute top-3 left-0 w-[75px] flex justify-center"
              >
                <X className="h-8 w-8" />
              </button>
              <ul className="flex flex-col space-y-4 text-2xl">
                {ROUTES.map((route) => {
                  const active = route.pathname === pathname;
                  return (
                    <li key={route.title}>
                      <Link
                        onClick={() => setTimeout(toggleMobileNav, 200)}
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
            </div>,
            document.body
          )
        : null}
    </nav>
  );
}
