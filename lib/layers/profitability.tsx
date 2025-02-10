import Link from "next/link";
import { Layer, LayerLegend } from "@/lib/interfaces";
import { TILE_BASE_URL } from "../constants";

export const PROFITABILITY_ID = "profit";
export const PROFITABILITY_LAYER_ALL_CROPS_ID = `${PROFITABILITY_ID}_all`;
export const PROFITABILITY_LAYER_CEREALS_ID = `${PROFITABILITY_ID}_cereals`;
export const PROFITABILITY_LAYER_LEGUMES_ID = `${PROFITABILITY_ID}_legumes`;
export const PROFITABILITY_LAYER_ROOTS_TUBERS_ID = `${PROFITABILITY_ID}_rtbs`;
export const PROFITABILITY_LAYER_COMMODITIES_ID = `${PROFITABILITY_ID}_other`;

const PROFITABILITY_LAYER_LEGEND: LayerLegend = {
  bins: [
    {
      value: "-Inf - -250",
      color: "rgb(253, 231, 37)",
      min: -100000,
      max: -250,
    },
    { value: "-250 - 0", color: "rgb(94, 201, 98)", min: -250, max: 0 },
    { value: "0 - 250", color: "rgb(33, 145, 140)", min: 0, max: 250 },
    { value: "250 - 500", color: "rgb(59, 82, 139)", min: 250, max: 500 },
    { value: "500 - Inf", color: "rgb(68, 1, 84)", min: 500, max: 100000 },
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
  tileUrl: `${TILE_BASE_URL}/profit_all/{z}/{x}/{y}.webp`,
  rawTileUrl: `${TILE_BASE_URL}/raw/profit/profit_all.tif`,
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
  tileUrl: `${TILE_BASE_URL}/profit_cereals/{z}/{x}/{y}.webp`,
  rawTileUrl: `${TILE_BASE_URL}/raw/profit/profit_cereals.tif`,
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
  tileUrl: `${TILE_BASE_URL}/profit_legumes/{z}/{x}/{y}.webp`,
  rawTileUrl: `${TILE_BASE_URL}/raw/profit/profit_legumes.tif`,
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
  tileUrl: `${TILE_BASE_URL}/profit_rtbs/{z}/{x}/{y}.webp`,
  rawTileUrl: `${TILE_BASE_URL}/raw/profit/profit_rtbs.tif`,
  legend: {
    title: "Roots & tubers [US$/ha]",
    ...PROFITABILITY_LAYER_LEGEND,
  },
};

export const PROFITABILITY_LAYER_COMMODITIES: Layer = {
  id: PROFITABILITY_LAYER_COMMODITIES_ID,
  label: "Non-food crops",
  info: (
    <p>
      Crop area weighted profitability of liming (US$/ha) for non-food crops
      (see <Link href="/methods/profitability">methods</Link> for further
      information). Non-food crops: coffee, sugarcane, cotton, cocoa, tea,
      tobacco.
    </p>
  ),
  tileUrl: `${TILE_BASE_URL}/profit_other/{z}/{x}/{y}.webp`,
  rawTileUrl: `${TILE_BASE_URL}/raw/profit/profit_other.tif`,
  legend: {
    title: "Non-food crops [US$/ha]",
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
