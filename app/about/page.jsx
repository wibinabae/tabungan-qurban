"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, ShoppingBag, User, View, Wallet2 } from "lucide-react";
import StatCard from "@/components/StatCard";

const AboutPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
        initial={{ opacity:0, y:20 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
        >
            <StatCard name="Total Project" icon={Briefcase} value={"30"}/>
            <StatCard name="Total Pendapatan" icon={Wallet2} value={"Rp 5 M"}/>
            <StatCard name="Total Pelanggan" icon={User} value={"30"}/>
            <StatCard name="Total View" icon={View} value={"7,415"}/>
        </motion.div>

      </main>
    </div>
  );
};

export default AboutPage;
