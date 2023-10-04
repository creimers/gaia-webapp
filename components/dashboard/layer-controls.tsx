"use client";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function LayerControls() {
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

  function updateBaseLayer(layerName) {
    const params = new URLSearchParams(searchParams);
    params.set("base_layer", layerName);
    router.replace(pathname + "?" + params.toString());
  }

  return (
    <div className="bg-gray-100 p-8 rounded-t-2xl space-y-4 mt-8">
      <div>
        <div className="font-semibold text-lg mb-3">Base Layer</div>
        <div className="flex space-x-6">
          <button
            className={cn(
              "flex-1 bg-gray-400 rounded-xl p-6 flex justify-center items-center text-black text-2xl bg-[url('/streets.png')] bg-cover bg-center",
              baseLayer === "streets" && "ring-4 ring-offset-0 ring-indigo-500"
            )}
            onClick={() => updateBaseLayer("streets")}
          >
            Streets
          </button>
          <button
            className={cn(
              "flex-1 bg-gray-400 rounded-xl p-6 flex justify-center items-center text-white text-2xl bg-[url('/satellite.png')] bg-cover bg-center",
              baseLayer === "satellite" &&
                "ring-4 ring-offset-0 ring-indigo-500"
            )}
            onClick={() => updateBaseLayer("satellite")}
          >
            <span className="drop-shadow-lg">Satellite</span>
          </button>
        </div>
      </div>
      <div>
        <div className="font-semibold text-lg mb-3">Layer Opacity</div>
        <div className="flex space-x-2 items-center">
          <div className="rounded-full bg-gray-200 border w-7 h-7"></div>
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
  );
}
