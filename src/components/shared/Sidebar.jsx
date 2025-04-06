import { useState } from "react";
import {
  Home,
  BarChart2,
  Send,
  Truck,
  Package,
  RotateCcw,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  Ellipsis,
} from "lucide-react";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");

  const menu = [
    { name: "Dashboard", icon: <Home size={18} /> },
    { name: "Cohort Analytics", icon: <BarChart2 size={18} /> },
    { name: "Marketing", icon: <Send size={18} /> },
    { name: "Shipping", icon: <Truck size={18} /> },
    { name: "Products", icon: <Package size={18} /> },
    { name: "Returns", icon: <RotateCcw size={18} /> },
  ];

  const supportMenu = [
    { name: "Settings", icon: <Settings size={18} /> },
    { name: "Help", icon: <HelpCircle size={18} /> },
    { name: "Log Out", icon: <LogOut size={18} /> },
  ];

  return (
    <div className="bg-[#0D0F12]/60 backdrop-blur-sm text-white h-screen w-64 flex flex-col justify-between py-6 px-4 shadow-md rounded-r-3xl">
      <div>
        <img
          src="/images/logo01.png"
          alt="Profit First Logo"
          className="h-12 mt-4 mb-6"
        />
        <div className="flex items-center gap-3 py-2 mb-6 border-y border-gray-400">
          <div className="w-10 h-10 rounded-full bg-gray-200" />
          <div>
            <p className="text-sm font-semibold">
              {"TRP Watch".slice(0, 10)}...
            </p>
            <p className="text-xs text-gray-400">Admin Store</p>
          </div>
          <button className="ms-auto">
            <Ellipsis />
          </button>
        </div>

        <div className="text-sm">
          <p className="text-gray-200 tracking-wide mb-3 ms-3">General</p>
          {menu.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center justify-between gap-3 px-3 py-2 w-full rounded-lg hover:bg-[#1F242B] transition ${
                active === item.name ? "text-p1" : ""
              }`}
            >
              <span className="flex gap-2 items-center">
                {item.icon}
                {item.name}
              </span>
              <ChevronRight size={18} />
            </button>
          ))}
        </div>
      </div>

      <div className="text-sm">
        <p className="text-gray-200 tracking-wide mb-3 ms-3">Support</p>
        {supportMenu.map((item) => (
          <button
            key={item.name}
            className="flex items-center justify-between gap-3 px-3 py-2 w-full rounded-lg hover:bg-[#1F242B] transition"
          >
            <span className="flex gap-2 items-center">
              {item.icon}
              {item.name}
            </span>
            <ChevronRight size={18} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
