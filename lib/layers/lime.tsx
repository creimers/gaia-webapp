import Link from "next/link";
import { Layer, LayerLegend } from "@/lib/interfaces";
import { TILE_BASE_URL } from "../constants";

export const LIME_ID = "lime";
export const LIME_LAYER_ALL_CROPS_ID = `${LIME_ID}_all_crops`;
export const LIME_LAYER_CEREALS_ID = `${LIME_ID}_cereals`;
export const LIME_LAYER_LEGUMES_ID = `${LIME_ID}_legumes`;
export const LIME_LAYER_ROOTS_TUBERS_ID = `${LIME_ID}_roots_tubers`;
export const LIME_LAYER_COMMODITIES_ID = `${LIME_ID}_commodities`;

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
  tileUrl: `${TILE_BASE_URL}/lime_all/{z}/{x}/{y}.webp`,
  rawTileUrl: `${TILE_BASE_URL}/raw/lime_all.tif`,
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
  tileUrl: `${TILE_BASE_URL}/lime_cereals/{z}/{x}/{y}.webp`,
  rawTileUrl: `${TILE_BASE_URL}/raw/lime_cereals.tif`,
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
  tileUrl: `${TILE_BASE_URL}/lime_legumes/{z}/{x}/{y}.webp`,
  rawTileUrl: `${TILE_BASE_URL}/raw/lime_legumes.tif`,
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
  tileUrl: `${TILE_BASE_URL}/lime_rtbs/{z}/{x}/{y}.webp`,
  rawTileUrl: `${TILE_BASE_URL}/raw/lime_rtbs.tif`,
  legend: {
    title: "Roots & Tubers [t/ha]",
    ...LIME_LAYER_LEGEND,
  },
};

const LIME_LAYER_COMMODITIES: Layer = {
  id: LIME_LAYER_COMMODITIES_ID,
  label: "Non-food crops",
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
      information). Non-food crops: coffee, sugarcane, cotton, cocoa, tea,
      tobacco.
    </p>
  ),
  tileUrl: `${TILE_BASE_URL}/lime_other/{z}/{x}/{y}.webp`,
  rawTileUrl: `${TILE_BASE_URL}/raw/lime_other.tif`,
  legend: {
    title: "Non-food crops [t/ha]",
    ...LIME_LAYER_LEGEND,
  },
};

export const LIME_LAYERS = [
  LIME_LAYER_ALL_CROPS,
  LIME_LAYER_CEREALS,
  LIME_LAYER_LEGUMES,
  LIME_LAYER_ROOTS_TUBERS,
  LIME_LAYER_COMMODITIES,
];
