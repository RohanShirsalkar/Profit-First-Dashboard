import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import campaginData from "../../../json data/frontend developer/meta/campaign.json" with { type: "josn" };
import { monthNames } from "../../utils/utils";

const RoasChart = () => {
  const [chartData, setCartData] = useState([])

  useEffect(() => {
    setCartData([])
    campaginData.data.forEach((item) => {
      const dateObj  = new Date(item.date_start);
      setCartData((data) => [...data, {
        month: monthNames[dateObj.getMonth()],
        facebook: item.platform === "Facebook" ? item.spend : 0,
        instagram: item.platform === "Instagram" ? item.spend : 0,
      }])
    })
  },[])
  
  // console.log(chartData)
  const handleButton = () => {
    alert("Feature comming soon!")
  };
  return (
    <div className="bg-[#161616] border border-gray-800 rounded-md p-4 text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold ms-6">Facebook & Instagram ROAS</h2>
        <button onClick={handleButton} className="flex items-center">
          <ChevronDown color="#2BE092" size={16} />
          <span className="text-sm ms-2">This Year</span>
        </button>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="metaColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00B2FF" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#00B2FF" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="googleColor" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8A2BE2" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#8A2BE2" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" stroke="#aaa" opacity={0.5} />
          <YAxis stroke="#aaa" opacity={0.5} />
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333" />
          <Tooltip contentStyle={{ backgroundColor: "#111", border: "none" }} />
          <Area
            type="monotone"
            dataKey="facebook"
            stroke="#00B2FF"
            fillOpacity={1}
            fill="url(#metaColor)"
          />
          <Area
            type="monotone"
            dataKey="instagram"
            stroke="#8A2BE2"
            fillOpacity={1}
            fill="url(#googleColor)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex justify-center space-x-6 mt-2 text-sm text-gray-300">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-[#00B2FF] rounded-sm" />
          <span>Facebook</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-[#8A2BE2] rounded-sm" />
          <span>Instagram</span>
        </div>
      </div>
    </div>
  );
};

export default RoasChart;
