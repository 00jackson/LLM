import React from "react";

export default function LLMNode({ data }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded">
      <h3>LLM Node</h3>
      <div>
        <label>API Key:</label>
        <input
          type="password"
          className="border p-2 mt-2 w-full rounded"
          placeholder="Enter API key"
          onChange={(e) => data.setAPIKey(e.target.value)}
        />
      </div>
    </div>
  );
}