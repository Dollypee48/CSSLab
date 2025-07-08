import React, { useState } from "react";

export default function LiveEditor() {
  const [code, setCode] = useState(
    `.demo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: lightblue;
}`
  );

  return (
    <div className="bg-white rounded-xl p-4 shadow-md mt-6">
      <h2 className="text-lg font-bold mb-2 text-gray-800">Live CSSLab Editor</h2>
      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        rows={8}
        className="w-full font-mono p-3 border rounded bg-gray-50 text-gray-800 resize-none"
      />
      <div className="mt-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Preview</h3>
        <div className="demo rounded text-center text-white font-medium" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
          background: "lightblue"
        }}>
          Styled Box
        </div>
      </div>
    </div>
  );
}