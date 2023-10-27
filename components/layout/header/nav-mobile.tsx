"use client";

import * as React from "react";

import { List } from "@phosphor-icons/react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/constants";

import { Sheet, SheetContent } from "@/components/ui/sheet";

export default function NavMobile() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <>
      <button onClick={() => setOpen(true)} className="block md:hidden ml-3">
        <List className="w-6 h-6 text-slate-800" />
      </button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left">
          <ul className="flex flex-col space-y-6 text-xl pt-4">
            {ROUTES.map((route) => {
              const active = route.pathname === pathname;
              return (
                <li key={route.title}>
                  <Link
                    onClick={() => setOpen(false)}
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
        </SheetContent>
      </Sheet>
    </>
  );
}
