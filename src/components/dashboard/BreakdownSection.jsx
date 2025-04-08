import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { businessMetrics } from "../../data";

const COLORS = [
  "#FF5733", // bright orange-red
  "#33FF57", // lime green
  "#33C1FF", // sky blue
  "#FF33F6", // hot pink
  "#FFD133", // bright yellow
  "#8D33FF", // vibrant purple
];

const BreakdownSection = () => {
  const [data, setData] = useState([]);
  const { productRevenue } = businessMetrics;
  useEffect(() => {
    const productRevenueObjKeys = Object.keys(productRevenue);
    const productRevenueArr = productRevenueObjKeys.map(
      (e) => productRevenue[e]
    );
    setData(productRevenueArr.slice(0, 5));
    // console.log(productRevenueArr);
  }, []);

  const handleButton = () => {
    alert("Feature comming soon!");
  };

  return (
    <div className="bg-[#161616] border border-gray-800 text-white p-4 rounded-md w-full h-full relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm text-gray-300">
          Overall <br /> Breakdown
        </h2>
        <button onClick={handleButton} className="flex items-center">
          <ChevronDown color="#2BE092" size={16} />
          <span className="text-sm ms-1">By Date</span>
        </button>
      </div>

      <div className="flex justify-center mb-6">
        <div className=""></div>
      </div>

      <div className="w-full h-64 absolute top-10 left-0">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={data}
              startAngle={190}
              endAngle={-10}
              innerRadius={90}
              outerRadius={100}
              paddingAngle={0}
              dataKey="total"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="flex flex-col items-center justify-center absolute w-full left-0 top-[120px]">
        <span className="text-lg text-center font-semibold">38.4%</span>
        <span className="text-center text-sm">Weekly Analytics</span>
      </div>

      <div className="space-y-4 mt-40">
        {data.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-start border-b border-gray-700 pb-2"
          >
            <div className="flex items-center space-x-2">
              <span
                className="p-[6px] rounded-sm"
                style={{ backgroundColor: COLORS[i] }}
              ></span>
              <div>
                <div className="text-sm font-medium">{item.name}</div>
                <div className="text-xs text-gray-400">
                  ₹{item.total.toLocaleString()}
                </div>
              </div>
            </div>
            <div className="text-sm bg-[#2A2A2A] px-2 py-0.5 rounded text-white">
              {/* {item.percent} */} 10%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreakdownSection;
