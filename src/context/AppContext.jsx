import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [tab, setTab] = useState(() => localStorage.getItem("tab") || "box");

  
  useEffect(() => {
    localStorage.setItem("tab", tab);
  }, [tab]);

  return (
    <AppContext.Provider value={{ tab, setTab }}>
      {children}
    </AppContext.Provider>
  );
}
