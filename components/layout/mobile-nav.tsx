"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

// main tag

export default function MobileNav() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  const mobileNavOpen = searchParams.get("mobile_nav_open") === "true";

  function hideMobileNav() {
    const params = new URLSearchParams(searchParams);
    if (mobileNavOpen) {
      params.delete("mobile_nav_open");
    } else params.set("mobile_nav_open", "true");
    router.replace(pathName + "?" + params.toString(), { scroll: false });
  }
  return (
    <div
      className={cn(
        "fixed inset-0 bg-blue-500 text-white p-8 flex flex-col justify-center items-center space-y-8",
        mobileNavOpen ? "z-40" : "hidden"
      )}
    >
      <div>mobile nav is open</div>
      <button onClick={hideMobileNav}>close</button>
    </div>
  );
}
