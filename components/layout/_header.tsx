"use client";
import * as React from "react";

import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  // refactor with ref
  const bodyRef = React.useRef<HTMLBodyElement>();

  React.useEffect(() => {
    bodyRef.current = window.document.getElementsByTagName("body")[0];
  }, []);

  function toggleMobileNav() {
    const open = mobileNavOpen;
    if (bodyRef.current) {
      if (open) {
        bodyRef.current.style.overflow = "auto";
        setMobileNavOpen(false);
      } else {
        bodyRef.current.style.overflow = "hidden";
        setMobileNavOpen(true);
      }
    }
  }

  return (
    <>
      <div className="h-16 bg-yellow-500 fixed top-0 left-0 w-screen z-50">
        <button onClick={toggleMobileNav}>
          {mobileNavOpen ? "hide" : "show"} mobile nav
        </button>
        <div
          className={cn(
            "fixed inset-0 bg-blue-500 text-white p-8 flex flex-col justify-center items-center space-y-8",
            mobileNavOpen ? "z-40" : "hidden"
          )}
        >
          <div>mobile nav is open</div>
          <button onClick={toggleMobileNav}>close</button>
        </div>
      </div>
    </>
  );
}
