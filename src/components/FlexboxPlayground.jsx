import React, { useState } from "react";

export default function FlexboxPlayground() {
  const [justifyContent, setJustifyContent] = useState("center");
  const [alignItems, setAlignItems] = useState("center");
  const [flexDirection, setFlexDirection] = useState("row");

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
        🚀 Flexbox Playground
      </h2>

      <div className="grid sm:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
            Justify Content
          </label>
          <select
            value={justifyContent}
            onChange={(e) => setJustifyContent(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          >
            <option value="flex-start">flex-start</option>
            <option value="center">center</option>
            <option value="flex-end">flex-end</option>
            <option value="space-between">space-between</option>
            <option value="space-around">space-around</option>
            <option value="space-evenly">space-evenly</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
            Align Items
          </label>
          <select
            value={alignItems}
            onChange={(e) => setAlignItems(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          >
            <option value="stretch">stretch</option>
            <option value="flex-start">flex-start</option>
            <option value="center">center</option>
            <option value="flex-end">flex-end</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
            Flex Direction
          </label>
          <select
            value={flexDirection}
            onChange={(e) => setFlexDirection(e.target.value)}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white"
          >
            <option value="row">row</option>
            <option value="row-reverse">row-reverse</option>
            <option value="column">column</option>
            <option value="column-reverse">column-reverse</option>
          </select>
        </div>
      </div>

      <div
        className="bg-gray-200 dark:bg-gray-700 p-4 min-h-[150px] flex gap-4 rounded-lg transition-all duration-300"
        style={{
          justifyContent,
          alignItems,
          flexDirection,
        }}
      >
        <div className="bg-red-500 w-16 h-16 flex items-center justify-center text-white font-bold rounded">
          1
        </div>
        <div className="bg-green-500 w-16 h-16 flex items-center justify-center text-white font-bold rounded">
          2
        </div>
        <div className="bg-blue-500 w-16 h-16 flex items-center justify-center text-white font-bold rounded">
          3
        </div>
      </div>
    </div>
  );
}
