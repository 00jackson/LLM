import React from "react";
import { FileInput, Cpu, FileOutput, AlignJustify } from "lucide-react";

export default function ComponentsSidebar() {
  return (
    <div className="w-1/6 h-[795px] p-4 bg-white flex flex-col items-start border m-10 rounded-xl">
      <h2 className="text-xl font-semibold mb-2 text-black border-b w-full py-2">Components</h2>
      <span className="mb-4 text-gray-400">Drag and Drop</span>
      <div className="flex flex-col space-y-4 w-full">
        <button className="border px-4 py-2 rounded-md w-full flex items-center justify-between min-h-[50px]">
          <span className="flex items-center">
            <FileInput className="mr-2" /> Input
          </span>
          <AlignJustify className="text-gray-400"/>
        </button>
        <button className="border px-4 py-2 rounded-md w-full flex items-center justify-between min-h-[50px]">
          <span className="flex items-center">
            <Cpu className="mr-2" /> LLM
          </span>
          <AlignJustify className="text-gray-400"/>
        </button>
        <button className="border px-4 py-2 rounded-md w-full flex items-center justify-between min-h-[50px]">
          <span className="flex items-center">
            <FileOutput className="mr-2" /> Output
          </span>
          <AlignJustify className="text-gray-400"/>
        </button>
      </div>
    </div>
  );
}