"use server";

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
    const response = await fetch("http://localhost:3900/layer-value", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-gaia-access": "one-oh-seven",
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
