"use client";

import * as React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  NavigationControl,
  GeolocateControl,
  Layer,
  Source,
  MapRef,
} from "react-map-gl";
import type { RasterPaint } from "mapbox-gl";

import { MagnifyingGlass } from "@phosphor-icons/react";

import * as LAYER from "@/lib/layers";
import { DEFAULT_LIME_PRICE } from "@/lib/constants";

import dynamic from "next/dynamic";
import Legend from "./legend";
import {
  parseAsBoolean,
  useQueryState,
  useQueryStates,
  parseAsFloat,
  parseAsString,
} from "next-usequerystate";

const CustomSearchBox = dynamic(() => import("./search-box"), {
  ssr: false,
});

const PH_URL =
  "https://gaia-tiles.superservice-international.com/ph/soil_crop/tiles/{z}/{x}/{y}.png";

const HP_URL =
  "https://gaia-tiles.superservice-international.com/hp/{z}/{x}/{y}.png";

const LAYER_TILE_URLS: { [key: string]: string } = {
  // SOIL
  [LAYER.SOIL_LAYER_PH]:
    "https://gaia-tiles.superservice-international.com/soil_ph_bin/{z}/{x}/{y}.webp",
  [LAYER.SOIL_LAYER_EXCHANGEABLE_ACIDITY]:
    "https://gaia-tiles.superservice-international.com/soil_hp/{z}/{x}/{y}.webp",
  [LAYER.SOIL_LAYER_CATION_EXCHANGE_CAPACITY]:
    "https://gaia-tiles.superservice-international.com/soil_ecec/{z}/{x}/{y}.webp",
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

const DEFAULT_LATITUDE = -6;
const DEFAULT_LONGITUDE = 26.793587;
const DEFAULT_ZOOM = 3;

const BASE_LAYER_URLS: { [key: string]: string } = {
  streets: "mapbox://styles/mapbox/streets-v12",
  satellite: "mapbox://styles/mapbox/satellite-streets-v12",
};

export default function TheMap() {
  const [mapHasMoved, setMapHasMoved] = React.useState(false);
  const [mapInitialized, setMapInitialized] = React.useState(false);
  const [searchDialogueOpen, setSearchDialogueOpen] = React.useState(false);

  // # grap map state from url
  const [viewStateQuery, setViewStateQuery] = useQueryStates({
    lon: parseAsFloat.withDefault(DEFAULT_LONGITUDE),
    lat: parseAsFloat.withDefault(DEFAULT_LATITUDE),
    zoom: parseAsFloat.withDefault(DEFAULT_ZOOM),
  });
  const [sidebarOpen] = useQueryState("sidebar", parseAsBoolean);

  const [baseLayer] = useQueryState(
    "base_layer",
    parseAsString.withDefault("streets")
  );
  const [layerId] = useQueryState(
    "layer",
    parseAsString.withDefault(LAYER.SOIL_LAYER_PH)
  );
  const [limePrice] = useQueryState(
    "lime_price",
    parseAsString.withDefault(DEFAULT_LIME_PRICE)
  );
  const [layerOpacity] = useQueryState(
    "layer_opacity",
    parseAsFloat.withDefault(1)
  );

  const activeLayer = `${layerId}${
    layerId.includes(LAYER.PROFITABILITY_ID) ? `_${limePrice}` : ""
  }`;

  const mapRef = React.useRef<MapRef>(null);

  React.useEffect(() => {
    if (!mapHasMoved && sidebarOpen) {
      const center = mapRef.current?.getCenter();
      const centerPx = mapRef.current?.project(center!);
      if (centerPx !== undefined) {
        centerPx.x -= 200;
        const newCenter = mapRef.current?.unproject(centerPx);
        mapRef.current?.flyTo({ center: newCenter! });
      }
    }
  }, [mapInitialized, sidebarOpen, mapHasMoved]);

  const [viewState, setViewState] = React.useState({
    longitude: viewStateQuery.lon,
    latitude: viewStateQuery.lat,
    zoom: viewStateQuery.zoom,
  });

  const persistViewState = React.useCallback(() => {
    const { latitude, longitude, zoom } = viewState;
    setViewStateQuery({ lat: latitude, lon: longitude, zoom });
    setMapHasMoved(true);
  }, [viewState]);

  function handleSearchSelection(longitude: number, latitude: number) {
    mapRef.current?.flyTo({
      center: { lng: longitude, lat: latitude },
      zoom: 10,
    });
    if (searchDialogueOpen) {
      setSearchDialogueOpen(false);
    }
  }

  return (
    <Map
      onLoad={() => {
        setMapInitialized(true);
      }}
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
      {mapInitialized && (
        <CustomSearchBox
          mapInitialized={mapInitialized}
          handleSelect={handleSearchSelection}
          searchDialogueOpen={searchDialogueOpen}
        />
      )}
      <GeolocateControl position="bottom-right" />
      <NavigationControl position="bottom-right" />
      <Legend />
      <div className="absolute bottom-[190px] right-[10px] block md:hidden">
        <button
          onClick={() => setSearchDialogueOpen((o) => !o)}
          className="bg-gray-50 shadow-md h-[29px] w-[29px] rounded flex justify-center items-center"
        >
          <MagnifyingGlass className="h-4 w-4" weight="bold" />
        </button>
      </div>
      {Object.keys(LAYER_TILE_URLS).map((layerId) => (
        <React.Fragment key={layerId}>
          {activeLayer === layerId && (
            <Source
              id={layerId}
              tiles={[LAYER_TILE_URLS[layerId]]}
              type="raster"
              tileSize={256}
              scheme="tms"
              bounds={[
                -17.525, -34.83353431397413, 51.41351491714595,
                27.30000000000001,
              ]}
              maxzoom={10}
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
