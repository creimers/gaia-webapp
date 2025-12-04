"use client";

import * as React from "react";

import { useShallow } from "zustand/react/shallow";
import { usePathname, useSearchParams } from "next/navigation";

import { useMapStore } from "@/lib/map-store";
import { BaseLayer } from "@/lib/interfaces";

const LAYER = "layer";
const ZOOM = "zoom";
const LAT = "lat";
const LON = "lon";
const BASE_LAYER = "baseLayer";
const LAYER_OPACITY = "layerOpacity";

let timeout: NodeJS.Timeout | undefined = undefined;
export function routeShallow(pathname: string, searchParams?: URLSearchParams) {
  const url = searchParams
    ? `${pathname}?${searchParams.toString()}`
    : pathname;

  if (timeout) {
    clearTimeout(timeout);
    timeout = undefined;
  }
  timeout = setTimeout(() => {
    try {
      window.history.pushState({}, "", url);
      timeout = undefined;
    } catch (error) {
      console.log("route shallow", error);
    }
  }, 500);
}

export default function UrlStateSyncer() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const {
    viewState,
    setViewState,
    activeLayer,
    setActiveLayer,
    baseLayer,
    setBaseLayer,
    layerOpacity,
    setLayerOpacity,
  } = useMapStore(
    useShallow((store) => ({
      viewState: store.viewState,
      setViewState: store.setViewState,
      activeLayer: store.activeLayer,
      setActiveLayer: store.setActiveLayer,
      baseLayer: store.baseLayer,
      layerOpacity: store.layerOpacity,
      setBaseLayer: store.setBaseLayer,
      setLayerOpacity: store.setLayerOpacity,
    }))
  );

  // url to state
  React.useEffect(() => {
    const effect = async () => {
      const latitude = searchParams.get(LAT);
      const longitude = searchParams.get(LON);
      const zoom = searchParams.get(ZOOM);
      if (latitude && longitude && zoom) {
        setViewState({
          latitude: Number(latitude),
          longitude: Number(longitude),
          zoom: Number(zoom),
        });
      }

      const baseLayer = searchParams.get(BASE_LAYER);
      if (baseLayer) {
        setBaseLayer(baseLayer as BaseLayer);
      }

      const layerOpacitySearch = searchParams.get(LAYER_OPACITY);
      let initialLayerOpacity =
        layerOpacitySearch !== null ? Number(layerOpacitySearch) : 1;
      setLayerOpacity(initialLayerOpacity);
      const layerId = searchParams.get(LAYER);
      if (layerId) {
        setActiveLayer(layerId);
      }
    };
    effect();
  }, []);

  // state to url
  React.useEffect(() => {
    const { latitude, longitude, zoom } = viewState;
    const params = new URLSearchParams(searchParams.toString());
    params.set(LAT, latitude.toString());
    params.set(LON, longitude.toString());
    params.set(ZOOM, zoom.toString());

    if (activeLayer) {
      params.set(LAYER, activeLayer);
    } else {
      params.delete(LAYER);
    }

    if (baseLayer) {
      params.set(BASE_LAYER, baseLayer);
    } else {
      params.delete(BASE_LAYER);
    }

    if (layerOpacity !== 1) {
      params.set(LAYER_OPACITY, layerOpacity.toString());
    } else {
      params.delete(LAYER_OPACITY);
    }
    routeShallow(pathname, params);
  }, [viewState, activeLayer, baseLayer, layerOpacity]);

  return null;
}
