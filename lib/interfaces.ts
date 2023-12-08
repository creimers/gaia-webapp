export type LegendBin = {
  color: string;
  value: string;
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
