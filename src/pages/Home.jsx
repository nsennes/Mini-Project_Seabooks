import React, { useState } from "react";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <>
      <Navbar />
      <div
        className="bg-gradient-to-b from-white via-[#0076CB] to-[#20316C] animate-gradient"
      >
        <div className="flex items-center justify-center h-screen">
          <div className="text-white text-center">
            <h1 className="w-full text-4xl font-bold">
              Welcome to, <span className="block">Seabooks</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
