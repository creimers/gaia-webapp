import { useQueryState, parseAsString } from "next-usequerystate";

import { SOIL_LAYER_PH_ID } from "@/lib/layers/soil";
import { LAYER_MAPPING } from "@/lib/layers";

export default function Legend() {
  const [layerId] = useQueryState(
    "layer",
    parseAsString.withDefault(SOIL_LAYER_PH_ID)
  );
  const layer = LAYER_MAPPING[layerId];
  const legend = LAYER_MAPPING[layerId].legend;
  const title = legend?.title || layer.label;

  return (
    <div className="absolute bottom-[50px] md:bottom-[30px] right-14 rounded-lg bg-gray-100 p-3 ring-2 ring-gray-400/50">
      <div className="mb-2 font-medium text-center">{title}</div>
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
      </div>
    </div>
  );
}
