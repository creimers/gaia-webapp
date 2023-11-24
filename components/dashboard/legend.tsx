import { useQueryState, parseAsString } from "next-usequerystate";

import * as LAYER from "@/lib/layers";

type LegendBin = {
  color: string;
  value: string;
};

type LayerLegend = {
  title: string;
  bins: LegendBin[];
};

// <4.5 253 231 37
// 4.5-5.0 122 209 81
// 5.0-5.5 34 168 132
// 5.5-6.0 42 120 142
// 6.0-6.5 65 68 135
// >6.5 68 1 84

const LAYER_TILE_URLS: { [key: string]: LayerLegend } = {
  [LAYER.SOIL_LAYER_PH]: {
    title: "pH in water",
    bins: [
      { value: "< 4.5", color: "rgb(253, 231, 37)" },
      { value: "4.5-5.0", color: "rgb(122, 209, 81)" },
      { value: "5.0-5.5", color: "rgb(34, 168, 132)" },
      { value: "5.5-6.0", color: "rgb(42, 120, 142)" },
      { value: "6.0-6.5", color: "rgb(65, 68, 135)" },
      { value: "> 6.5", color: "rgb(68, 1, 84)" },
    ],
  },

  // [LAYER.SOIL_LAYER_EXCHANGEABLE_ACIDITY]: {
  //   min: "0%",
  //   max: "89%",
  // },
  // [LAYER.SOIL_LAYER_CATION_EXCHANGE_CAPACITY]: {
  //   min: "0 cmol+/kg",
  //   max: "340 cmol+/kg",
  // },
};

export default function Legend() {
  const [layerId] = useQueryState(
    "layer",
    parseAsString.withDefault(LAYER.SOIL_LAYER_PH)
  );
  const legend = LAYER_TILE_URLS[layerId] as LayerLegend | undefined;

  return (
    <div className="absolute bottom-[50px] md:bottom-[30px] right-14 rounded-lg bg-gray-100 p-3 ring-2 ring-gray-400/50">
      <div className="mb-2 font-medium text-center">{legend?.title}</div>
      <div className="flex flex-col space-y-2">
        {legend?.bins.map((bin) => (
          <div
            key={bin.value}
            className="flex justify-between w-full space-x-2"
          >
            <div className="w-4 h-4" style={{ background: bin.color }}></div>
            <div>{bin.value}</div>
          </div>
        ))}
        {/* <div>{legend?.max}</div>
        <div className="viridis h-12 w-6"></div>
        <div>{legend?.min}</div> */}
      </div>
    </div>
  );
}
