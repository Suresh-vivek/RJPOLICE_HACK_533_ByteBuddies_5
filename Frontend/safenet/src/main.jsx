import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resources from "../pages/Resources.jsx";
import Contact from "../pages/Contact.jsx";
import Community from "../pages/Community.jsx";
import Stories from "../pages/Stories.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Community />} />
        <Route path="/stories" element={<Stories />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
