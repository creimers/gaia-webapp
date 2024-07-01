"use client";

import {
  ResponsiveContainer,
  LineChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Label,
  Tooltip,
  ComposedChart,
} from "recharts";
import { Datapoint } from "./data";

function calculateNetPresentValue(
  decayPeriod: number,
  discountRate: number,
  limePrice: number,
  outputPrice: number,
  yieldResponse: number,
  limeRate: number
) {
  const priceOfLimeApplication = limeRate * limePrice;
  const valueForYears = [...Array(decayPeriod)].map((_, year) => {
    const limeFactorYear = 1 - year / decayPeriod;

    const yieldResponseYear = yieldResponse * limeFactorYear;
    const benefit =
      (yieldResponseYear * outputPrice) / (1 + discountRate) ** year;
    return benefit;
  });
  const totalBenefits = valueForYears.reduce((acc, value) => acc + value, 0);
  return totalBenefits - priceOfLimeApplication;
}

function calculateNetRevenueFirstYear(
  limePrice: number,
  outputPrice: number,
  yieldResponse: number,
  limeRate: number
) {
  return yieldResponse * outputPrice - limeRate * limePrice;
}

const CustomTooltip = ({
  active,
  payload,
}: {
  active: boolean;
  payload: any;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 shadow rounded z-50">
        <p>Lime rate: {payload[0].payload.tha} ton/ha</p>
        <p>
          First year profit: {parseInt(payload[0].payload.netRevenueFirstYear)}{" "}
          USD/ha
        </p>
        <p>Net present value: {parseInt(payload[0].payload.npv)} USD/ha</p>
      </div>
    );
  }

  return null;
};

type Props = {
  data: Datapoint[];
  outputPrice: number;
  limePrice: number;
  decayPeriod: number;
  discountRate: number;
  showConficenceInterval?: boolean;
};

export default function ProfitGraph({
  data,
  outputPrice,
  limePrice,
  decayPeriod,
  discountRate,
  showConficenceInterval,
}: Props) {
  const withRevenueAndNvp = data.map((d) => {
    const npv = calculateNetPresentValue(
      decayPeriod,
      discountRate,
      limePrice,
      outputPrice,
      d.yield_response,
      d.tha
    );

    const npvLower = calculateNetPresentValue(
      decayPeriod,
      discountRate,
      limePrice,
      outputPrice,
      d.yield_response_lower,
      d.tha
    );
    const npvUpper = calculateNetPresentValue(
      decayPeriod,
      discountRate,
      limePrice,
      outputPrice,
      d.yield_response_upper,
      d.tha
    );
    const npvCI = [npvUpper, npvLower];

    const netRevenueFirstYear = calculateNetRevenueFirstYear(
      limePrice,
      outputPrice,
      d.yield_response,
      d.tha
    );
    const netRevenueFirstYearLower = calculateNetRevenueFirstYear(
      limePrice,
      outputPrice,
      d.yield_response_lower,
      d.tha
    );
    const netRevenueFirstYearUpper = calculateNetRevenueFirstYear(
      limePrice,
      outputPrice,
      d.yield_response_upper,
      d.tha
    );

    const netRevenueFirstYearCI = [
      netRevenueFirstYearUpper,
      netRevenueFirstYearLower,
    ];

    return {
      ...d,
      npv,
      npvCI,
      netRevenueFirstYear,
      netRevenueFirstYearCI,
      red_y: 0,
    };
  });

  return (
    <div className="space-y-4 relative">
      <div className="absolute bottom-32 sm:bottom-24 left-20 md:left-24 z-0">
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
          data={[...withRevenueAndNvp, { tha: 8, red_y: 0 }]}
          margin={{ top: 15, right: 5, bottom: 15, left: 5 }}
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
          <YAxis type="number">
            <Label
              value="Profitability of liming (USD/ha)"
              angle={-90}
              position="insideLeft"
              offset={10}
              style={{ textAnchor: "middle" }}
            />
          </YAxis>
          {showConficenceInterval && (
            <>
              <Area
                dataKey="npvCI"
                fill="gray"
                fillOpacity="0.1"
                // type="monotone"
                stroke="transparent"
                isAnimationActive={false}
              />
              <Area
                dataKey="netRevenueFirstYearCI"
                fill="green"
                fillOpacity="0.1"
                // type="monotone"
                stroke="transparent"
                isAnimationActive={false}
              />
            </>
          )}
          <CartesianGrid />
          <Line
            dataKey="red_y"
            stroke="red"
            strokeWidth="1"
            isAnimationActive={false}
            dot={false}
          />
          <Line
            dataKey="netRevenueFirstYear"
            stroke="green"
            strokeWidth="2"
            isAnimationActive={false}
            dot={{ r: 5, fill: "green" }}
          />
          <Line
            dataKey="npv"
            stroke="black"
            strokeWidth="3"
            strokeDasharray="3 3"
            isAnimationActive={false}
            dot={{ r: 5, fill: "black", strokeDasharray: "0" }}
          />
          {/* @ts-ignore */}
          <Tooltip content={<CustomTooltip />} />
          {/* <Legend verticalAlign="top" /> */}
        </ComposedChart>
      </ResponsiveContainer>
      <div className="flex space-x-6 justify-center text-sm">
        <div className="flex items-center space-x-2">
          <span className="bg-green-600 h-0.5 w-4"></span>
          <span>First-year profit</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1">
            <span className="bg-black h-0.5 w-2"></span>
            <span className="bg-black h-0.5 w-2"></span>
            <span className="bg-black h-0.5 w-2"></span>
          </div>
          <span>Net Present Value profit</span>
        </div>
      </div>
    </div>
  );
}
