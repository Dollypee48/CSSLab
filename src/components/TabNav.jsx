import React from "react";

export default function TabNav({ current, onChange }) {
  const tabs = [
    { id: "box", label: "Box Model" },
    { id: "flex", label: "Flexbox" },
    { id: "grid", label: "Grid" },
    { id: "editor", label: "Live Editor" },
  ];

  return (
    <div
      className="flex gap-2 sm:gap-4 border-b pb-2 overflow-x-auto whitespace-nowrap scrollbar-hide"
      role="tablist"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`px-4 py-2 rounded-t-md font-medium transition duration-200 text-sm sm:text-base
            ${current === tab.id
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
          role="tab"
          aria-selected={current === tab.id}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
