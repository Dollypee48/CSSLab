import React, { useState } from "react";

export default function GridPlayground() {
  const [columns, setColumns] = useState(3);
  const [rows, setRows] = useState(2);
  const [gap, setGap] = useState(10);

  const totalItems = columns * rows;

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
        🧩 Grid Playground
      </h2>

      {/* Controls */}
      <div className="grid sm:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
            Columns: {columns}
          </label>
          <input
            type="range"
            min="1"
            max="6"
            value={columns}
            onChange={(e) => setColumns(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
            Rows: {rows}
          </label>
          <input
            type="range"
            min="1"
            max="6"
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
            className="w-full accent-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
            Gap: {gap}px
          </label>
          <input
            type="range"
            min="0"
            max="50"
            value={gap}
            onChange={(e) => setGap(Number(e.target.value))}
            className="w-full accent-green-500"
          />
        </div>
      </div>

      {/* Grid Preview */}
      <div
        className="transition-all duration-300"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
          gap: `${gap}px`,
        }}
      >
        {[...Array(totalItems)].map((_, i) => (
          <div
            key={i}
            className="bg-indigo-300 dark:bg-indigo-600 text-white p-4 rounded text-center font-semibold shadow"
          >
            Item {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}
