import * as React from "react";
import { Marker } from "react-map-gl";
import { Spinner, X } from "@phosphor-icons/react";

import { getLayerValue } from "@/lib/actions/layer-value";
import { getColorForLayerValue } from "@/lib/utils";
import { LAYER_MAPPING } from "@/lib/layers";

type Props = {
  layerId: string;
  location: {
    latitude: number;
    longitude: number;
  } | null;
  clearLocation: () => void;
};
export default function LocationValue({
  layerId,
  location,
  clearLocation,
}: Props) {
  const [loading, loadValue] = React.useTransition();
  const [locationValue, setLocationValue] = React.useState<string | null>(null);
  const [locationColor, setLocationColor] = React.useState<string | null>(null);
  React.useEffect(() => {
    if (location && layerId) {
      loadValue(async () => {
        try {
          const response = await getLayerValue(layerId, location);
          if (response?.value) {
            setLocationValue(response?.value.toFixed(2) || "");
            const color = getColorForLayerValue(
              response?.value!,
              LAYER_MAPPING[layerId]
            );
            setLocationColor(color);
            // if (response?.color) {
            //   setLocationColor(response?.color);
            // }
          } else {
            setLocationValue("No value found.");
            setLocationColor(null);
          }
        } catch (error) {
          setLocationValue("Could not load value.");
        }
      });
    }
  }, [location, layerId]);

  //   const locationColor = locationValue ? getColorForLayerValue(locationValue, LAYER_MAPPING[layerId]) : ""

  return (
    <>
      {location && (
        <>
          <Marker longitude={location.longitude} latitude={location.latitude}>
            <div className="bg-red-500 h-6 w-6 rounded-full  border-4 border-white drop-shadow-xl"></div>
          </Marker>
          <div
            className="absolute top-32 md:top-24 left-1/2 -translate-x-1/2 shadow bg-white/70 backdrop-blur-md rounded-lg p-4 text-xl z-10"
            id="map-hint"
          >
            {loading && (
              <div className="w-32 flex justify-center">
                <Spinner className="animate-spin w-6 h-6" />
              </div>
            )}
            {!loading && locationValue && (
              <div className="flex space-x-2 items-center">
                {locationColor && (
                  <div
                    className="rounded-full w-6 h-6 border border-black flex-shrink-0"
                    style={{ background: locationColor }}
                  ></div>
                )}
                <span>{locationValue}</span>
              </div>
            )}
            <button
              className="absolute right-0 top-0 p-2 -translate-y-3 translate-x-3 bg-white rounded-full"
              onClick={() => {
                setLocationValue(null);
                setLocationColor(null);
                clearLocation();
              }}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </>
      )}
    </>
  );
}
