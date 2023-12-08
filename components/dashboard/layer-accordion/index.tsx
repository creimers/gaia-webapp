"use client";

import * as React from "react";

import { Download, CaretRight } from "@phosphor-icons/react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import { SOIL_LAYER_PH_ID } from "@/lib/layers/soil";
import { PROFITABILITY_ID } from "@/lib/layers/profitability";
import { LAYER_GROUPS } from "@/lib/layers";

import DownloadDialogue from "../download-dialogue";
import { DEFAULT_LIME_PRICE } from "@/lib/constants";
import { parseAsString, useQueryState } from "next-usequerystate";
import Layer from "./layer";

const LAYER_GROUP_LAYER_ID_MAPPING = LAYER_GROUPS.reduce((acc, group) => {
  acc[group.id] = group.layers.map((layer) => layer.id);
  return acc;
}, {} as Record<string, string[]>);

export default function LayerAccordion() {
  const [downloadDialogueOpen, setDownloadDialogueOpen] = React.useState(false);
  const [layerGroupId, setLayerGroupId] = React.useState<string | undefined>();

  const [layerId, setLayerId] = useQueryState(
    "layer",
    parseAsString.withDefault(SOIL_LAYER_PH_ID)
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
                {group.id === PROFITABILITY_ID && (
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
