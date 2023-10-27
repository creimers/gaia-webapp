"use client";

import * as React from "react";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
// import {
//   BASE_LAYER,
//   BASE_LAYER_SATELLITE,
//   BASE_LAYER_STREETS,
// } from "@/lib/constants/url-params";
import { CaretUp, SlidersHorizontal } from "@phosphor-icons/react";

export default function LayerControls() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const layerOpacity = searchParams.get("layer_opacity") || "1";
  const baseLayer = searchParams.get("base_layer") || "streets";

  function updateLayerOpacity(e: React.ChangeEvent<HTMLInputElement>) {
    const params = new URLSearchParams(searchParams);
    params.set("layer_opacity", e.target.value);
    router.replace(pathname + "?" + params.toString());
  }

  function updateBaseLayer(layerName: string) {
    const params = new URLSearchParams(searchParams);
    params.set("base_layer", layerName);
    router.replace(pathname + "?" + params.toString());
  }

  return (
    <div
      className={cn(
        "bg-gray-200 z-40 w-full  transition-transform relative",
        open ? "h-80 flex-shrink-0" : "h-20"
      )}
    >
      <div className="absolute inset-0 rotate-180 shadow-md"></div>
      <div className="absolute inset-0 z-40 ">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between bg-gray-300 p-6"
        >
          <span className="flex space-x-4 items-center">
            <SlidersHorizontal className="w-5 h-5" />
            <span>Layer Settings</span>
          </span>
          <CaretUp
            className={cn("w-5 h-5 transition-transform", open && "rotate-180")}
          />
        </button>
        <div className="p-6 space-y-4">
          <div>
            <div className="font-semibold text-lg mb-3">Base Layer</div>
            <div className="flex space-x-4">
              <button
                className={cn(
                  "flex-1 bg-gray-400 rounded-xl px-4 py-2  flex justify-center items-center text-slate-800 text-xl bg-[url('/streets.png')] bg-cover bg-center",
                  baseLayer === "streets" &&
                    "ring-4 ring-offset-0 ring-indigo-500"
                )}
                onClick={() => updateBaseLayer("streets")}
              >
                <span className="backdrop-blur px-2 py-1 rounded-lg">
                  Streets
                </span>
              </button>
              <button
                className={cn(
                  "flex-1 bg-gray-400 rounded-xl px-4 py-3 flex justify-center items-center text-white text-xl bg-[url('/satellite.png')] bg-cover bg-center",
                  baseLayer === "satellite" &&
                    "ring-4 ring-offset-0 ring-indigo-500"
                )}
                onClick={() => updateBaseLayer("satellite")}
              >
                <span className="backdrop-blur px-2 py-1 rounded-lg">
                  Satellite
                </span>
              </button>
            </div>
          </div>
          <div>
            <div className="font-semibold text-lg mb-3">Layer Opacity</div>
            <div className="flex space-x-2 items-center">
              <div className="rounded-full bg-gray-200 border border-black w-7 h-7"></div>
              <input
                type="range"
                step="0.1"
                min={0}
                max={1}
                className="w-full flex-1"
                value={layerOpacity}
                onChange={updateLayerOpacity}
              />
              <div className="rounded-full bg-black border w-7 h-7"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
