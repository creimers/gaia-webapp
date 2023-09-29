"use client";

import * as React from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

import resolveConfig from "tailwindcss/resolveConfig";
import { Config, ScreensConfig } from "tailwindcss/types/config";
import tailwindConfig from "@/tailwind.config";

import { Stack, ArrowLeft } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

const fullConfig = resolveConfig(tailwindConfig as unknown as Config);

type ding = { xs: string; sm: string; md: string; lg: string; xl: string };
const breakpoints = (fullConfig?.theme?.screens || {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
}) as ding;

type BreakpointKey = keyof ScreensConfig;

export default function Sidebar({ children }: { children?: React.ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const open = searchParams.get("sidebar") === "true";

  function setOpen(open: boolean) {
    const params = new URLSearchParams(searchParams);
    params.set("sidebar", open.toString());
    router.replace(pathname + "?" + params.toString());
  }

  React.useEffect(() => {
    const width = window.innerWidth;
    const open = searchParams.get("sidebar");
    breakpoints.xs;
    if (width > parseInt(breakpoints.sm) && open !== "false") {
      setOpen(true);
    }
  }, []);

  return (
    <div
      className={cn(
        "absolute left-0 top-[50px] md:top-[80px] shadow-md z-40 transition-transform duration-300 text-black",
        `w-screen md:w-[400px] h-[calc(100dvh-50px)] md:h-[calc(100dvh-80px)] flex flex-col`,
        open ? `translate-x-0` : `-translate-x-full md:translate-x-[-400px]`
      )}
    >
      <div
        className={cn(
          "absolute top-0 right-0 shadow-md",
          `w-[75px] h-[75px] translate-x-[75px]`
        )}
      ></div>
      <header
        className={cn(
          "w-[calc(100vw+75px)] md:w-[calc(400px+75px)] h-[75px] translate-x-[0px] relative backdrop-blur-md shrink-0 bg-white/90",
          open && "border-b"
        )}
      >
        <div
          onClick={() => setOpen(true)}
          className={cn(
            "h-[75px] w-[75px] absolute top-0 right-0 transition-transform duration-300 flex justify-center items-center z-20",
            open
              ? `-translate-x-[calc(2*75px)] md:-translate-x-[75px]`
              : `translate-x-[0px] cursor-pointer`
          )}
        >
          <Stack className="h-8 w-8" />
        </div>
        <button
          className={cn(
            "h-[75px] w-[75px] absolute top-0 right-[75px] md:right-0 flex justify-center items-center group bg-gray-200/70 z-10 transition-opacity",
            open ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setOpen(false)}
        >
          <ArrowLeft className="h-8 w-8" />
        </button>
        <div
          className={cn(
            "absolute top-0 left-0 h-[75px] flex items-center w-full md:w-[400px] md:justify-center justify-end pr-[calc(3*75px+10px)] md:pr-0 transition-opacity duration-500 delay-200",
            open ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="text-xl font-semibold">Layers</div>
        </div>
      </header>
      <main
        id="sidebar-left-body"
        className="bg-white/90 backdrop-blur-md overflow-y-scroll flex-1 overflow-x-hidden"
      >
        {children}
      </main>
    </div>
  );
}
