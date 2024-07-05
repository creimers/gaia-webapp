import * as React from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import License from "../license";
import { cn } from "@/lib/utils";

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
              João Vasco Silva, Tesfaye Sida, Samuel Gameda, Temesgn Desalegn,
              Joel Meliyo, Sibaway Mwango, Vicky Ruganzu, Bisrat Gebrekidan,
              Moti Jaleta, Jordan Chamberlin, Frédéric Baudron
            </p>
            <p>
              <strong>
                Unpacking the acid soil complex to explain crop yield responses
                to lime in East Africa.
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
        <DialogFooter className="not-prose">
          <Button variant="outline" onClick={closeDialogue} size="lg">
            Cancel
          </Button>
          <div className="h-2 block md:hidden" />
          {!agreeToLicense ? (
            <Button variant="default" disabled size="lg">
              Download Dataset
            </Button>
          ) : (
            <a
              href="/data/predicted_means_allcrops_soils.csv"
              target="_blank"
              className={cn(
                buttonVariants({ size: "lg", variant: "default" }),
                "text-lg"
              )}
            >
              Download Dataset
            </a>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
