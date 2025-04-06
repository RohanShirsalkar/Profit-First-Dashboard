import React from "react";

const metrics = [
  { label: "Amount Spend", value: "50%" },
  { label: "CTR", value: "50%" },
  { label: "CPC", value: "50%" },
  { label: "ROAS", value: "50%" },
];

const MarketingDataCard = () => {
  return (
    <div className="bg-[#161616] border border-gray-800 text-white rounded-md p-8 w-full h-full shadow-md">
      <div className="flex items-center gap-2 mb-6">
        {/* <div className="w-5 h-5 bg-blue-500 rounded-sm" /> */}
        <img src="/icons/graph_rectange.svg" alt="icon" className="w-7" />
        <h2 className="text-lg font-semibold">Marketing Data</h2>
      </div>

      <div className="flex justify-between mb-10">
        {metrics.map((item, index) => (
          <div key={index} className="w-1/4">
            <div className="text-blue-500 font-bold text-lg">{item.value}</div>
            <div className="text-xs text-gray-400">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center text-xs text-gray-400">
        <div className="flex items-center gap-1">
          <div className="text-blue-500 bg-[#1E1E1E] px-2 py-2 rounded">
            ↑ +12%
          </div>
          <span>Yesterday Report</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="text-blue-500 bg-[#1E1E1E] px-2 py-2 rounded">
            ↑ +12%
          </div>
          <span>Today Report</span>
        </div>
      </div>
    </div>
  );
};

export default MarketingDataCard;
