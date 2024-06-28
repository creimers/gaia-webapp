import * as React from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import License from "../license";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function DownloadDialogue({ open, onClose }: Props) {
  const [agreeToLicense, setAgreeToLicense] = React.useState(false);

  function closeDialogue() {
    setAgreeToLicense(false);
    onClose();
  }

  async function downloadDataset() {
    const fileUrl = "";
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
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Download Dataset</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 text-base py-4 text-gray-800">
          <div className="text-sm space-y-1">
            <p className="underline">
              <strong>Suggested citation</strong>
            </p>
            <p>
              Silva, J.V., Aramburu-Merlos, F., Baudron, F., Gameda, S., Meliyo,
              J., Ruganzu, V., Desalegn, T., Sida, T.S., Jaleta, M., Chamberlin,
              J., Hijmans, R.J. 2023.{" "}
            </p>
            <p>
              <strong>
                The burden of acid soils for crop production in sub-Saharan
                Africa.
              </strong>
            </p>
            <p>In preparation.</p>
          </div>
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
            disabled={!agreeToLicense}
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
