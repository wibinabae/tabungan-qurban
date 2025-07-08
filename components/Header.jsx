import React from "react";
import Image from "next/image";
import id from "../public/images/id.png"
import { Bell } from "lucide-react";
import profile from "../public/images/profile.jpg"

const Header = () => {
  return (
    <header className="bg-[#1e1e1e] shadow-lg border-b border-[#1f1f1f1] mx-4 sm:mx-6 lg:mx-8 mt-4 mb-2 rounded-lg">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 flex items-center justify-between">
        <h1 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold">
          Dashboard
        </h1>
        <div className="flex items-center space-x-3 sm:space-x-6">
          <Image
            src={id}
            alt="country flag"
            width={25}
            height={30}
            className="rounded-full shadow-md cursor-pointer"
          />
          <div className="relative">
            <Bell className="w-5 sm:w-6 h-5 sm:h-6 text-gray-300 cursor-pointer hover:text-white"/>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Image src={profile} alt="Profile Picture" width={35} height={35} className="rounded-full border border-gray-300" />
          </div>
          <span className="hidden sm:block text-gray-200 hover:text-white">Syarif</span>
        </div>
      </div>
    </header>
  );
};
export default Header;
