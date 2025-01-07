"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";

import { PUBLICATION_TYPES } from "@/lib/constants";

export default function Filter() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const publicationType = searchParams.get("type");

  function handleClick(type: string) {
    const params = new URLSearchParams(searchParams);
    if (publicationType === type) {
      params.delete("type");
    } else {
      params.set("type", type);
    }
    router.replace("/publications?" + params.toString());
  }

  return (
    <div className="not-prose space-y-2 mb-4">
      <span className="text-sm">Filter by publication type</span>
      <div className="flex space-x-4">
        {PUBLICATION_TYPES.map((type) => {
          const active = publicationType === type;
          return (
            <span
              onClick={() => handleClick(type)}
              key={type}
              className={cn(
                "rounded-md px-2 py-1 text-xs sm:text-sm md:text-base cursor-pointer",
                active ? "bg-lime-600 text-white" : "bg-gray-100 text-black"
              )}
            >
              {type}
            </span>
          );
        })}
      </div>
    </div>
  );
}
