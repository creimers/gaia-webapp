import { create } from "zustand";

import { SOIL_LAYER_PH_ID } from "./layers/soil";
import { BaseLayer, ViewState } from "./interfaces";

const DEFAULT_LATITUDE = -6;
const DEFAULT_LONGITUDE = 26.793587;
const DEFAULT_ZOOM = 3;

interface MapState {
  activeLayer: string;
  setActiveLayer: (layer: string) => void;
  layerOpacity: number;
  setLayerOpacity: (opacity: number) => void;
  viewState: ViewState;
  setViewState: (viewState: ViewState) => void;
  baseLayer: BaseLayer;
  setBaseLayer: (baseLayer: BaseLayer) => void;
  sidebarOpen: boolean;
  setSidebarOpen: (sidebarOpen: boolean) => void;
}

export const useMapStore = create<MapState>((set) => ({
  activeLayer: SOIL_LAYER_PH_ID,
  setActiveLayer: (layer) => set({ activeLayer: layer }),
  layerOpacity: 1,
  setLayerOpacity: (layerOpacity) => set({ layerOpacity }),
  viewState: {
    latitude: DEFAULT_LATITUDE,
    longitude: DEFAULT_LONGITUDE,
    zoom: DEFAULT_ZOOM,
  },
  setViewState: (viewState) => set({ viewState }),
  baseLayer: "streets",
  setBaseLayer: (baseLayer) => set({ baseLayer }),
  sidebarOpen: true,
  setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
}));
