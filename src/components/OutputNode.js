import React from "react";

export default function OutputNode({ data }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded">
      <h3>Output Node</h3>
      <div className="mt-2">
        {data.output ? <p>{data.output}</p> : <p>No output yet...</p>}
      </div>
    </div>
  );
}