import React, { useState } from "react";

export default function ResponsiveToggle() {
  const [device, setDevice] = useState("desktop");

  const getWidth = () => {
    switch (device) {
      case "mobile": return "w-[375px]";
      case "tablet": return "w-[768px]";
      default: return "w-full";
    }
  };

  return (
    <div className="my-4">
      <div className="mb-2 flex gap-2">
        {['mobile', 'tablet', 'desktop'].map(d => (
          <button
            key={d}
            onClick={() => setDevice(d)}
            className={`px-3 py-1 rounded border ${device === d ? "bg-blue-500 text-white" : "bg-gray-100"}`}
          >
            {d.charAt(0).toUpperCase() + d.slice(1)}
          </button>
        ))}
      </div>
      <div className={`mx-auto border bg-white p-4 ${getWidth()} transition-all duration-300 rounded shadow`}> 
        {/* Rendered playground components go here */}
        <p className="text-center text-gray-500">Preview Area</p>
      </div>
    </div>
  );
}