"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import productData from "../public/data/data.json";
import { Search } from "lucide-react";
import Image from "next/image";

const ProductsTable = () => {
  const [products, setProducts] = useState(productData.products);
  return (
    <motion.div
      className="bg-[#1e1e1e] backdrop-blur-md shadow-lg rounded-xl p-4 md:p-6 border border-[$1f1f1f] mx-2 md:mx-0 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-6 md:gap-0">
        <h2 className="text-lg md:text-xl font-semibold text-gray-100 text-center md:text-left">
          Product List
        </h2>

        <div className="relative w-full md:w-auto">
          <input
            type="text"
            placeholder="Search Products....."
            className="bg-[#2f2f2f] text-white placeholder-gray-400 rounded-lg pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-200 text-sm"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              {["Name", "Category", "Price"].map((header) => {
                <th
                  key={header}
                  className="px-3 md:px-6 md:py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider hidden md:table-cell"
                >
                  {header}
                </th>;
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300">
            {products.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="flex flex-col md:table-row mb-4 md:mb-0 border-b md:border-b-0"
              >
                <td className="md:hidden px-3 py-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Image
                        alt="Test"
                        width={36}
                        height={36}
                        className="w-9 h-9 rounded-full"
                      />
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-100">
                          {product.name}
                        </div>
                        <div className="text-xs text-gray-100">{product.price}</div>
                      </div>
                    </div>

                    <div className="flex space-x-1 -mt-1 -mr-1">
                      <button className="text-indigo-600"></button>
                    </div>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default ProductsTable;
