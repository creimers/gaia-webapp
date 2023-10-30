"use client";

import * as React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { useClickAway } from "react-use";

import { ROUTES } from "@/lib/constants";
import { CaretDown } from "@phosphor-icons/react";

export default function NavDesktop() {
  const pathname = usePathname();
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-2 items-center">
        {ROUTES.map((route) => {
          const active =
            route.pathname == "/"
              ? pathname === route.pathname
              : pathname.startsWith(route.pathname);
          if (route.children) {
            return (
              <DropdownMenu
                title={route.title}
                isActive={active}
                key={route.title}
                subroutes={route.children}
              />
            );
          } else {
            return (
              <li
                key={route.title}
                className={cn(
                  active ? "bg-lime-600 text-white rounded" : "hover:underline",
                  "font-semibold px-3 py-2"
                )}
              >
                <Link href={route.pathname}>{route.title}</Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
}

type DropdownMenuProps = {
  title: string;
  isActive: boolean;
  subroutes: { title: string; pathname: string }[];
};

const DropdownMenu = ({ title, isActive, subroutes }: DropdownMenuProps) => {
  const ref = React.useRef<HTMLLIElement>(null);
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  useClickAway(ref, () => {
    setOpen(false);
  });

  return (
    <li
      key={title}
      className={cn(
        isActive ? "bg-lime-600 text-white rounded" : "hover:underline",
        "font-semibold px-3 py-2 inline-flex items-center cursor-pointer relative"
      )}
      onClick={() => setOpen(!open)}
      ref={ref}
    >
      <CaretDown className="w-4 h-4 mr-1" />
      <span>{title}</span>
      {open && (
        <ul
          className={cn(
            "absolute left-1/2 -translate-x-1/2 top-12 p-4 shadow-lg bg-white text-black whitespace-nowrap space-y-2 rounded-md border",
            open ? "block" : "hidden"
          )}
        >
          {subroutes.map((child) => {
            const active = child.pathname === pathname;
            return (
              <li
                key={child.pathname}
                className={cn(
                  active ? "bg-lime-600 text-white rounded" : "hover:underline",
                  "font-semibold px-3 py-2"
                )}
              >
                <Link href={child.pathname} onClick={() => setOpen(false)}>
                  {child.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};
