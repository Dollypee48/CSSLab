import React, { useState } from "react";
import TabNav from "../components/TabNav";
import BoxModel from "../components/BoxModel";
import FlexboxPlayground from "../components/FlexboxPlayground";
import GridPlayground from "../components/GridPlayground";
import ResponsiveToggle from "../components/ResponsiveToggle";
import CodePanelWithPreview from "../components/CodePanelWithPreview"; // New Live Editor

export default function Home() {
  const [tab, setTab] = useState("box");

  return (
    <div className="p-4 md:p-6 min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Header */}
      <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-6">
        <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">🎨 CSSLab</h1>
       
      </header>

      {/* Navigation Tabs & Responsive Preview */}
      <TabNav current={tab} onChange={setTab} />
      <ResponsiveToggle />

      {/* Playground Section */}
      <div className="mt-6 space-y-6">
        {tab === "box" && (
          <>
            <BoxModel />
          
          </>
        )}

        {tab === "flex" && (
          <>
            <FlexboxPlayground />
           
          </>
        )}

        {tab === "grid" && (
          <>
            <GridPlayground />
           
          </>
        )}

        {tab === "editor" && <CodePanelWithPreview />}
      </div>
    </div>
  );
}
