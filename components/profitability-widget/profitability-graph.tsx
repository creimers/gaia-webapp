"use client";

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

function calculateNetPresentValue(
  decayPeriod: number,
  discountRate: number,
  limePrice: number,
  outputPrice: number,
  datapoint: Datapoint
) {
  const yieldResponse = datapoint.yield_response;
  const priceOfLimeApplication = datapoint.tha * limePrice;
  const valueForYears = [...Array(decayPeriod)].map((_, year) => {
    const limeFactor = 1 - year * (1 / decayPeriod); // ✅
    const correctedYieldResponse = yieldResponse * limeFactor;
    const additionalIncome = correctedYieldResponse * outputPrice;
    const costs =
      year === 0
        ? priceOfLimeApplication
        : limePrice / (1 + discountRate ** year);
    const value = additionalIncome - costs;
    // console.log({
    //   tha: datapoint.tha,
    //   year,
    //   additionalIncome,
    //   costs,
    //   correctedYieldResponse,
    //   limeFactor,
    //   limeRate: datapoint.tha,
    //   value,
    // });
    return value;
  });
  const npv = valueForYears.reduce((acc, value) => acc + value, 0);
  return npv;
}

function calculateNetRevenueFirstYear(
  limePrice: number,
  outputPrice: number,
  datapoint: Datapoint
) {
  return datapoint.yield_response * outputPrice - datapoint.tha * limePrice;
}

type Props = {
  data: Datapoint[];
  outputPrice: number;
  limePrice: number;
  decayPeriod: number;
  discountRate: number;
};

export default function ProfitGraph({
  data,
  outputPrice,
  limePrice,
  decayPeriod,
  discountRate,
}: Props) {
  //   const limeFactorYear1 = 1;
  //   const limeFactorYear2 = Math.max(limeFactorYear1 - 1 / decayPeriod, 0);
  //   const limeFactorYear3 = Math.max(limeFactorYear2 - 1 / decayPeriod, 0);
  //   const limeFactorYear4 = Math.max(limeFactorYear3 - 1 / decayPeriod, 0);
  //   const limeFactorYear5 = Math.max(limeFactorYear4 - 1 / decayPeriod, 0);

  //   const limeFactors = [
  //     limeFactorYear1,
  //     limeFactorYear2,
  //     limeFactorYear3,
  //     limeFactorYear4,
  //     limeFactorYear5,
  //   ];

  //   console.log({ yyy });

  // yield diff for each datapoint

  //   console.log(data);
  //   const correctedYieldResponses = data.map((d, i) => ({
  //     // yd: d.yield_response * limeFactors[i],
  //     ...d,
  //     yield_response_1: d.yield_response * limeFactors[0],
  //     yield_response_2: d.yield_response * limeFactors[1],
  //     yield_response_3: d.yield_response * limeFactors[2],
  //     yield_response_4: d.yield_response * limeFactors[3],
  //     yield_response_5: d.yield_response * limeFactors[4],
  //   }));

  //   //   console.log(correctedYieldResponses);
  //   //   console.log(rumba);

  //   const nvp = correctedYieldResponses.map((d, i) => {
  //     const valueYear1 = d.yield_response_1 * outputPrice;
  //     const valueYear2 = d.yield_response_2 * outputPrice;
  //     const valueYear3 = d.yield_response_3 * outputPrice;
  //     const valueYear4 = d.yield_response_4 * outputPrice;
  //     const valueYear5 = d.yield_response_5 * outputPrice;
  //     const costsYear1 = limePrice * d.tha;
  //     const costsYear2 = limePrice / discountRate ** 2;
  //     const costsYear3 = limePrice / discountRate ** 3;
  //     const costsYear4 = limePrice / discountRate ** 4;
  //     const costsYear5 = limePrice / discountRate ** 5;
  //   });

  //   const netPresentValues = correctedYieldResponses.map((d, i) => {
  //     const discountFactor = Math.pow(1 + discountRate, i);
  //     return (d.yd * outputPrice) / discountFactor;
  //   });
  //   console.log(netPresentValues);
  //   return null;

  const withRevenueAndNvp = data.map((d) => ({
    ...d,
    npv: calculateNetPresentValue(
      decayPeriod,
      discountRate,
      limePrice,
      outputPrice,
      d
    ),
    netRevenueFirstYear: calculateNetRevenueFirstYear(
      limePrice,
      outputPrice,
      d
    ),
    red_y: 0,
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={[...withRevenueAndNvp, { tha: 8, red_y: 0 }]}
        margin={{ top: 15, right: 5, bottom: 15, left: 5 }}
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
        <YAxis />
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
        {/* <Line
          dataKey="npv"
          stroke="black"
          strokeWidth="3"
          strokeDasharray="3 3"
          isAnimationActive={false}
          dot={{ r: 5, fill: "black", strokeDasharray: "0" }}
        /> */}
        {/* <Tooltip /> */}
        {/* <Legend verticalAlign="top" /> */}
      </LineChart>
    </ResponsiveContainer>
  );
}
