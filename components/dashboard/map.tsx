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
import dynamic from "next/dynamic";

import { LAYER_MAPPING } from "@/lib/layers";
import { useMapStore } from "@/lib/map-store";

import Legend from "./legend";
import LocationValue from "./location-value";

const CustomSearchBox = dynamic(() => import("./search-box"), {
  ssr: false,
});

const BASE_LAYER_URLS: { [key: string]: string } = {
  streets: "mapbox://styles/mapbox/streets-v12",
  satellite: "mapbox://styles/mapbox/satellite-streets-v12",
};

export default function TheMap() {
  const [mapHasMoved, setMapHasMoved] = React.useState(false);
  const [mapInitialized, setMapInitialized] = React.useState(false);
  const [searchDialogueOpen, setSearchDialogueOpen] = React.useState(false);

  const [clickedLocation, setClickedLocation] = React.useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  console.log(clickedLocation?.longitude, clickedLocation?.latitude);

  const {
    viewState,
    setViewState,
    baseLayer,
    sidebarOpen,
    activeLayer,
    layerOpacity,
  } = useMapStore();

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

  const persistViewState = React.useCallback(() => {
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
      onClick={(evt) => {
        const lngLat = evt.lngLat;
        setTimeout(() => {
          setClickedLocation({
            longitude: lngLat.lng,
            latitude: lngLat.lat,
          });
        }, 100);
      }}
    >
      <LocationValue
        location={clickedLocation}
        layerId={activeLayer}
        clearLocation={() => setClickedLocation(null)}
      />
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
