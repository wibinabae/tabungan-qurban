"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import StatCard from "@/components/StatCard";
import ProductsTable from "@/components/ProductsTable";

const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
        initial={{ opacity:0, y:20 }}
        animate={{ opacity:1, y:0 }}
        transition={{ duration:1 }}
        >
            <StatCard name="Total Produk" icon={ShoppingBag} value={"4,321"}/>
            <StatCard name="Total Produk" icon={ShoppingBag} value={"4,321"}/>
            <StatCard name="Total Produk" icon={ShoppingBag} value={"4,321"}/>
            <StatCard name="Total Produk" icon={ShoppingBag} value={"4,321"}/>
        </motion.div>

        <ProductsTable />
      </main>
    </div>
  );
};

export default ProductsPage;
