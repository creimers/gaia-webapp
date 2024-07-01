"use client";
import * as React from "react";
import { Download } from "@phosphor-icons/react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { data, locations } from "./data";
import CustomSlider from "./custom-slider";
import AgronomyGraph from "./agronomy-graph";
import ProfitGraph from "./profitability-graph";
import DownloadDialogue from "./download-dialog";

type Tabs = "agronomy" | "profit";

function FormItem({ children }: { children: React.ReactNode }) {
  return <div className="space-y-2">{children}</div>;
}

export default function ProfitabilityWidget() {
  const [activeTab, setActiveTab] = React.useState<Tabs>("agronomy");
  const [location, setLocation] = React.useState(locations[0]);
  const [crop, setCrop] = React.useState(Object.keys(data[location])[0]);
  const [outputPrice, setOutputPrice] = React.useState(150);
  const [limePrice, setLimePrice] = React.useState(55);
  const [decayPeriod, setDecayPeriod] = React.useState(3);
  const [discountRate, setDiscountRate] = React.useState(0.1);
  const [showDownloadDialog, setShowDownloadDialog] = React.useState(false);

  React.useEffect(() => {
    const firstCropOfLocation = Object.keys(data[location])[0];
    setCrop(firstCropOfLocation);
  }, [location]);

  const cropsInLocation = Object.keys(data[location]);

  const priceRatio = outputPrice / limePrice;

  const chartData = React.useMemo(() => {
    return data[location][crop] || [];
  }, [location, crop]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
      <div>
        <div className="space-y-3 border p-4 rounded-lg">
          <FormItem>
            <Label>Location</Label>
            <Select value={location} onValueChange={(v) => setLocation(v)}>
              <SelectTrigger>
                <SelectValue>{location || "Select location"}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location} value={location}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
          <FormItem>
            <Label>Crop</Label>
            <Select value={crop} onValueChange={(v) => setCrop(v)}>
              <SelectTrigger>
                <SelectValue className="capitalize">
                  {<span className="capitalize">{crop}</span> ||
                    "Select location"}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {cropsInLocation.map((crop) => (
                  <SelectItem key={crop} value={crop} className="capitalize">
                    {crop}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
          <FormItem>
            <Label>Output price [USD/ton]</Label>

            <CustomSlider
              value={outputPrice}
              onChange={setOutputPrice}
              min={100}
              max={500}
              step={5}
            />
          </FormItem>
          <FormItem>
            <Label>Lime price [USD/ton]</Label>
            <CustomSlider
              value={limePrice}
              onChange={setLimePrice}
              min={0}
              max={200}
              step={5}
            />
          </FormItem>
          {activeTab === "profit" && (
            <>
              <FormItem>
                <Label>Decay period [years]</Label>
                <CustomSlider
                  value={decayPeriod}
                  onChange={setDecayPeriod}
                  min={1}
                  max={5}
                  step={1}
                />
              </FormItem>

              <FormItem>
                <Label>Discount rate</Label>
                <CustomSlider
                  value={discountRate}
                  onChange={setDiscountRate}
                  min={0.1}
                  max={1}
                  step={0.1}
                />
              </FormItem>
            </>
          )}
          <FormItem>
            <div className="flex justify-center">
              <Button
                variant={"secondary"}
                size={"lg"}
                onClick={() => setShowDownloadDialog(true)}
              >
                <Download className="w-6 h-6 mr-2" />
                Download Dataset
              </Button>
              <DownloadDialogue
                onClose={() => setShowDownloadDialog(false)}
                open={showDownloadDialog}
              />
            </div>
          </FormItem>
        </div>
      </div>
      <div className="md:col-span-2">
        <Tabs
          defaultValue="agronomy"
          className="w-full"
          value={activeTab}
          onValueChange={(v) => setActiveTab(v as Tabs)}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="agronomy">
              <span className="hidden md:inline">Agronomic Responses</span>
              <span className="inline md:hidden">Agr. Resp.</span>
            </TabsTrigger>
            <TabsTrigger value="profit">
              <span className="hidden lg:inline">
                Net Revenue and Net Present Value
              </span>
              <span className="inline lg:hidden">
                Net Rev. + Net Pres. Val.
              </span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="agronomy" className="space-y-6">
            <AgronomyGraph
              data={chartData}
              priceRatio={priceRatio}
              outputPrice={outputPrice}
              limePrice={limePrice}
            />
            <div className="prose max-w-none">
              <p>
                The values plotted in{" "}
                <span className="text-green-600">green</span> are estimated
                responses to lime treatments, where the additional yield
                (relative to yield with zero lime) is plotted on the y-axis and
                the amount of lime is plotted on the x-axis. Use the sliders to
                adjust the assumed farmgate maize and lime prices and observe
                how the profitability of the lime investments change in
                response. The goal is to explore how positive agronomic
                responses to lime may or may not actually be profitable for a
                farmer.
              </p>
            </div>
          </TabsContent>
          <TabsContent value="profit">
            <ProfitGraph
              data={chartData}
              outputPrice={outputPrice}
              limePrice={limePrice}
              decayPeriod={decayPeriod}
              discountRate={discountRate}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
