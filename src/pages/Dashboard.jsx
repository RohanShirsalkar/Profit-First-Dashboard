import React, { useEffect, useState } from "react";
import StatsCard from "../components/dashboard/StatsCard";
import { ChevronDown } from "lucide-react";
import RoasChart from "../components/dashboard/RoasChart";
import BreakdownSection from "../components/dashboard/BreakdownSection";
import MarketingDataCard from "../components/dashboard/MarketingDataCard";
import { motion } from "motion/react";
import SearchBar from "../components/shared/SearchBar";
import { businessMetrics } from "../data";

const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const data = businessMetrics;

  useEffect(() => {
    setStats([
      {
        label: "Revenue",
        value: "₹" + Math.round(data.totalRevenue).toLocaleString(),
      },
      { label: "Orders", value: Math.round(data.totalOrders) },
      {
        label: "Ads Spend",
        value: "₹" + Math.round(data.adsSpent).toLocaleString(),
      },
      {
        label: "Shipping Spend",
        value: "₹" + Math.round(data.shippingSpent).toLocaleString(),
      },
      {
        label: "Product Cost",
        value: "₹" + Math.round(data.productCost).toLocaleString(),
      },
      {
        label: "Gross Profit",
        value: "₹" + Math.round(data.grossProfit).toLocaleString(),
      },
      {
        label: "Net Profit",
        value: "₹" + Math.round(data.netProfit).toLocaleString(),
      },
      { label: "AOV", value: "₹" + Math.round(data.aov).toLocaleString() },
      { label: "ROAS", value: Math.round(data.roas) },
      { label: "POAS", value: Math.round(data.poas) },
    ]);
  }, []);

  const handleButton = () => {
    alert("Feature comming soon!");
  };

  return (
    <section className="mt-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="flex items-center justify-between mt-6"
      >
        <SearchBar />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className="flex items-center justify-between mt-6"
      >
        <h1 className="text-4xl font-semibold ">Dashboard</h1>
        <button className="flex items-center" onClick={handleButton}>
          <ChevronDown color="#2BE092" size={16} />
          <span className="text-sm ms-1">By Date</span>
        </button>
      </motion.div>

      <div className="mt-4 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <StatsCard stats={stats.slice(0, 5)} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <StatsCard stats={stats.slice(5, 10)} />
        </motion.div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="w-full md:w-5/6"
        >
          <RoasChart />
          <div className="flex flex-col md:flex-row gap-4 mt-4 w-full">
            <MarketingDataCard />
            <MarketingDataCard />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/4"
        >
          <BreakdownSection />
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;
