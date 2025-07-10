"use client";
import React from "react";
import { motion } from "framer-motion";
import StatCard from "@/components/StatCard";
import { ShoppingBag } from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
       
          <div className="bg-white rounded-lg shadow-xl w-full max-w-5xl overflow-hidden flex flex-col md:flex-row">
            {/* Foto Profil */}
            <div className="md:w-1/2 bg-gradient-to-br from-sky-950  to-gray-200 flex items-center justify-center p-8">
              <img
                src="/images/syar.PNG"
                alt="Profile"
                className="rounded-full w-48 h-48 object-cover border-4 border-white shadow-md"
              />
            </div>

            {/* Info Profil */}
            <div className="md:w-1/2 p-8 flex flex-col justify-center text-center md:text-left">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Syarif Hidayat
              </h1>
              <p className="text-gray-600 mb-4">
                Frontend Developer | React & Tailwind Enthusiast | Tech Explorer
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://github.com/wibinabae"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-black transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.727-4.033-1.415-4.033-1.415-.547-1.387-1.337-1.756-1.337-1.756-1.092-.747.083-.732.083-.732 1.207.085 1.84 1.24 1.84 1.24 1.073 1.84 2.813 1.31 3.5 1 .11-.777.42-1.31.763-1.61-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.47-2.382 1.237-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 0 1 3-.405c1.02.004 2.045.138 3 .405 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.807 5.625-5.48 5.922.43.372.823 1.103.823 2.222v3.293c0 .32.192.694.8.576C20.565 21.795 24 17.293 24 12c0-6.63-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/syarifh-02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-blue-900 transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452H17.21v-5.569c0-1.327-.025-3.036-1.849-3.036-1.851 0-2.135 1.445-2.135 2.937v5.668h-3.24V9h3.111v1.561h.045c.434-.823 1.494-1.688 3.074-1.688 3.29 0 3.894 2.165 3.894 4.977v6.602zM5.337 7.433a1.882 1.882 0 1 1 .001-3.765 1.882 1.882 0 0 1-.001 3.765zM6.766 20.452H3.909V9h2.857v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.555C0 23.229.792 24 1.771 24h20.451C23.2 24 24 23.229 24 22.278V1.723C24 .771 23.2 0 22.222 0z" />
                  </svg>
                </a>
              </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
