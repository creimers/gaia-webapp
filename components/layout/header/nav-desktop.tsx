"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { ROUTES } from "@/lib/constants";

export default function NavDesktop() {
  const pathname = usePathname();
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-4">
        {ROUTES.map((route) => {
          const active = route.pathname === pathname;
          return (
            <li key={route.title}>
              <Link
                href={route.pathname}
                className={cn(
                  active ? "bg-lime-600 text-white" : "hover:underline",
                  "font-semibold px-3 py-2"
                )}
              >
                {route.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
