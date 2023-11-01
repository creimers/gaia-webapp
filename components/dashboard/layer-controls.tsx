"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { CaretUp, SlidersHorizontal } from "@phosphor-icons/react";
import { parseAsString, useQueryState, parseAsFloat } from "next-usequerystate";

export default function LayerControls() {
  const [open, setOpen] = React.useState(false);

  const [layerOpacity, setLayerOpacity] = useQueryState(
    "layer_opacity",
    parseAsFloat.withDefault(1)
  );
  const [baseLayer, setBaseLayer] = useQueryState(
    "base_layer",
    parseAsString.withDefault("streets")
  );

  function updateLayerOpacity(e: React.ChangeEvent<HTMLInputElement>) {
    const opacity = parseFloat(e.target.value);
    setLayerOpacity(opacity);
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
                onClick={() => setBaseLayer("streets")}
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
                onClick={() => setBaseLayer("satellite")}
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
