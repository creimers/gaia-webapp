import * as React from "react";

import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";

import { SOIL_ID, SOIL_LAYER_PH_ID } from "@/lib/layers/soil";
import { LIME_ID } from "@/lib/layers/lime";
import { PROFITABILITY_ID } from "@/lib/layers/profitability";
import { DEFAULT_LIME_PRICE } from "@/lib/constants";
import { SOIL_DATA_COUNTRY_CODES, SOIL_DATA } from "@/lib/data/soil";
import { LIME_DATA_COUNTRY_CODES, LIME_DATA } from "@/lib/data/lime";
import { PROFIT_DATA_COUNTRY_CODES, PROFIT_DATA } from "@/lib/data/profit";

import Citation from "../citation";
import CountrySelect, { type Country } from "./country-select";
import License from "../license";
import { parseAsString, useQueryState } from "next-usequerystate";

type Props = {
  onClose: () => void;
};

export default function CSVTab({ onClose }: Props) {
  const [agreeToLicense, setAgreeToLicense] = React.useState(false);
  const [country, setCountry] = React.useState<Country | undefined>();
  const [layer] = useQueryState(
    "layer",
    parseAsString.withDefault(SOIL_LAYER_PH_ID)
  );
  const [limePrice] = useQueryState(
    "lime_price",
    parseAsString.withDefault(DEFAULT_LIME_PRICE)
  );

  const availableCountries = React.useMemo(() => {
    if (layer.includes(SOIL_ID)) {
      return SOIL_DATA_COUNTRY_CODES;
    } else if (layer.includes(LIME_ID)) {
      return LIME_DATA_COUNTRY_CODES;
    } else if (layer.includes(PROFITABILITY_ID)) {
      return PROFIT_DATA_COUNTRY_CODES;
    }
  }, [layer]);

  function generateFileUrl() {
    if (!country) {
      return "";
    }
    if (layer.includes(SOIL_ID)) {
      return SOIL_DATA[country.iso];
    } else if (layer.includes(LIME_ID)) {
      return LIME_DATA[country.iso];
    } else if (layer.includes(PROFITABILITY_ID)) {
      return PROFIT_DATA[country.iso];
    }
    return "";
  }

  function closeDialogue() {
    setAgreeToLicense(false);
    setCountry(undefined);
    onClose();
  }

  async function downloadDataset() {
    const fileUrl = generateFileUrl();
    const response = await fetch(fileUrl);
    if (response.ok) {
      const data = await response.blob();
      const a = document.createElement("a");
      a.href = window.URL.createObjectURL(data);
      const filename = fileUrl.split("/").pop();
      a.download = filename!;
      a.click();
      closeDialogue();
    }
  }

  return (
    <div>
      <div className="space-y-4 text-base py-4 text-gray-800">
        {/* {fileURL} */}
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
    </div>
  );
}
