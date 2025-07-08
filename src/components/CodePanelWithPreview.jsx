import React, { useState } from "react";

export default function CodePanelWithPreview() {
  const [cssCode, setCssCode] = useState(
    `.box {
  margin: 20px;
  padding: 20px;
  border: 2px solid blue;
  background-color: lightblue;
}`
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mt-6 w-full max-w-5xl mx-auto">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">🎯 Live CSS Editor + Preview</h2>

      
      <textarea
        value={cssCode}
        onChange={(e) => setCssCode(e.target.value)}
        className="w-full bg-gray-900 text-green-300 p-4 font-mono text-sm rounded-xl mb-6 resize-y min-h-[180px] outline-none border border-gray-700"
      />

      
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Live Preview</h3>
        <div className="preview-area bg-gray-100 dark:bg-gray-700 p-6 rounded-md">
          <div className="box text-center text-white font-medium">Styled Box</div>
        </div>
      </div>

      
      <style>{cssCode}</style>
    </div>
  );
}
