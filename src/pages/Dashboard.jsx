import React from "react";
import StatsCard from "../components/dashboard/StatsCard";
import { ChevronDown } from "lucide-react";
import RoasChart from "../components/dashboard/RoasChart";
import BreakdownSection from "../components/dashboard/BreakdownSection";
import MarketingDataCard from "../components/dashboard/MarketingDataCard";
import { motion } from "motion/react";
import SearchBar from "../components/shared/SearchBar";

const Dashboard = () => {
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
        <button className="flex items-center">
          <ChevronDown color="#2BE092" size={16} />
          <span className="text-sm">By Date</span>
        </button>
      </motion.div>

      <div className="mt-4 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <StatsCard />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <StatsCard />
        </motion.div>
      </div>
      <div className="flex gap-4 mt-4">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="w-5/6"
        >
          <RoasChart />
          <div className="flex gap-4 mt-4 w-full">
            <MarketingDataCard />
            <MarketingDataCard />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="w-1/4"
        >
          <BreakdownSection />
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;
