"use client";

import * as React from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import type { Icon } from "@phosphor-icons/react";
import { Grains, Ruler, Coins, Globe } from "@phosphor-icons/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const SOIL_ID = "soil";
const SOIL_LAYERS: LayerGroup = {
  name: "Soil Layers",
  id: SOIL_ID,
  icon: Globe,
  layers: [
    {
      name: "pH in Water",
      id: `${SOIL_ID}_ph_in_water`,
    },
  ],
};

const LIME_ID = "lime";
const LIME_LAYERS: LayerGroup = {
  name: "Lime Requirements",
  id: LIME_ID,
  icon: Ruler,
  layers: [
    { name: "Weighted Average", id: `${LIME_ID}_weighted_average` },
    { name: "Cereals", id: `${LIME_ID}_cereals` },
    { name: "Legumes", id: `${LIME_ID}_legumes` },
    { name: "Roots & Tubers", id: `${LIME_ID}_roots_tubers` },
    { name: "Other", id: `${LIME_ID}_other` },
  ],
};

const LAYER_GROUPS: LayerGroup[] = [SOIL_LAYERS, LIME_LAYERS];

export default function LayerAccordion() {
  const [layerGroupId, setLayerGroupId] = React.useState<string | undefined>();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const layerId = searchParams.get("layer") || SOIL_LAYERS.layers[0].id;

  function setLayerId(layerId: string) {
    const params = new URLSearchParams(searchParams);
    params.set("layer", layerId);
    router.replace(pathname + "?" + params.toString());
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
    <div>
      <Accordion
        type="single"
        value={layerGroupId}
        onValueChange={(value) => setLayerGroupId(value)}
      >
        {LAYER_GROUPS.map((group) => (
          <AccordionItem value={group.id} key={group.id}>
            <AccordionTrigger>{group.name}</AccordionTrigger>
            <AccordionContent className="px-8 py-3 space-y-4">
              <div className="space-y-4">
                {group.layers.map((layer) => (
                  <div key={layer.id}>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        value={layer.id}
                        checked={layerId === layer.id}
                        onChange={() => setLayerId(layer.id)}
                        className="shrink-0 h-5 w-5"
                      />
                      <div>
                        <span className="pl-2 block text-lg">{layer.name}</span>
                        {/* <span className="pl-2 text-xs text-gray-500 block">
                          {layer.description}
                        </span> */}
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
