import * as React from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import CSVTab from "./csv-tab";
import GeotifTab from "./geotif-tab";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function DownloadDialogue({ open, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-xl">
        <DialogHeader>
          <DialogTitle>Download Dataset</DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="csv">
          <TabsList className="grid grid-cols-2 gap-3">
            <TabsTrigger value="csv">Excel</TabsTrigger>
            <TabsTrigger value="geotif">Geotif</TabsTrigger>
          </TabsList>
          <TabsContent value="csv">
            <CSVTab onClose={onClose} />
          </TabsContent>
          <TabsContent value="geotif">
            <GeotifTab onClose={onClose} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
