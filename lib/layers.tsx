import type { Icon } from "@phosphor-icons/react";
import {
  Grains,
  Ruler,
  Coins,
  Globe,
  Download,
  CaretRight,
} from "@phosphor-icons/react";

export const SOIL_ID = "soil";
export const SOIL_LAYER_PH_ID = `${SOIL_ID}_ph_in_water`;
export const SOIL_LAYER_EXCHANGEABLE_ACIDITY_ID = `${SOIL_ID}_exchangable_acidity`;
export const SOIL_LAYER_CATION_EXCHANGE_CAPACITY_ID = `${SOIL_ID}_cation_exchange_capacity`;

export const LIME_ID = "lime";
export const LIME_LAYER_ALL_CROPS_ID = `${LIME_ID}_all_crops`;
export const LIME_LAYER_CEREALS_ID = `${LIME_ID}_cereals`;
export const LIME_LAYER_LEGUMES_ID = `${LIME_ID}_legumes`;
export const LIME_LAYER_ROOTS_TUBERS_ID = `${LIME_ID}_roots_tubers`;
export const LIME_LAYER_COMMODITIES_ID = `${LIME_ID}_commodities`;

export const YIELD_RESPONSE_ID = "yield_response";
export const YIELD_RESPONSE_LAYER_ALL_CROPS_ID = `${YIELD_RESPONSE_ID}_all_crops`;
export const YIELD_RESPONSE_LAYER_CEREALS_ID = `${YIELD_RESPONSE_ID}_cereals`;
export const YIELD_RESPONSE_LAYER_LEGUMES_ID = `${YIELD_RESPONSE_ID}_legumes`;
export const YIELD_RESPONSE_LAYER_ROOTS_TUBERS_ID = `${YIELD_RESPONSE_ID}_roots_tubers`;
export const YIELD_RESPONSE_LAYER_COMMODITIES_ID = `${YIELD_RESPONSE_ID}_commodities`;

export const PROFITABILITY_ID = "profitability";
export const PROFITABILITY_LAYER_ALL_CROPS_ID = `${PROFITABILITY_ID}_all_crops`;
export const PROFITABILITY_LAYER_CEREALS_ID = `${PROFITABILITY_ID}_cereals`;
export const PROFITABILITY_LAYER_LEGUMES_ID = `${PROFITABILITY_ID}_legumes`;
export const PROFITABILITY_LAYER_ROOTS_TUBERS_ID = `${PROFITABILITY_ID}_roots_tubers`;
export const PROFITABILITY_LAYER_COMMODITIES_ID = `${PROFITABILITY_ID}_commodities`;

type LegendBin = {
  color: string;
  value: string;
};

type LayerLegend = {
  title?: string | undefined;
  bins: LegendBin[];
};

export type Layer = {
  id: string;
  label: string;
  info: React.ReactNode;
  tileUrl: string;
  legend: LayerLegend;
};

export const SOIL_LAYER_PH: Layer = {
  id: SOIL_LAYER_PH_ID,
  label: "pH in Water",
  info: (
    <>
      <p>
        Soil pH in water for areas with more than 10% probability of cropland.
      </p>
      <p>
        Soil layers obtained from{" "}
        <a
          href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0169748"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hengl et al. (2017)
        </a>{" "}
        and cropland mask from{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://geosurvey.qed.ai/about/"
        >
          Geosurvey
        </a>
        . presence in sub-Saharan Africa.
      </p>
    </>
  ),
  tileUrl:
    "https://gaia-tiles.superservice-international.com/soil_ph_bin/{z}/{x}/{y}.webp",
  legend: {
    bins: [
      { value: "< 4.5", color: "rgb(253, 231, 37)" },
      { value: "4.5-5.0", color: "rgb(122, 209, 81)" },
      { value: "5.0-5.5", color: "rgb(34, 168, 132)" },
      { value: "5.5-6.0", color: "rgb(42, 120, 142)" },
      { value: "6.0-6.5", color: "rgb(65, 68, 135)" },
      { value: "> 6.5", color: "rgb(68, 1, 84)" },
    ],
  },
};

export const SOIL_LAYER_HP: Layer = {
  id: SOIL_LAYER_EXCHANGEABLE_ACIDITY_ID,
  label: "Exchangeable Acidity",
  info: (
    <>
      <p>
        Soil (exch.) acidity saturation (%) for areas with more than 10%
        probability of cropland presence in sub-Saharan Africa. Acidity
        saturation was computed as the ratio between exch. acidity and effective
        cation exchange capacity (x100).{" "}
      </p>
      <p>
        Soil layers obtained from{" "}
        <a
          href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0169748"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hengl et al. (2017)
        </a>{" "}
        and cropland mask from{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://geosurvey.qed.ai/about/"
        >
          Geosurvey
        </a>
        .
      </p>
    </>
  ),
  tileUrl:
    "https://gaia-tiles.superservice-international.com/soil_hp_bin/{z}/{x}/{y}.webp",
  legend: {
    bins: [
      { value: "< 10", color: "rgb(253, 231, 37)" },
      { value: "10-20", color: "rgb(122, 209, 81)" },
      { value: "20-30", color: "rgb(34, 168, 132)" },
      { value: "30-40", color: "rgb(42, 120, 142)" },
      { value: "40-50", color: "rgb(65, 68, 135)" },
      { value: "> 50", color: "rgb(68, 1, 84)" },
    ],
  },
};

export const SOIL_LAYER_CATION_EXCHANGE_CAPACITY: Layer = {
  id: SOIL_LAYER_CATION_EXCHANGE_CAPACITY_ID,
  label: "Cation Exchange Capacity",
  info: (
    <>
      <p>
        Soil effective cation exchange capacity (ECEC, cmol+/kg) for areas with
        more than 10% probability of cropland presence in sub-Saharan Africa.
        ECEC was computed as the sum of exch. bases (Ca2+, Mg2+, Na+, K+) and
        exch. acidity (Al3+, H+).{" "}
      </p>
      <p>
        Soil layers obtained from{" "}
        <a
          href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0169748"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hengl et al. (2017)
        </a>{" "}
        and cropland mask from{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://geosurvey.qed.ai/about/"
        >
          Geosurvey
        </a>
        .
      </p>
    </>
  ),
  tileUrl:
    "https://gaia-tiles.superservice-international.com/soil_ecec_bin/{z}/{x}/{y}.webp",
  legend: {
    bins: [
      { value: "< 5", color: "rgb(253, 231, 37)" },
      { value: "5-10", color: "rgb(122, 209, 81)" },
      { value: "10-15", color: "rgb(34, 168, 132)" },
      { value: "15-20", color: "rgb(42, 120, 142)" },
      { value: "20-25", color: "rgb(65, 68, 135)" },
      { value: "> 25", color: "rgb(68, 1, 84)" },
    ],
  },
};

const SOIL_LAYERS = [
  SOIL_LAYER_PH,
  SOIL_LAYER_HP,
  SOIL_LAYER_CATION_EXCHANGE_CAPACITY,
];

const LIME_LAYER_LEGEND: LayerLegend = {
  bins: [
    { value: "< 0.5", color: "rgb(253, 231, 37)" },
    { value: "0.5-1.5", color: "rgb(122, 209, 81)" },
    { value: "1.5-2.5", color: "rgb(34, 168, 132)" },
    { value: "2.5-3.5", color: "rgb(42, 120, 142)" },
    { value: "3.5-4.5", color: "rgb(65, 68, 135)" },
    { value: "> 4.5", color: "rgb(68, 1, 84)" },
  ],
};

const LIME_LAYER_ALL_CROPS: Layer = {
  id: LIME_LAYER_ALL_CROPS_ID,
  label: "All Crops",
  info: (
    <p>
      Crop area weighted lime rate (t CaCO3/ha) estimated with the{" "}
      <a
        href="https://doi.org/10.1016/j.geoderma.2023.116421"
        target="_blank"
        rel="noopener noreferrer"
      >
        Aramburu-Merlos et al. (2023)
      </a>{" "}
      method for 23 crops (see methods for further information). Crops: maize,
      sorghum, wheat, barley, pearl and finger millet, bean, chickpea, lentil,
      cowpea, pigeonpea, soybean, groundnut, potato, sweet potato, cassava,
      coffee, sugarcane, cotton, cocoa, tea, tobacco.
    </p>
  ),
  tileUrl:
    "https://gaia-tiles.superservice-international.com/lime_all_bin/{z}/{x}/{y}.webp",
  legend: {
    title: "All Crops [t/ha]",
    ...LIME_LAYER_LEGEND,
  },
};

const LIME_LAYER_CEREALS: Layer = {
  id: LIME_LAYER_CEREALS_ID,
  label: "Cereals",
  info: (
    <p>
      Crop area weighted lime rate (t CaCO3/ha) estimated with the{" "}
      <a
        href="https://doi.org/10.1016/j.geoderma.2023.116421"
        target="_blank"
        rel="noopener noreferrer"
      >
        Aramburu-Merlos et al. (2023)
      </a>{" "}
      method for cereal crops (see methods for further information). Cereals:
      maize, sorghum, wheat, barley, pearl and finger millet.
    </p>
  ),
  tileUrl:
    "https://gaia-tiles.superservice-international.com/lime_cereals_bin/{z}/{x}/{y}.webp",
  legend: {
    title: "Cereals [t/ha]",
    ...LIME_LAYER_LEGEND,
  },
};

const LIME_LAYER_LEGUMES: Layer = {
  id: LIME_LAYER_LEGUMES_ID,
  label: "Legumes",
  info: (
    <p>
      Crop area weighted lime rate (t CaCO3/ha) estimated with the{" "}
      <a
        href="https://doi.org/10.1016/j.geoderma.2023.116421"
        target="_blank"
        rel="noopener noreferrer"
      >
        Aramburu-Merlos et al. (2023)
      </a>{" "}
      method for legume crops (see methods for further information). Legumes:
      bean, chickpea, lentil, cowpea, pigeonpea, soybean, groundnut.
    </p>
  ),
  tileUrl:
    "https://gaia-tiles.superservice-international.com/lime_legumes_bin/{z}/{x}/{y}.webp",
  legend: {
    title: "Legumes [t/ha]",
    ...LIME_LAYER_LEGEND,
  },
};

const LIME_LAYER_ROOTS_TUBERS: Layer = {
  id: LIME_LAYER_ROOTS_TUBERS_ID,
  label: "Roots & Tubers",
  info: (
    <p>
      Crop area weighted lime rate (t CaCO3/ha) estimated with the{" "}
      <a
        href="https://doi.org/10.1016/j.geoderma.2023.116421"
        target="_blank"
        rel="noopener noreferrer"
      >
        Aramburu-Merlos et al. (2023)
      </a>{" "}
      method for root & tuber crops (see methods for further information). Roots
      & tubers: potato, sweet potato, cassava.
    </p>
  ),
  tileUrl:
    "https://gaia-tiles.superservice-international.com/lime_rtbs_bin/{z}/{x}/{y}.webp",
  legend: {
    title: "Roots & Tubers [t/ha]",
    ...LIME_LAYER_LEGEND,
  },
};

const LIME_LAYER_COMMODITIES: Layer = {
  id: LIME_LAYER_COMMODITIES_ID,
  label: "Commodities",
  info: (
    <p>
      Crop area weighted lime rate (t CaCO3/ha) estimated with the{" "}
      <a
        href="https://doi.org/10.1016/j.geoderma.2023.116421"
        target="_blank"
        rel="noopener noreferrer"
      >
        Aramburu-Merlos et al. (2023)
      </a>{" "}
      method for commodity crops (see methods for further information).
      Commodities: coffee, sugarcane, cotton, cocoa, tea, tobacco.
    </p>
  ),
  tileUrl:
    "https://gaia-tiles.superservice-international.com/lime_commodities_bin/{z}/{x}/{y}.webp",
  legend: {
    title: "Commodities [t/ha]",
    ...LIME_LAYER_LEGEND,
  },
};

const LIME_LAYERS = [
  LIME_LAYER_ALL_CROPS,
  LIME_LAYER_CEREALS,
  LIME_LAYER_LEGUMES,
  LIME_LAYER_ROOTS_TUBERS,
  LIME_LAYER_COMMODITIES,
];

type LayerGroup = {
  name: string;
  id: string;
  icon: Icon;
  layers: Layer[];
};

export const LAYER_GROUPS: LayerGroup[] = [
  {
    name: "Soil Layers",
    id: SOIL_ID,
    icon: Globe,
    layers: SOIL_LAYERS,
  },
  {
    name: "Lime Layers",
    id: LIME_ID,
    icon: Ruler,
    layers: LIME_LAYERS,
  },
];

export const LAYERS = [...SOIL_LAYERS, ...LIME_LAYERS];

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
