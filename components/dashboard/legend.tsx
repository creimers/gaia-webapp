import { useQueryState, parseAsString } from "next-usequerystate";

import * as LAYER from "@/lib/layers";

type LayerLegend = {
  min: string;
  max: string;
};

const LAYER_TILE_URLS: { [key: string]: LayerLegend } = {
  [LAYER.SOIL_LAYER_PH]: {
    min: "pH 4",
    max: "ph 11",
  },
  [LAYER.SOIL_LAYER_EXCHANGEABLE_ACIDITY]: {
    min: "0%",
    max: "89%",
  },
  [LAYER.SOIL_LAYER_CATION_EXCHANGE_CAPACITY]: {
    min: "0 cmol+/kg",
    max: "340 cmol+/kg",
  },
};

export default function Legend() {
  const [layerId] = useQueryState(
    "layer",
    parseAsString.withDefault(LAYER.SOIL_LAYER_PH)
  );
  const legend = LAYER_TILE_URLS[layerId] as LayerLegend | undefined;

  return (
    <div className="absolute bottom-[50px] md:bottom-[30px] right-14 rounded-lg bg-gray-100 p-3 ring-2 ring-gray-400/50 flex">
      <div className="flex flex-col space-y-2 items-center">
        <div>{legend?.max}</div>
        <div className="viridis h-12 w-6"></div>
        <div>{legend?.min}</div>
      </div>
    </div>
  );
}
