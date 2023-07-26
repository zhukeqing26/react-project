import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Style from "./components/04-Style.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Style />
  </React.StrictMode>
);
