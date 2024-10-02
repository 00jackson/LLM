import React from "react";
import WorkflowCanvas from "./components/WorkflowCanvas";
import ComponentsSidebar from "./components/Sidebar";
import "tailwindcss/tailwind.css";
import Navbar from "./components/Navbar";

function App() {
  return (
<div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-grow bg-gray-50">
        <ComponentsSidebar />
        <div className="flex-grow">
          <WorkflowCanvas />
        </div>
      </div>
    </div>
  );
}

export default App;