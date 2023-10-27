import * as React from "react";
import { useSearchParams } from "next/navigation";

import { SOIL_LAYER_PH, PROFITABILITY_ID } from "@/lib/layers";

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

import Citation from "./citation";
import CountrySelect, { type Country } from "./country-select";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function DownloadDialogue({ open, onClose }: Props) {
  const [agreeToLicense, setAgreeToLicense] = React.useState(false);
  const [country, setCountry] = React.useState<Country | undefined>();
  const searchParams = useSearchParams();
  const layer = searchParams.get("layer") || SOIL_LAYER_PH;
  const limePrice = searchParams.get("lime_price") || DEFAULT_LIME_PRICE;

  const filename = `${layer}${
    layer.includes(PROFITABILITY_ID) ? `_${limePrice}` : ""
  }${country ? `_${country.iso}` : ""}.csv`;

  function closeDialogue() {
    setAgreeToLicense(false);
    setCountry(undefined);
    onClose();
  }

  async function downloadDataset() {
    // const filename = `${layer}${limePrice ? `_${limePrice}` : ""}.csv`;
    const filename = "test.csv";
    const url = `/data/${filename}`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.blob();
      const a = document.createElement("a");
      a.href = window.URL.createObjectURL(data);
      a.download = filename;
      a.click();
      closeDialogue();
    }
  }

  return (
    <Dialog open={open} onOpenChange={closeDialogue}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Download Dataset</DialogTitle>
          <DialogDescription asChild>
            <div className="space-y-4 text-base py-4">
              <div>
                <label className="font-semibold mb-2 block">Country</label>
                <CountrySelect value={country} handleUpdate={setCountry} />
              </div>
              {/* <div>{filename}</div> */}
              <div>
                <p>
                  This work is licensed under{" "}
                  <a
                    href="http://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
                    target="_blank"
                    rel="license noopener noreferrer"
                    style={{ display: "inline-flex" }}
                  >
                    CC BY-NC-SA 4.0
                    <img
                      alt="Creative Commons License"
                      style={{
                        height: "22px",
                        marginLeft: 3,
                        verticalAlign: "text-bottom",
                      }}
                      src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"
                    />
                    <img
                      alt="Creative Commons License"
                      style={{
                        height: "22px",
                        marginLeft: 3,
                        verticalAlign: "text-bottom",
                      }}
                      src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"
                    />
                    <img
                      alt="Creative Commons License"
                      style={{
                        height: "22px",
                        marginLeft: 3,
                        verticalAlign: "text-bottom",
                      }}
                      src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"
                    />
                    <img
                      alt="Creative Commons License"
                      style={{
                        height: "22px",
                        marginLeft: 3,
                        verticalAlign: "text-bottom",
                      }}
                      src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"
                    />
                  </a>
                </p>
              </div>
              <details>
                <summary className="font-semibold cursor-pointer">
                  Show suggested citation
                </summary>
                <div className="py-1">
                  <Citation />
                </div>
              </details>
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
        </DialogHeader>
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
