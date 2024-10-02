import React from "react";
import { CirclePlay } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="px-10 py-3 flex justify-between items-center shadow-lg border">
      {/* Logo */}
      <div className="text-green-700 font-bold text-xl">AGI</div>

      {/* Buttons */}
      <div className="flex items-center space-x-4">
      <button className="bg-gray-400 text-white px-3 py-1 rounded-md hover:bg-blue-500">
          Deploy
        </button>
        {/* Run Button */}
        <button className="flex items-center bg-green-700 text-white px-3 py-1 rounded-md hover:bg-green-800">
          <CirclePlay className="w-5 h-5 mr-2" />
          Run
        </button>
      </div>
    </nav>
  );
}