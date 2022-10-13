import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ExpenseContextProvider from "./context/ExpenseContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ExpenseContextProvider>
      <App />
    </ExpenseContextProvider>
  </React.StrictMode>
);
