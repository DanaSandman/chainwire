import React, { useEffect, useState } from "react";

import {
  LineChart,
  Area,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
//REDUX
import { useSelector } from "react-redux";

export function Chart() {
  const rangeData = useSelector((state) => state.currencyModule.rangeData);
  const [chartWidth, setChartWidth] = useState(window.innerWidth);
  const data = rangeData;

  useEffect(() => {
    window.addEventListener("resize", setWidth);
  }, []);
  const setWidth = () => {
    setChartWidth(window.innerWidth);
  };
  return (
    <div className="chart">
      { 
        <LineChart
          width={chartWidth}
          height={400}
          data={data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line type="monotone" dataKey="pair" stroke="#f70100" fill="#f70100"/>
          <Line type="monotone" dataKey="value" stroke="#f70100" fill="#f70100"/>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="date" />
          <YAxis />
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
          <Tooltip />
        </LineChart>
       }
    </div>
  );
}
