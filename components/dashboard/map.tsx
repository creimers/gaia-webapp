"use client";

import * as React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Layer, Source, MapRef } from "react-map-gl";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

import * as LAYER from "@/lib/layers";
import { DEFAULT_LIME_PRICE } from "@/lib/constants";
import { RasterPaint } from "mapbox-gl";

const PH_URL =
  "https://gaia-tiles.superservice-international.com/ph/soil_crop/tiles/{z}/{x}/{y}.png";

const HP_URL =
  "https://gaia-tiles.superservice-international.com/hp/{z}/{x}/{y}.png";

const LAYER_TILE_URLS: { [key: string]: string } = {
  // SOIL
  [LAYER.SOIL_LAYER_PH]: PH_URL,
  [LAYER.SOIL_LAYER_EXCHANGEABLE_ACIDITY]: HP_URL,
  [LAYER.SOIL_LAYER_CATION_EXCHANGE_CAPACITY]: PH_URL,
  // LIME
  [LAYER.LIME_LAYER_WEIGHTED_AVERAGE]: HP_URL,
  [LAYER.LIME_LAYER_CEREALS]: PH_URL,
  [LAYER.LIME_LAYER_LEGUMES]: HP_URL,
  [LAYER.LIME_LAYER_ROOTS_TUBERS]: PH_URL,
  [LAYER.LIME_LAYER_OTHER]: HP_URL,
  // YIELD RESPONSE
  [LAYER.YIELD_RESPONSE_LAYER_WEIGHTED_AVERAGE]: HP_URL,
  [LAYER.YIELD_RESPONSE_LAYER_CEREALS]: PH_URL,
  [LAYER.YIELD_RESPONSE_LAYER_LEGUMES]: HP_URL,
  [LAYER.YIELD_RESPONSE_LAYER_ROOTS_TUBERS]: PH_URL,
  [LAYER.YIELD_RESPONSE_LAYER_OTHER]: HP_URL,
  // PROFITABILITY
  [`${LAYER.PROFITABILITY_LAYER_WEIGHTED_AVERAGE}_0`]: PH_URL,
  [`${LAYER.PROFITABILITY_LAYER_WEIGHTED_AVERAGE}_20`]: HP_URL,
  [`${LAYER.PROFITABILITY_LAYER_WEIGHTED_AVERAGE}_40`]: PH_URL,
  [`${LAYER.PROFITABILITY_LAYER_WEIGHTED_AVERAGE}_60`]: HP_URL,
  [`${LAYER.PROFITABILITY_LAYER_WEIGHTED_AVERAGE}_80`]: PH_URL,
  [`${LAYER.PROFITABILITY_LAYER_WEIGHTED_AVERAGE}_100`]: HP_URL,
  [`${LAYER.PROFITABILITY_LAYER_CEREALS}_0`]: PH_URL,
  [`${LAYER.PROFITABILITY_LAYER_CEREALS}_20`]: HP_URL,
  [`${LAYER.PROFITABILITY_LAYER_CEREALS}_40`]: PH_URL,
  [`${LAYER.PROFITABILITY_LAYER_CEREALS}_60`]: HP_URL,
  [`${LAYER.PROFITABILITY_LAYER_CEREALS}_80`]: PH_URL,
  [`${LAYER.PROFITABILITY_LAYER_CEREALS}_100`]: HP_URL,
  [`${LAYER.PROFITABILITY_LAYER_LEGUMES}_0`]: PH_URL,
  [`${LAYER.PROFITABILITY_LAYER_LEGUMES}_20`]: HP_URL,
  [`${LAYER.PROFITABILITY_LAYER_LEGUMES}_40`]: PH_URL,
  [`${LAYER.PROFITABILITY_LAYER_LEGUMES}_60`]: HP_URL,
  [`${LAYER.PROFITABILITY_LAYER_LEGUMES}_80`]: PH_URL,
  [`${LAYER.PROFITABILITY_LAYER_LEGUMES}_100`]: HP_URL,
  [`${LAYER.PROFITABILITY_LAYER_ROOTS_TUBERS}_0`]: PH_URL,
  [`${LAYER.PROFITABILITY_LAYER_ROOTS_TUBERS}_20`]: HP_URL,
  [`${LAYER.PROFITABILITY_LAYER_ROOTS_TUBERS}_40`]: PH_URL,
  [`${LAYER.PROFITABILITY_LAYER_ROOTS_TUBERS}_60`]: HP_URL,
  [`${LAYER.PROFITABILITY_LAYER_ROOTS_TUBERS}_80`]: PH_URL,
  [`${LAYER.PROFITABILITY_LAYER_ROOTS_TUBERS}_100`]: HP_URL,
  [`${LAYER.PROFITABILITY_LAYER_OTHER}_0`]: PH_URL,
  [`${LAYER.PROFITABILITY_LAYER_OTHER}_20`]: HP_URL,
  [`${LAYER.PROFITABILITY_LAYER_OTHER}_40`]: PH_URL,
  [`${LAYER.PROFITABILITY_LAYER_OTHER}_60`]: HP_URL,
  [`${LAYER.PROFITABILITY_LAYER_OTHER}_80`]: PH_URL,
  [`${LAYER.PROFITABILITY_LAYER_OTHER}_100`]: HP_URL,
};

const DEFAULT_LATITUDE = 6.909917;
const DEFAULT_LONGITUDE = 17.658167;
const DEFAULT_ZOOM = 3;

const BASE_LAYER_URLS: { [key: string]: string } = {
  streets: "mapbox://styles/mapbox/streets-v12",
  satellite: "mapbox://styles/mapbox/satellite-streets-v12",
};

export default function TheMap() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // # grap map state from url
  const latitude = parseFloat(searchParams.get("lat") || `${DEFAULT_LATITUDE}`);
  const longitude = parseFloat(
    searchParams.get("lon") || `${DEFAULT_LONGITUDE}`
  );
  const zoom = parseFloat(searchParams.get("zoom") || `${DEFAULT_ZOOM}`);

  const baseLayer = searchParams.get("base_layer") || "streets";
  const layerId = searchParams.get("layer") || LAYER.SOIL_LAYER_PH;
  const limePrice = searchParams.get("lime_price") || DEFAULT_LIME_PRICE;
  const activeLayer = `${layerId}${
    layerId.includes(LAYER.PROFITABILITY_ID) ? `_${limePrice}` : ""
  }`;

  const layerOpacity = parseFloat(searchParams.get("layer_opacity") || "1");
  console.log({ layerOpacity });

  const mapRef = React.useRef<MapRef>(null);

  const offsetSidebar = () => {
    if (longitude === DEFAULT_LONGITUDE) {
      const center = mapRef.current?.getCenter();
      const centerPx = mapRef.current?.project(center!);
      if (centerPx !== undefined) {
        centerPx.x -= 200;
        const newCenter = mapRef.current?.unproject(centerPx);
        mapRef.current?.flyTo({ center: newCenter! });
      }
    }
  };

  const [viewState, setViewState] = React.useState({
    longitude,
    latitude,
    zoom,
  });

  const persistViewState = React.useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.set("lat", viewState.latitude.toString());
    params.set("lon", viewState.longitude.toString());
    params.set("zoom", viewState.zoom.toString());
    router.replace(pathname + "?" + params.toString());
  }, [viewState]);

  return (
    <Map
      onLoad={() => offsetSidebar()}
      ref={mapRef}
      onMoveEnd={() => persistViewState()}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      {...viewState}
      style={{ width: "100%", height: "100%" }}
      mapStyle={BASE_LAYER_URLS[baseLayer] || BASE_LAYER_URLS["streets"]}
      projection={{ name: "mercator" }}
      doubleClickZoom={true}
      onMove={(evt) => setViewState(evt.viewState)}
      maxZoom={10}
    >
      {Object.keys(LAYER_TILE_URLS).map((layerId) => (
        <React.Fragment key={layerId}>
          {activeLayer === layerId && (
            <Source
              id={layerId}
              tiles={[LAYER_TILE_URLS[layerId]]}
              type="raster"
              tileSize={256}
              scheme="tms"
              // bounds={layer.bounds}
            >
              <Layer
                id={layerId}
                type="raster"
                beforeId="road-street"
                source={layerId}
                paint={
                  {
                    "raster-opacity": layerOpacity,
                  } as RasterPaint
                }
              />
            </Source>
          )}
        </React.Fragment>
      ))}
    </Map>
  );
}
