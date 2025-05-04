import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Get the root HTML element
const rootElement = document.getElementById("root");

// Create and mount the React root
const root = createRoot(rootElement);
root.render( < App / > );