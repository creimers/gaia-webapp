import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Area,
  CartesianGrid,
  Tooltip,
  ComposedChart,
  Label,
} from "recharts";

import { Datapoint } from "./data";

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean | undefined;
  payload?: any;
}) => {
  if (active && payload && payload.length) {
    console.log(payload);
    return (
      <div className="bg-white p-4 shadow rounded z-50">
        <p>Lime rate: {payload[0].payload.tha} ton/ha</p>
        <p>
          Yield response: {Number(payload[payload.length - 1].value).toFixed(2)}{" "}
          ton/ha
        </p>
      </div>
    );
  }

  return null;
};

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
    <div className="relative">
      <div className="absolute top-10 left-24 z-10">
        <div className="flex justify-between space-x-4">
          <span>Output price:</span>
          <span className="font-mono">{outputPrice} USD/MT</span>
        </div>
        <div className="flex justify-between">
          <span>Lime price:</span>{" "}
          <span className="font-mono">{limePrice} USD/MT</span>
        </div>
      </div>
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
              value: "Lime application rate (ton/ha)",
              offset: -10,
              position: "insideBottom",
            }}
          />
          <YAxis domain={[0, 3]} tickCount={4} type="number" allowDataOverflow>
            <Label
              value="Crop yield response to liming (ton/ha)"
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
          <CartesianGrid stroke="white" />
          <Line
            dataKey="yield_response"
            stroke="black"
            strokeWidth="2"
            isAnimationActive={false}
            dot={{ r: 5, fill: "black" }}
          />

          <Tooltip content={(props) => <CustomTooltip {...props} />} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
