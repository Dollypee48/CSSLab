import React, { useState, useEffect } from "react";

export default function BoxModel() {
  const [padding, setPadding] = useState(20);
  const [margin, setMargin] = useState(20);
  const [border, setBorder] = useState(2);
  const [cssCode, setCssCode] = useState("");

  // Build CSS code from state
  const buildCSS = (m, p, b) => {
    return `.box {
  margin: ${m}px;
  padding: ${p}px;
  border: ${b}px solid #1e3a8a;
}`;
  };

  // Sync code editor when sliders change
  useEffect(() => {
    setCssCode(buildCSS(margin, padding, border));
  }, [padding, margin, border]);

  // Parse CSS string and update state
  const handleCSSChange = (value) => {
    setCssCode(value);

    const marginMatch = value.match(/margin:\s*(\d+)px/);
    const paddingMatch = value.match(/padding:\s*(\d+)px/);
    const borderMatch = value.match(/border:\s*(\d+)px/);

    if (marginMatch) setMargin(Number(marginMatch[1]));
    if (paddingMatch) setPadding(Number(paddingMatch[1]));
    if (borderMatch) setBorder(Number(borderMatch[1]));
  };

  const resetValues = () => {
    setPadding(20);
    setMargin(20);
    setBorder(2);
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
        🧱 Editable Box Model Visualizer
      </h2>

      {/* Preview */}
      <div className="flex justify-center items-center mb-6">
        <div
          className="box text-center text-white font-medium transition-all duration-300 bg-gradient-to-r from-blue-500 to-indigo-600"
          style={{
            padding: `${padding}px`,
            margin: `${margin}px`,
            border: `${border}px solid #1e3a8a`,
          }}
        >
          Content Box
        </div>
      </div>

      {/* Sliders */}
      <div className="grid sm:grid-cols-3 gap-6 mb-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
            Padding: {padding}px
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={padding}
            onChange={(e) => setPadding(Number(e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
            Margin: {margin}px
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={margin}
            onChange={(e) => setMargin(Number(e.target.value))}
            className="w-full accent-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-1">
            Border: {border}px
          </label>
          <input
            type="range"
            min="0"
            max="10"
            value={border}
            onChange={(e) => setBorder(Number(e.target.value))}
            className="w-full accent-purple-500"
          />
        </div>
      </div>

      {/* Editable CSS Panel */}
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          ✍️ Edit CSS
        </label>
        <textarea
          value={cssCode}
          onChange={(e) => handleCSSChange(e.target.value)}
          rows={6}
          className="w-full font-mono text-sm p-3 rounded bg-gray-900 text-green-300 border border-gray-700"
        />
      </div>

      {/* Inject Live CSS */}
      <style>{cssCode}</style>

      {/* Reset Button */}
      <div className="text-right">
        <button
          onClick={resetValues}
          className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded shadow"
        >
          Reset to Default
        </button>
      </div>
    </div>
  );
}
