"use client";

import { SearchBox } from "@mapbox/search-js-react";

import { cn } from "@/lib/utils";

type Props = {
  mapInitialized: boolean;
  searchDialogueOpen: boolean;
  handleSelect: (lng: number, lat: number) => void;
};

export default function CustomSearchBox({
  mapInitialized,
  searchDialogueOpen,
  handleSelect,
}: Props) {
  return (
    <>
      {mapInitialized && (
        <>
          <div
            className={cn(
              "absolute top-[200px] w-full md:w-64 justify-center md:top-[100px] md:right-8 hidden md:block",
              searchDialogueOpen && "z-[100] flex"
            )}
          >
            {/** @ts-ignore */}
            <SearchBox
              placeholder="Search for a location"
              accessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN!}
              value=""
              options={{
                language: "en",
                bbox: [
                  [-17.625, -34.833], // Southwest corner: minimum longitude and latitude
                  [51.279, 37.345], // Northeast corner: maximum longitude and latitude
                ],
              }}
              onRetrieve={(e) => {
                const feature = e.features[0];
                if (feature) {
                  const { coordinates } = feature.geometry;
                  handleSelect(coordinates[0], coordinates[1]);
                  //   mapRef.current?.flyTo({
                  //     center: { lng: coordinates[0], lat: coordinates[1] },
                  //     zoom: 10,
                  //   });
                  //   if (searchDialogueOpen) {
                  //     setSearchDialogueOpen(false);
                  //   }
                }
              }}
            ></SearchBox>
          </div>
        </>
      )}
    </>
  );
}
