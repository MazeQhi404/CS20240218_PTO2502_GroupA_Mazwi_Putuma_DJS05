// Aplication entry point for React 18+ ( using the new root API )

import React from "react";
import ReactDOM from "react-dom/client"; // React 18+ root API ( enable concurrent features )
import { BrowserRouter } from "react-router-dom"; // Client-side routing
import App from "./App.jsx"; // Root component containing all routes and layout
import "./index.css"; 

// Create the new React 18 root and Render the app.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>  {/**Enables Extra dev time checks and warnings */}
    <BrowserRouter> {/**Provides routing context for <Routes> and <Link> components */}
      <App/> {/** All pages and components are defined inside App.jsx*/}
    </BrowserRouter>
  </React.StrictMode>
);