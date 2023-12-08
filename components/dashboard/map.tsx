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

import { LAYER_MAPPING } from "@/lib/layers";
import { SOIL_LAYER_PH_ID } from "@/lib/layers/soil";
// import { PROFITABILITY_ID } from "@/lib/layers/profitability";
// import { DEFAULT_LIME_PRICE } from "@/lib/constants";

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
    parseAsString.withDefault(SOIL_LAYER_PH_ID)
  );
  // const [limePrice] = useQueryState(
  //   "lime_price",
  //   parseAsString.withDefault(DEFAULT_LIME_PRICE)
  // );
  const [layerOpacity] = useQueryState(
    "layer_opacity",
    parseAsFloat.withDefault(1)
  );

  const activeLayer = layerId;
  // const activeLayer = `${layerId}${
  //   layerId.includes(PROFITABILITY_ID) ? `_${limePrice}` : ""
  // }`;

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
      {Object.keys(LAYER_MAPPING).map((layerId) => (
        <React.Fragment key={layerId}>
          {activeLayer === layerId && (
            <Source
              id={layerId}
              tiles={[LAYER_MAPPING[layerId].tileUrl]}
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
