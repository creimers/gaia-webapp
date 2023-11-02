"use client";

import * as React from "react";

import type { Icon } from "@phosphor-icons/react";
import {
  Grains,
  Ruler,
  Coins,
  Globe,
  Download,
  CaretRight,
} from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import * as LAYER from "@/lib/layers";

import DownloadDialogue from "../download-dialogue";
import { DEFAULT_LIME_PRICE } from "@/lib/constants";
import { parseAsString, useQueryState } from "next-usequerystate";
import Layer from "./layer";

type Layer = {
  name: string;
  id: string;
};

type LayerGroup = {
  name: string;
  id: string;
  icon: Icon;
  layers: Layer[];
};

const SOIL_LAYERS: LayerGroup = {
  name: "Soil Layers",
  id: LAYER.SOIL_ID,
  icon: Globe,
  layers: [
    {
      name: "pH in Water",
      id: LAYER.SOIL_LAYER_PH,
    },
    { name: "Exchangable Acidity", id: LAYER.SOIL_LAYER_EXCHANGEABLE_ACIDITY },
    {
      name: "Cation Exchange Capacity",
      id: LAYER.SOIL_LAYER_CATION_EXCHANGE_CAPACITY,
    },
  ],
};

const LIME_LAYERS: LayerGroup = {
  name: "Lime Requirements",
  id: LAYER.LIME_ID,
  icon: Ruler,
  layers: [
    { name: "Weighted Average", id: LAYER.LIME_LAYER_WEIGHTED_AVERAGE },
    { name: "Cereals", id: LAYER.LIME_LAYER_CEREALS },
    { name: "Legumes", id: LAYER.LIME_LAYER_LEGUMES },
    { name: "Roots & Tubers", id: LAYER.LIME_LAYER_ROOTS_TUBERS },
    { name: "Other", id: LAYER.LIME_LAYER_OTHER },
  ],
};

const YIELD_RESPONSE_LAYERS: LayerGroup = {
  name: "Yield Response",
  id: LAYER.YIELD_RESPONSE_ID,
  icon: Grains,
  layers: [
    {
      name: "Weighted Average",
      id: LAYER.YIELD_RESPONSE_LAYER_WEIGHTED_AVERAGE,
    },
    { name: "Cereals", id: LAYER.YIELD_RESPONSE_LAYER_CEREALS },
    { name: "Legumes", id: LAYER.YIELD_RESPONSE_LAYER_LEGUMES },
    { name: "Roots & Tubers", id: LAYER.YIELD_RESPONSE_LAYER_ROOTS_TUBERS },
    { name: "Other", id: LAYER.YIELD_RESPONSE_LAYER_OTHER },
  ],
};

const PROFITABILITY_LAYERS: LayerGroup = {
  name: "Profitability",
  id: LAYER.PROFITABILITY_ID,
  icon: Coins,
  layers: [
    {
      name: "Weighted Average",
      id: LAYER.PROFITABILITY_LAYER_WEIGHTED_AVERAGE,
    },
    { name: "Cereals", id: LAYER.PROFITABILITY_LAYER_CEREALS },
    { name: "Legumes", id: LAYER.PROFITABILITY_LAYER_LEGUMES },
    { name: "Roots & Tubers", id: LAYER.PROFITABILITY_LAYER_ROOTS_TUBERS },
    { name: "Other", id: LAYER.PROFITABILITY_LAYER_OTHER },
  ],
};

const LAYER_GROUPS: LayerGroup[] = [
  SOIL_LAYERS,
  LIME_LAYERS,
  YIELD_RESPONSE_LAYERS,
  PROFITABILITY_LAYERS,
];

const LAYER_GROUP_LAYER_ID_MAPPING = LAYER_GROUPS.reduce((acc, group) => {
  acc[group.id] = group.layers.map((layer) => layer.id);
  return acc;
}, {} as Record<string, string[]>);

export default function LayerAccordion() {
  const [downloadDialogueOpen, setDownloadDialogueOpen] = React.useState(false);
  const [layerGroupId, setLayerGroupId] = React.useState<string | undefined>();

  const [layerId, setLayerId] = useQueryState(
    "layer",
    parseAsString.withDefault(SOIL_LAYERS.layers[0].id)
  );

  const [limePrice, setLimePrice] = useQueryState(
    "lime_price",
    parseAsString.withDefault(DEFAULT_LIME_PRICE)
  );

  function updateLimePrice(e: React.ChangeEvent<HTMLInputElement>) {
    const price = e.target.value;
    setLimePrice(price);
  }

  React.useEffect(() => {
    for (const group of LAYER_GROUPS) {
      if (group.layers.find((layer) => layer.id === layerId)) {
        setLayerGroupId(group.id);
        return;
      }
    }
  }, []);

  return (
    <>
      <DownloadDialogue
        open={downloadDialogueOpen}
        onClose={() => setDownloadDialogueOpen(false)}
      />
      <div className="relative divide-y">
        {LAYER_GROUPS.map((group) => {
          const open = layerGroupId === group.id;
          const layers = LAYER_GROUP_LAYER_ID_MAPPING[group.id];
          return (
            <React.Fragment key={group.id}>
              <div
                className="sticky top-0 bg-green-600 hover:bg-green-600/80 text-white flex justify-between items-center px-4 py-2 cursor-pointer"
                onClick={() => {
                  if (open) {
                    setLayerGroupId(undefined);
                  } else {
                    setLayerGroupId(group.id);
                  }
                }}
              >
                <div className="flex items-center">
                  <CaretRight
                    className={cn(
                      "h-5 w-5 shrink-0 transition-transform duration-200 mr-3",
                      open && "rotate-90"
                    )}
                  />
                  <div>{group.name}</div>
                </div>
                <div>
                  <group.icon className="w-7 h-7" weight="light" />
                </div>
              </div>
              <div className={cn("space-y-6 p-4", open ? "block" : "hidden")}>
                <div className="space-y-4">
                  {group.layers.map((layer) => (
                    <Layer
                      layer={layer}
                      key={layer.id}
                      activeLayerId={layerId}
                      handleSetLayerId={setLayerId}
                    />
                  ))}
                </div>
                {group.id === LAYER.PROFITABILITY_ID && (
                  <div className="space-y-2">
                    <div className="text-lg font-semibold">
                      Lime Price: ${limePrice}
                    </div>
                    <div className="flex space-x-4">
                      <div>$ 0</div>
                      <input
                        type="range"
                        step="20"
                        min={0}
                        max={100}
                        className="w-full flex-1"
                        value={limePrice}
                        onChange={updateLimePrice}
                      />
                      <div>$ 100</div>
                    </div>
                  </div>
                )}
                <div className="flex justify-center">
                  <Button
                    variant={"secondary"}
                    disabled={!layers.includes(layerId)}
                    size={"lg"}
                    onClick={() => setDownloadDialogueOpen(true)}
                  >
                    <Download className="w-6 h-6 mr-2" />
                    Download Dataset
                  </Button>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
