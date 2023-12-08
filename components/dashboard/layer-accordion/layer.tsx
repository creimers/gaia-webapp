import * as React from "react";

import { Info } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import type { Layer } from "@/lib/interfaces";

type Props = {
  layer: Layer;
  activeLayerId?: string;
  handleSetLayerId: (layerId: string) => void;
};
export default function Layer({
  layer,
  activeLayerId,
  handleSetLayerId,
}: Props) {
  const [infoOpen, setInfoOpen] = React.useState(false);
  return (
    <div key={layer.id}>
      <label className="flex items-center cursor-pointer">
        <input
          type="radio"
          value={layer.id}
          checked={activeLayerId === layer.id}
          onChange={() => handleSetLayerId(layer.id)}
          className="shrink-0 h-5 w-5"
        />
        <div className="flex items-center space-x-2">
          <span className="pl-2 block text-lg">{layer.label}</span>
          <Button
            variant="ghost"
            className="block md:hidden"
            onClick={() => setInfoOpen(!infoOpen)}
          >
            <Info className="w-4 h-4" />
          </Button>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className="hidden md:block">
                <Info className="w-4 h-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent side="right" className="prose prose-sm">
              {layer.info}
            </PopoverContent>
          </Popover>
        </div>
      </label>
      {infoOpen && (
        <div className="block md:hidden text-sm text-gray-700 prose prose-sm">
          {layer.info}
        </div>
      )}
    </div>
  );
}
