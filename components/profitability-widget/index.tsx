"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "../ui/label";

import { data, locations } from "./data";
import CustomSlider from "./custom-slider";
import AgronomyGraph from "./agronomy-graph";

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
          <Label>Output price [USD/MT]</Label>

          <CustomSlider
            value={outputPrice}
            onChange={setOutputPrice}
            min={50}
            max={500}
            step={5}
          />
        </FormItem>
        <FormItem>
          <Label>Lime price [USD/MT]</Label>
          <CustomSlider
            value={limePrice}
            onChange={setLimePrice}
            min={50}
            max={300}
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
                max={7}
                step={1}
              />
            </FormItem>

            <FormItem>
              <Label>Discount rate</Label>
              <CustomSlider
                value={discountRate}
                onChange={setDiscountRate}
                min={0}
                max={1}
                step={0.1}
              />
            </FormItem>
          </>
        )}
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
          <TabsContent value="agronomy">
            <AgronomyGraph
              data={chartData}
              priceRatio={priceRatio}
              outputPrice={outputPrice}
              limePrice={limePrice}
            />
          </TabsContent>
          <TabsContent value="profit">
            Input from Dr. Silva is needed.
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
