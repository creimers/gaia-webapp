import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Layer } from "./interfaces";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getColorForLayerValue(value: number, layer: Layer) {
  const bin = layer.legend.bins.find(
    (bin) =>
      (bin.min === undefined || value >= bin.min) &&
      (bin.max === undefined || value < bin.max)
  );
  return bin?.color || null;
}
