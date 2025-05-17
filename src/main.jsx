import React from "react";
import ReactDOM from "react-dom/client";
import { ContextProvider } from "./hooks/useGlobalReducer";
import AppRoutes from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ContextProvider>
        <AppRoutes />
    </ContextProvider>
);
