import React from "react";

export default function CodePanel() {
  return (
    <div className="bg-gray-900 text-green-300 p-4 rounded-xl mt-6 overflow-x-auto text-sm font-mono">
      <h3 className="text-white font-semibold mb-2">CSS Output</h3>
      <pre>
{`/* Box Model Example */
.box {
  margin: 20px;
  padding: 20px;
  border: 2px solid blue;
}

/* Flexbox Example */
.flex-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}`}
      </pre>
    </div>
  );
}
