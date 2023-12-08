import type { Icon } from "@phosphor-icons/react";
import { Grains, Ruler, Coins, Globe } from "@phosphor-icons/react";
import { Layer } from "@/lib/interfaces";

import { SOIL_ID, SOIL_LAYERS } from "./soil";
import { LIME_ID, LIME_LAYERS } from "./lime";
import { YIELD_LOSS_ID, YIELD_LOSS_LAYERS } from "./yield-loss";
import { PROFITABILITY_ID, PROFITABILITY_LAYERS } from "./profitability";

type LayerGroup = {
  name: string;
  id: string;
  icon: Icon;
  layers: Layer[];
};

export const LAYER_GROUPS: LayerGroup[] = [
  {
    name: "Soil Property Layers",
    id: SOIL_ID,
    icon: Globe,
    layers: SOIL_LAYERS,
  },
  {
    name: "Lime Requirement Layers",
    id: LIME_ID,
    icon: Ruler,
    layers: LIME_LAYERS,
  },
  {
    name: "Yield Loss Layers",
    id: YIELD_LOSS_ID,
    icon: Grains,
    layers: YIELD_LOSS_LAYERS,
  },
  {
    name: "Profitability Layers",
    id: PROFITABILITY_ID,
    icon: Coins,
    layers: PROFITABILITY_LAYERS,
  },
];

export const LAYERS = [
  ...SOIL_LAYERS,
  ...LIME_LAYERS,
  ...YIELD_LOSS_LAYERS,
  ...PROFITABILITY_LAYERS,
];

function generateLayerTileUrlMapping() {
  const mapping: { [key: string]: string } = {};

  LAYERS.forEach((layer) => {
    mapping[layer.id] = layer.tileUrl;
  });

  return mapping;
}

function generateLayerMapping() {
  const mapping: { [key: string]: Layer } = {};

  LAYERS.forEach((layer) => {
    mapping[layer.id] = layer;
  });

  return mapping;
}

export const LAYER_TILE_URLS = generateLayerTileUrlMapping();
export const LAYER_MAPPING = generateLayerMapping();
