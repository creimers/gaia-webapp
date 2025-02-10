"use server";

import { LAYER_VALUE_API_URL, LAYER_VALUE_HEADER_TOKEN } from "../constants";

export async function getLayerValue(
  layerId: string,
  location: { latitude: number; longitude: number }
) {
  const body = JSON.stringify({
    longitude: location.longitude,
    latitude: location.latitude,
    layer: layerId,
  });
  try {
    const response = await fetch(LAYER_VALUE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-gaia-access": LAYER_VALUE_HEADER_TOKEN,
      },
      body,
    });
    if (response.ok) {
      const result = (await response.json()) as {
        raster_value: number | null;
      };
      return { value: result.raster_value };
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
}
