import * as React from "react";
import { useSearchParams } from "next/navigation";

import {
  SOIL_LAYER_PH_ID,
  PROFITABILITY_ID,
  SOIL_ID,
  LIME_ID,
} from "@/lib/layers";

import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { DEFAULT_LIME_PRICE } from "@/lib/constants";
import { SOIL_DATA_COUNTRY_CODES, SOIL_DATA } from "@/lib/data/soil";
import { LIME_DATA_COUNTRY_CODES, LIME_DATA } from "@/lib/data/lime";

import Citation from "./citation";
import CountrySelect, { type Country } from "./country-select";
import License from "./license";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function DownloadDialogue({ open, onClose }: Props) {
  const [agreeToLicense, setAgreeToLicense] = React.useState(false);
  const [country, setCountry] = React.useState<Country | undefined>();
  const searchParams = useSearchParams();
  const layer = searchParams.get("layer") || SOIL_LAYER_PH_ID;
  const limePrice = searchParams.get("lime_price") || DEFAULT_LIME_PRICE;

  const availableCountries = React.useMemo(() => {
    if (layer.includes(SOIL_ID)) {
      return SOIL_DATA_COUNTRY_CODES;
    } else if (layer.includes(LIME_ID)) {
      return LIME_DATA_COUNTRY_CODES;
    }
  }, [layer]);

  // const filename = `${layer}${
  //   layer.includes(PROFITABILITY_ID) ? `_${limePrice}` : ""
  // }${country ? `_${country.iso}` : ""}.csv`;

  const fileURL = React.useMemo(() => {
    if (!country) {
      return "";
    }
    if (layer.includes(SOIL_ID)) {
      return SOIL_DATA[country.iso];
    } else if (layer.includes(LIME_ID)) {
      return LIME_DATA[country.iso];
    }
    return "";
  }, [layer, limePrice, country]);

  function closeDialogue() {
    setAgreeToLicense(false);
    setCountry(undefined);
    onClose();
  }

  async function downloadDataset() {
    const response = await fetch(fileURL);
    if (response.ok) {
      const data = await response.blob();
      const a = document.createElement("a");
      a.href = window.URL.createObjectURL(data);
      const filename = fileURL.split("/").pop();
      a.download = filename!;
      a.click();
      closeDialogue();
    }
  }

  return (
    <Dialog open={open} onOpenChange={closeDialogue}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Download Dataset</DialogTitle>
        </DialogHeader>
        <DialogDescription asChild>
          <div className="space-y-4 text-base py-4 text-gray-800">
            <div>
              <label className="font-semibold mb-2 block">Country</label>
              <CountrySelect
                value={country}
                handleUpdate={setCountry}
                availableISOCodes={availableCountries}
              />
            </div>
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
          </div>
        </DialogDescription>
        <DialogFooter>
          <Button variant="outline" onClick={closeDialogue} size="lg">
            Cancel
          </Button>
          <div className="h-2 block md:hidden" />
          <Button
            variant="default"
            disabled={!agreeToLicense || !country}
            onClick={downloadDataset}
            size="lg"
          >
            Download Dataset
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
