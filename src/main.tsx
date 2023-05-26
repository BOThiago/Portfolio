import React from "react";
import ReactDOM from "react-dom/client";
import Portfolio from "./pages/Portfolio.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Portfolio />
    </React.StrictMode>
);
