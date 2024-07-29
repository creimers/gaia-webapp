export type LegendBin = {
  color: string;
  value: string;
  min?: number;
  max?: number;
};

export type LayerLegend = {
  title?: string | undefined;
  bins: LegendBin[];
};

export type Layer = {
  id: string;
  label: string;
  info: React.ReactNode;
  tileUrl: string;
  rawTileUrl?: string;
  legend: LayerLegend;
};

export type ViewState = {
  longitude: number;
  latitude: number;
  zoom: number;
};

export type BaseLayer = "streets" | "satellite";
