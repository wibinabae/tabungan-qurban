'use client';
import {
  Menu,
  Home,
  DollarSign,
  Settings,
  ShoppingBag,
  Mail,
  Users,
  Bell,
  Info
} from "lucide-react";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";

const ICONS = {
  Menu,
  Home,
  DollarSign,
  Settings,
  ShoppingBag,
  Mail,
  Users,
  Bell,
  Info
};
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen]=useState(true);
  const [sidebarItems, setSidebarItems] = useState([]);
  const pathname = usePathname();

  useEffect(() => {
    fetch("data/data.json")
      .then((res) => res.json())
      .then((data) => setSidebarItems(data.sidebarItems));
  });
  return (
    <div className={`relative z-10 transition-all duration-300 ease-in-out flex-shrink-0 ${isSidebarOpen ? "w-64": "w-20"}`}>
      <div className="h-full bg-[#1e1e1e] backdrop-blur-md p-4 flex flex-col border-r border-[#2f2f2f]">
        <button onClick={()=>setIsSidebarOpen(!isSidebarOpen)} className="p-2 rounded-full hover:bg-[#2f2f2f] transition-colors max-w-fit cursor-pointer">
          <Menu size={24} className="text-white" />
        </button>
        <nav className="mt-8 flex-grow">
          {/*{sidebarItems.map((item) => {
            const IconComponent = ICONS[item.icon];
            return (
             <Link key={item.name} href={item.href}>
                <div
                  className={`flex items-center p-4 text-sm font-medium rounded-lg hover:bg-[#2f2f2f2f] transition-colors mb-2 ${
                    pathname === item.href ? "bg-[#2f2f2f]" : ""
                  }`}
                >
                  <IconComponent size={20} style={{ minWidth:"20px" }} />
                  <span className="ml-4 whitespace-nowrap">{item.name}</span>
                </div>
              </Link>
            
            );
          })}*/}
          <a href="#" className="text-lg text-gray-400 font-bold hover:text-white flex mb-3"><Home size={24}/>{isSidebarOpen &&("Test")}</a>
          <a href="#" className="text-lg text-gray-400 font-bold hover:text-white flex mb-3"><DollarSign size={24}/>{isSidebarOpen &&("Test")}</a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
