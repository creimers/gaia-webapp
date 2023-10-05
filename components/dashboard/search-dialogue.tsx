import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { SearchBox } from "@mapbox/search-js-react";

type Props = {
  open: boolean;
  onClose: () => void;
  onSelect: (latitude: number, longitude: number) => void;
};

export default function SearchDialogue({ open, onClose, onSelect }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search for Location</DialogTitle>
          <DialogDescription asChild>
            <div className="z-[100]">
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
                    onClose();
                    onSelect(coordinates[1], coordinates[0]);
                  }
                }}
              ></SearchBox>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
