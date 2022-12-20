import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Footer } from "./components";
import reportWebVitals from "./reportWebVitals";
import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import { ContextProvider } from "./context/context";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
