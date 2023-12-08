import Link from "next/link";
import { Layer, LayerLegend } from "@/lib/interfaces";

export const PROFITABILITY_ID = "profitability";
export const PROFITABILITY_LAYER_ALL_CROPS_ID = `${PROFITABILITY_ID}_all_crops`;
export const PROFITABILITY_LAYER_CEREALS_ID = `${PROFITABILITY_ID}_cereals`;
export const PROFITABILITY_LAYER_LEGUMES_ID = `${PROFITABILITY_ID}_legumes`;
export const PROFITABILITY_LAYER_ROOTS_TUBERS_ID = `${PROFITABILITY_ID}_roots_tubers`;
export const PROFITABILITY_LAYER_COMMODITIES_ID = `${PROFITABILITY_ID}_commodities`;

const PROFITABILITY_LAYER_LEGEND: LayerLegend = {
  bins: [
    { value: "-Inf - -250", color: "rgb(253, 231, 37)" },
    { value: "-250 - 0", color: "rgb(94, 201, 98)" },
    { value: "0 - 250", color: "rgb(33, 145, 140)" },
    { value: "250 - 500", color: "rgb(59, 82, 139)" },
    { value: "500 - Inf", color: "rgb(68, 1, 84)" },
  ],
};

export const PROFITABILITY_LAYER_ALL_CROPS: Layer = {
  id: PROFITABILITY_LAYER_ALL_CROPS_ID,
  label: "All crops",
  info: (
    <p>
      Crop area weighted profitability of liming (US$/ha) for 23 crops (see{" "}
      <Link href="/methods/profitability">methods</Link> for further
      information). Crops: maize, sorghum, wheat, barley, pearl and finger
      millet, bean, chickpea, lentil, cowpea, pigeonpea, soybean, groundnut,
      potato, sweet potato, cassava, coffee, sugarcane, cotton, cocoa, tea,
      tobacco.
    </p>
  ),
  tileUrl:
    "https://gaia-tiles.superservice-international.com/profit_all_bin/{z}/{x}/{y}.webp",
  rawTileUrl:
    "https://gaia-tiles.superservice-international.com/raw/profit_all.tif",
  legend: {
    title: "All Crops [US$/ha]",
    ...PROFITABILITY_LAYER_LEGEND,
  },
};

export const PROFITABILITY_LAYER_CEREALS: Layer = {
  id: PROFITABILITY_LAYER_CEREALS_ID,
  label: "Cereals",
  info: (
    <p>
      Crop area weighted profitability of liming (US$/ha) for cereals (see{" "}
      <Link href="/methods/profitability">methods</Link> for further
      information). Cereals: maize, sorghum, wheat, barley, pearl and finger
      millet.
    </p>
  ),
  tileUrl:
    "https://gaia-tiles.superservice-international.com/profit_cereals_bin/{z}/{x}/{y}.webp",
  rawTileUrl:
    "https://gaia-tiles.superservice-international.com/raw/profit_cereals.tif",
  legend: {
    title: "Cereals [US$/ha]",
    ...PROFITABILITY_LAYER_LEGEND,
  },
};

export const PROFITABILITY_LAYER_LEGUMES: Layer = {
  id: PROFITABILITY_LAYER_LEGUMES_ID,
  label: "Legumes",
  info: (
    <p>
      Crop area weighted profitability of liming (US$/ha) for legumes (see{" "}
      <Link href="/methods/profitability">methods</Link> for further
      information). Legumes: bean, chickpea, lentil, cowpea, pigeonpea, soybean,
      groundnut.
    </p>
  ),
  tileUrl:
    "https://gaia-tiles.superservice-international.com/profit_legumes_bin/{z}/{x}/{y}.webp",
  rawTileUrl:
    "https://gaia-tiles.superservice-international.com/raw/profit_legumes.tif",
  legend: {
    title: "Legumes [US$/ha]",
    ...PROFITABILITY_LAYER_LEGEND,
  },
};

export const PROFITABILITY_LAYER_ROOTS_TUBERS: Layer = {
  id: PROFITABILITY_LAYER_ROOTS_TUBERS_ID,
  label: "Roots & tubers",
  info: (
    <p>
      Crop area weighted profitability of liming (US$/ha) for roots & tubers
      (see <Link href="/methods/profitability">methods</Link> for further
      information). Roots & tubers: potato, sweet potato, cassava.
    </p>
  ),
  tileUrl:
    "https://gaia-tiles.superservice-international.com/profit_rtbs_bin/{z}/{x}/{y}.webp",
  rawTileUrl:
    "https://gaia-tiles.superservice-international.com/raw/profit_rtbs.tif",
  legend: {
    title: "Roots & tubers [US$/ha]",
    ...PROFITABILITY_LAYER_LEGEND,
  },
};

export const PROFITABILITY_LAYER_COMMODITIES: Layer = {
  id: PROFITABILITY_LAYER_COMMODITIES_ID,
  label: "Commodities",
  info: (
    <p>
      Crop area weighted profitability of liming (US$/ha) for commodities (see{" "}
      <Link href="/methods/profitability">methods</Link> for further
      information). Commodities: coffee, sugarcane, cotton, cocoa, tea, tobacco.
    </p>
  ),
  tileUrl:
    "https://gaia-tiles.superservice-international.com/profit_commodities_bin/{z}/{x}/{y}.webp",
  rawTileUrl:
    "https://gaia-tiles.superservice-international.com/raw/profit_commodities.tif",
  legend: {
    title: "Commodities [US$/ha]",
    ...PROFITABILITY_LAYER_LEGEND,
  },
};

export const PROFITABILITY_LAYERS = [
  PROFITABILITY_LAYER_ALL_CROPS,
  PROFITABILITY_LAYER_CEREALS,
  PROFITABILITY_LAYER_LEGUMES,
  PROFITABILITY_LAYER_ROOTS_TUBERS,
  PROFITABILITY_LAYER_COMMODITIES,
];
