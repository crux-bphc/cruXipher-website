import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context/globalContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <div className="min-h-screen bg-black text-white box-border font-mono">
        <App />
      </div>
    </AppProvider>
  </React.StrictMode>
);
