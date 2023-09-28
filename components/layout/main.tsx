"use client";

import { useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";

// main tag

export default function Main({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const mobileNavOpen = searchParams.get("mobile_nav_open") === "true";
  return (
    <main
      className={cn(
        // mobileNavOpen
        //   ? "h-screen max-h-screen overflow-hidden"
        //   : "overflow-auto",
        "bg-red-500 h-[200dvh]"
      )}
    >
      {children}
    </main>
  );
}
