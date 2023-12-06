import type { Icon } from "@phosphor-icons/react";
import {
  Grains,
  Ruler,
  Coins,
  Globe,
  Download,
  CaretRight,
} from "@phosphor-icons/react";
import Link from "next/link";

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

export const YIELD_LOSS_ID = "yield_loss";
export const YIELD_LOSS_LAYER_ALL_CROPS_ID = `${YIELD_LOSS_ID}_all_crops`;
export const YIELD_LOSS_LAYER_CEREALS_ID = `${YIELD_LOSS_ID}_cereals`;
export const YIELD_LOSS_LAYER_LEGUMES_ID = `${YIELD_LOSS_ID}_legumes`;
export const YIELD_LOSS_LAYER_ROOTS_TUBERS_ID = `${YIELD_LOSS_ID}_roots_tubers`;
export const YIELD_LOSS_LAYER_COMMODITIES_ID = `${YIELD_LOSS_ID}_commodities`;

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
  rawTileUrl?: string;
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
    "https://gaia-tiles.superservice-international.com/soil_ph_bin_5/{z}/{x}/{y}.webp",
  rawTileUrl:
    "https://gaia-tiles.superservice-international.com/raw/soil_ph.tif",
  legend: {
    bins: [
      { value: "< 5.0", color: "rgb(253, 231, 37)" },
      { value: "5.0-5.5", color: "rgb(122, 209, 81)" },
      { value: "5.5-6.0", color: "rgb(34, 168, 132)" },
      { value: "6.0-6.5", color: "rgb(42, 120, 142)" },
      { value: "> 6.5", color: "rgb(65, 68, 135)" },
      // { value: "> 6.5", color: "rgb(68, 1, 84)" },
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
  rawTileUrl:
    "https://gaia-tiles.superservice-international.com/raw/soil_hp.tif",
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
  rawTileUrl:
    "https://gaia-tiles.superservice-international.com/raw/soil_ecec.tif",
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
      method for 23 crops (see{" "}
      <Link href="/methods/lime-requirements">methods</Link> for further
      information). Crops: maize, sorghum, wheat, barley, pearl and finger
      millet, bean, chickpea, lentil, cowpea, pigeonpea, soybean, groundnut,
      potato, sweet potato, cassava, coffee, sugarcane, cotton, cocoa, tea,
      tobacco.
    </p>
  ),
  tileUrl:
    "https://gaia-tiles.superservice-international.com/lime_all_bin/{z}/{x}/{y}.webp",
  rawTileUrl:
    "https://gaia-tiles.superservice-international.com/raw/lime_all.tif",
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
      method for cereal crops (see{" "}
      <Link href="/methods/lime-requirements">methods</Link> for further
      information). Cereals: maize, sorghum, wheat, barley, pearl and finger
      millet.
    </p>
  ),
  tileUrl:
    "https://gaia-tiles.superservice-international.com/lime_cereals_bin/{z}/{x}/{y}.webp",
  rawTileUrl:
    "https://gaia-tiles.superservice-international.com/raw/lime_cereals.tif",
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
      method for legume crops (see{" "}
      <Link href="/methods/lime-requirements">methods</Link> for further
      information). Legumes: bean, chickpea, lentil, cowpea, pigeonpea, soybean,
      groundnut.
    </p>
  ),
  tileUrl:
    "https://gaia-tiles.superservice-international.com/lime_legumes_bin/{z}/{x}/{y}.webp",
  rawTileUrl:
    "https://gaia-tiles.superservice-international.com/raw/lime_legumes.tif",
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
      method for root & tuber crops (see{" "}
      <Link href="/methods/lime-requirements">methods</Link> for further
      information). Roots & tubers: potato, sweet potato, cassava.
    </p>
  ),
  tileUrl:
    "https://gaia-tiles.superservice-international.com/lime_rtbs_bin/{z}/{x}/{y}.webp",
  rawTileUrl:
    "https://gaia-tiles.superservice-international.com/raw/lime_rtbs.tif",
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
      method for commodity crops (see{" "}
      <Link href="/methods/lime-requirements">methods</Link> for further
      information). Commodities: coffee, sugarcane, cotton, cocoa, tea, tobacco.
    </p>
  ),
  tileUrl:
    "https://gaia-tiles.superservice-international.com/lime_commodities_bin/{z}/{x}/{y}.webp",
  rawTileUrl:
    "https://gaia-tiles.superservice-international.com/raw/lime_commodities.tif",
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

const YIELD_LOSS_LAYER_LEGEND: LayerLegend = {
  bins: [
    { value: "No yield loss", color: "rgb(211, 211, 211)" },
    { value: "0-20", color: "rgb(253, 231, 37)" },
    { value: "20-40", color: "rgb(53, 183, 121)" },
    { value: "40-60", color: "rgb(49, 104, 142)" },
    { value: "60-80", color: "rgb(68, 1, 84)" },
  ],
};

const YIELD_LOSS_ALL_CROPS: Layer = {
  id: YIELD_LOSS_LAYER_ALL_CROPS_ID,
  label: "All Crops",
  info: (
    <p>
      Crop area weighted yield loss (% of yield in non-acidic soil) estimated
      with plateau-linear decay functions for 23 crops (see{" "}
      <Link href="/methods/crop-yield-response">methods</Link> for further
      information). Crops: maize, sorghum, wheat, barley, pearl and finger
      millet, bean, chickpea, lentil, cowpea, pigeonpea, soybean, groundnut,
      potato, sweet potato, cassava, coffee, sugarcane, cotton, cocoa, tea,
      tobacco.
    </p>
  ),
  tileUrl:
    "https://gaia-tiles.superservice-international.com/yield_loss_all_bin/{z}/{x}/{y}.webp",
  rawTileUrl:
    "https://gaia-tiles.superservice-international.com/raw/yield_loss_all.tif",
  legend: {
    title: "All Crops [%]",
    ...YIELD_LOSS_LAYER_LEGEND,
  },
};

const YIELD_LOSS_LAYER_CEREALS: Layer = {
  id: YIELD_LOSS_LAYER_CEREALS_ID,
  label: "Cereals",
  info: (
    <p>
      Crop area weighted yield loss (% of yield in non-acidic soil) estimated
      with plateau-linear decay functions for cereal crops (see{" "}
      <Link href="/methods/crop-yield-response">methods</Link> for further
      information). Cereals: maize, sorghum, wheat, barley, pearl and finger
      millet.
    </p>
  ),
  tileUrl:
    "https://gaia-tiles.superservice-international.com/yield_loss_cereals_bin/{z}/{x}/{y}.webp",
  rawTileUrl:
    "https://gaia-tiles.superservice-international.com/raw/yield_loss_cereals.tif",
  legend: {
    title: "Cereals [%]",
    ...YIELD_LOSS_LAYER_LEGEND,
  },
};

const YIELD_LOSS_LAYER_LEGUMES: Layer = {
  id: YIELD_LOSS_LAYER_LEGUMES_ID,
  label: "Legumes",
  info: (
    <p>
      Crop area weighted lyield loss (% of yield in non-acidic soil) estimated
      with plateau-linear decay functions for legume crops (see{" "}
      <Link href="/methods/crop-yield-response">methods</Link> for further
      information). Legumes: bean, chickpea, lentil, cowpea, pigeonpea, soybean,
      groundnut.
    </p>
  ),
  tileUrl:
    "https://gaia-tiles.superservice-international.com/yield_loss_legumes_bin/{z}/{x}/{y}.webp",
  rawTileUrl:
    "https://gaia-tiles.superservice-international.com/raw/yield_loss_legumes.tif",
  legend: {
    title: "Legumes [%]",
    ...YIELD_LOSS_LAYER_LEGEND,
  },
};

const YIELD_LOSS_LAYER_ROOTS_TUBERS: Layer = {
  id: YIELD_LOSS_LAYER_ROOTS_TUBERS_ID,
  label: "Roots & Tubers",
  info: (
    <p>
      Crop area weighted yield loss (% of yield in non-acidic soil) estimated
      with plateau-linear decay functions for root & tuber crops (see{" "}
      <Link href="/methods/crop-yield-response">methods</Link> for further
      information). Roots & tubers: potato, sweet potato, cassava.
    </p>
  ),
  tileUrl:
    "https://gaia-tiles.superservice-international.com/yield_loss_rtbs_bin/{z}/{x}/{y}.webp",
  rawTileUrl:
    "https://gaia-tiles.superservice-international.com/raw/yield_loss_rtbs.tif",
  legend: {
    title: "Roots & Tubers [%]",
    ...YIELD_LOSS_LAYER_LEGEND,
  },
};

const YIELD_LOSS_LAYER_COMMODITIES: Layer = {
  id: YIELD_LOSS_LAYER_COMMODITIES_ID,
  label: "Commodities",
  info: (
    <p>
      Crop area weighted yield loss (% of yield in non-acidic soil) estimated
      with plateau-linear decay functions for commodity crops (see{" "}
      <Link href="/methods/crop-yield-response">methods</Link> for further
      information). Commodities: coffee, sugarcane, cotton, cocoa, tea, tobacco.
    </p>
  ),
  tileUrl:
    "https://gaia-tiles.superservice-international.com/yield_loss_commodities_bin/{z}/{x}/{y}.webp",
  rawTileUrl:
    "https://gaia-tiles.superservice-international.com/raw/yield_loss_commodities.tif",
  legend: {
    title: "Commodities [%]",
    ...YIELD_LOSS_LAYER_LEGEND,
  },
};

const YIELD_LOSS_LAYERS = [
  YIELD_LOSS_ALL_CROPS,
  YIELD_LOSS_LAYER_CEREALS,
  YIELD_LOSS_LAYER_LEGUMES,
  YIELD_LOSS_LAYER_ROOTS_TUBERS,
  YIELD_LOSS_LAYER_COMMODITIES,
];

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
];

export const LAYERS = [...SOIL_LAYERS, ...LIME_LAYERS, ...YIELD_LOSS_LAYERS];

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
