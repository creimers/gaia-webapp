"use client";

import * as React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Layer, Source, MapRef } from "react-map-gl";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

const DEFAULT_LATITUDE = 6.909917;
const DEFAULT_LONGITUDE = 17.658167;
const DEFAULT_ZOOM = 3;

const STREET = {
  url: "mapbox://styles/mapbox/streets-v12",
  name: "Street",
};
const SATELLITE = {
  url: "mapbox://styles/mapbox/satellite-streets-v12",
  name: "Satellite",
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
      mapStyle={STREET.url}
      projection={{ name: "mercator" }}
      doubleClickZoom={true}
      onMove={(evt) => setViewState(evt.viewState)}
      maxZoom={14}
    ></Map>
  );
}
