import React from "react";

export default function Tooltip({ text, children }) {
  return (
    <div className="relative group inline-block">
      {children}
      <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black text-white text-xs rounded py-1 px-2 z-10 whitespace-nowrap">
        {text}
      </div>
    </div>
  );
}