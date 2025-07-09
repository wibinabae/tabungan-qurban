"use client";
import React from "react";
import StatCard from "@/components/StatCard.jsx"
import Chart from "@/components/Chart.jsx"
import { DollarSign, User } from "lucide-react";
import {motion} from "framer-motion"

const OverviewPage = () => {
  return (
    <div className="flex-2 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-4 px-4 lg:px-7">
        <motion.div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        initial={{ opacity:0,y:20 }}
        animate={{ opacity:1,y:0 }}
        transition={{ duration: 1 , "ease":"easeInOut"}}
        >
          
            <StatCard name="Total" icon={User} value="$ 100" />
            <StatCard name="Total" icon={User} value="$ 100" />
            <StatCard name="Total" icon={User} value="$ 100" />
        </motion.div>

        <div className="grid gr-cols-1 lg:grid-cols-2 gap-8">
            <Chart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
