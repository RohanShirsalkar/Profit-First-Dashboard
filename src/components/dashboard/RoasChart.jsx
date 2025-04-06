import { ChevronDown } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "JAN", meta: 10, google: 50 },
  { month: "FEB", meta: 40, google: 45 },
  { month: "MAR", meta: 80, google: 50 },
  { month: "APR", meta: 140, google: 60 },
  { month: "MAY", meta: 200, google: 90 },
  { month: "JUN", meta: 180, google: 130 },
  { month: "JUL", meta: 150, google: 160 },
  { month: "AUG", meta: 120, google: 200 },
  { month: "SEP", meta: 110, google: 240 },
];

const RoasChart = () => {
  return (
    <div className="bg-[#161616] border border-gray-800 rounded-md p-4 text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold ms-6">Meta & Google ROAS</h2>
        <button className="flex items-center">
          <ChevronDown color="#2BE092" size={16} />
          <span className="text-sm ms-2">This Year</span>
        </button>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart
          data={data}
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
            dataKey="meta"
            stroke="#00B2FF"
            fillOpacity={1}
            fill="url(#metaColor)"
          />
          <Area
            type="monotone"
            dataKey="google"
            stroke="#8A2BE2"
            fillOpacity={1}
            fill="url(#googleColor)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className="flex justify-center space-x-6 mt-2 text-sm text-gray-300">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-[#00B2FF] rounded-sm" />
          <span>Meta</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-[#8A2BE2] rounded-sm" />
          <span>Google</span>
        </div>
      </div>
    </div>
  );
};

export default RoasChart;
