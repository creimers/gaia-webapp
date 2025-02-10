import { LAYER_MAPPING } from "@/lib/layers";
import { useMapStore } from "@/lib/map-store";

export default function Legend() {
  const { activeLayer } = useMapStore();
  const layer = LAYER_MAPPING[activeLayer];
  const legend = LAYER_MAPPING[activeLayer]?.legend || null;
  const title = legend?.title || layer?.label || null;

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
