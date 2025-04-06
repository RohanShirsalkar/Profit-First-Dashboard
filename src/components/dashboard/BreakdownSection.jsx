import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "A", value: 400 },
  { name: "B", value: 300 },
  { name: "C", value: 300 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const breakdownData = [
  {
    label: "CASIO-VINTAGE-168",
    value: "₹4,90,376",
    percent: "35%",
    color: "#62F08B",
  },
  {
    label: "G-SHOCK-2100",
    value: "₹2,80,215",
    percent: "20%",
    color: "#00C9FF",
  },
  {
    label: "FOSSIL OLIVE",
    value: "₹1,54,118",
    percent: "11%",
    color: "#ffffff",
  },
  {
    label: "G-SHOCK-Z 2100",
    value: "₹1,19,091",
    percent: "8.5%",
    color: "#62F08B",
  },
  {
    label: "G-SHOCK OAK GA 2100",
    value: "₹98,075",
    percent: "7%",
    color: "#00C9FF",
  },
  { label: "ORDERS", value: "₹2,59,200", percent: "18.5%", color: "#00C9FF" },
];

const BreakdownSection = () => {
  return (
    <div className="bg-[#161616] border border-gray-800 text-white p-4 rounded-md w-full h-full relative">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-sm text-gray-300">
          Overall <br /> Breakdown
        </h2>
        <span className="text-sm text-gray-400">By Date ⌄</span>
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
              dataKey="value"
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
        {breakdownData.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-start border-b border-gray-700 pb-2"
          >
            <div className="flex items-center space-x-2">
              <span
                className="w-2.5 h-2.5 rounded-sm"
                style={{ backgroundColor: item.color }}
              />
              <div>
                <div className="text-sm font-medium">{item.label}</div>
                <div className="text-xs text-gray-400">{item.value}</div>
              </div>
            </div>
            <div className="text-sm bg-[#2A2A2A] px-2 py-0.5 rounded text-white">
              {item.percent}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreakdownSection;
