import React, { useState } from "react";
import ReactFlow, { addEdge, MiniMap, Controls, Background } from "react-flow-renderer";
import "tailwindcss/tailwind.css";

const initialElements = [];

export default function WorkflowCanvas() {
  const [elements, setElements] = useState(initialElements);

  const onConnect = (params) => setElements((els) => addEdge(params, els));

  return (
    <div className="h-full flex justify-end mr-10 mt-5">
      {/* This will take up 75% of the width and align to the right */}
      <div className="h-full w-full">
        <ReactFlow
          elements={elements}
          onConnect={onConnect}
          style={{ width: "100%", height: "90%" }}
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
}