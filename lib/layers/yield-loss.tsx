import Link from "next/link";
import { Layer, LayerLegend } from "@/lib/interfaces";

export const YIELD_LOSS_ID = "yield_loss";
export const YIELD_LOSS_LAYER_ALL_CROPS_ID = `${YIELD_LOSS_ID}_all_crops`;
export const YIELD_LOSS_LAYER_CEREALS_ID = `${YIELD_LOSS_ID}_cereals`;
export const YIELD_LOSS_LAYER_LEGUMES_ID = `${YIELD_LOSS_ID}_legumes`;
export const YIELD_LOSS_LAYER_ROOTS_TUBERS_ID = `${YIELD_LOSS_ID}_roots_tubers`;
export const YIELD_LOSS_LAYER_COMMODITIES_ID = `${YIELD_LOSS_ID}_commodities`;

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

export const YIELD_LOSS_LAYERS = [
  YIELD_LOSS_ALL_CROPS,
  YIELD_LOSS_LAYER_CEREALS,
  YIELD_LOSS_LAYER_LEGUMES,
  YIELD_LOSS_LAYER_ROOTS_TUBERS,
  YIELD_LOSS_LAYER_COMMODITIES,
];
