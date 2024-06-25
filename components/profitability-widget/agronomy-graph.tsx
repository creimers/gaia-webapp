import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Area,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
  Label,
} from "recharts";

import { Datapoint } from "./data";
import { YIELD_LOSS_LAYERS } from "@/lib/layers/yield-loss";

type Props = {
  data: Datapoint[];
  priceRatio: number;
  outputPrice: number;
  limePrice: number;
};

export default function AgronomyGraph({
  data,
  priceRatio,
  outputPrice,
  limePrice,
}: Props) {
  const enhancedData = [
    ...data.map((d) => ({ ...d, area_green: 3, area_red: d.tha / priceRatio })),
    {
      area_green: 3,
      tha: 8,
      area_red: 8 / priceRatio,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        data={enhancedData}
        margin={{ top: 5, right: 5, bottom: 15, left: 5 }}
      >
        <XAxis
          dataKey="tha"
          domain={[0, 8]}
          tickCount={5}
          type="number"
          label={{
            value: "Lime application rate [MT/ha]",
            offset: -10,
            position: "insideBottom",
          }}
        />
        <YAxis domain={[0, 3]} tickCount={4} type="number" allowDataOverflow>
          <Label
            value="Yield response attributed to liming [MT/ha]"
            angle={-90}
            position="insideLeft"
            offset={20}
            style={{ textAnchor: "middle" }}
          />
        </YAxis>
        <Area
          dataKey="area_green"
          fill="#bae1be"
          stroke="transparent"
          type="monotone"
          fillOpacity="1"
          isAnimationActive={false}
        />
        <Area
          dataKey="area_red"
          fill="#ffc5cf"
          fillOpacity="1"
          type="monotone"
          stroke="transparent"
          isAnimationActive={false}
        />
        <Line
          dataKey="yield_response"
          stroke="green"
          strokeWidth="3"
          isAnimationActive={false}
        />
        {/* <Tooltip /> */}
      </ComposedChart>
    </ResponsiveContainer>
  );
}
