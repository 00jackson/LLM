import React from "react";

export default function InputNode({ data }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded">
      <h3>Input Node</h3>
      <input
        type="text"
        className="border p-2 mt-2 w-full rounded"
        placeholder="Enter input here..."
        onChange={(e) => data.setInput(e.target.value)}
      />
    </div>
  );
}