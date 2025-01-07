import { Layer } from "@/lib/interfaces";
import { TILE_BASE_URL } from "../constants";

export const SOIL_ID = "soil";
export const SOIL_LAYER_PH_ID = `${SOIL_ID}_ph_in_water`;
export const SOIL_LAYER_EXCHANGEABLE_ACIDITY_ID = `${SOIL_ID}_exchangable_acidity`;
export const SOIL_LAYER_CATION_EXCHANGE_CAPACITY_ID = `${SOIL_ID}_cation_exchange_capacity`;

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
  tileUrl: `${TILE_BASE_URL}/soil_ph/{z}/{x}/{y}.webp`,
  rawTileUrl: `${TILE_BASE_URL}/raw/soil_ph.tif`,
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
  label: "Acidity saturation",
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
  tileUrl: `${TILE_BASE_URL}/soil_hp/{z}/{x}/{y}.webp`,
  rawTileUrl: `${TILE_BASE_URL}/raw/soil_hp_sat.tif`,
  legend: {
    title: "Acidity saturation [% ECEC]",
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
  label: "Buffering capacity",
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
  tileUrl: `${TILE_BASE_URL}/soil_ecec/{z}/{x}/{y}.webp`,
  rawTileUrl: `${TILE_BASE_URL}/raw/soil_ecec.tif`,
  legend: {
    title: "Buffering capacity [cmolc/kg]",
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

export const SOIL_LAYERS = [
  SOIL_LAYER_PH,
  SOIL_LAYER_HP,
  SOIL_LAYER_CATION_EXCHANGE_CAPACITY,
];
