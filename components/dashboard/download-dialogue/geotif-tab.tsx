import * as React from "react";
import Link from "next/link";

import { LAYER_MAPPING } from "@/lib/layers";

import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";

import Citation from "./citation";
import License from "../../license";
import { cn } from "@/lib/utils";
import { useMapStore } from "@/lib/map-store";

type Props = {
  onClose: () => void;
};

export default function GeotifTab({ onClose }: Props) {
  const [agreeToLicense, setAgreeToLicense] = React.useState(false);

  const { activeLayer } = useMapStore();
  const layer = LAYER_MAPPING[activeLayer];

  function closeDialogue() {
    setAgreeToLicense(false);
    onClose();
  }

  return (
    <div className="space-y-4 text-base text-gray-800">
      <Citation />
      <License />
      <div>
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={agreeToLicense}
            onChange={() => setAgreeToLicense(!agreeToLicense)}
            className="shrink-0"
          />
          <div>
            <span className="pl-2 block">I agree to the license</span>
          </div>
        </label>
      </div>
      <DialogFooter>
        <Button variant="outline" onClick={closeDialogue} size="lg">
          Cancel
        </Button>
        <div className="h-2 block md:hidden" />
        <Button
          variant="default"
          size="lg"
          asChild
          className={cn(
            (!agreeToLicense || !layer.rawTileUrl) &&
              "cursor-not-allowed pointer-events-none opacity-50"
          )}
        >
          <Link
            href={layer.rawTileUrl!}
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            Download Dataset
          </Link>
        </Button>
      </DialogFooter>
    </div>
  );
}
