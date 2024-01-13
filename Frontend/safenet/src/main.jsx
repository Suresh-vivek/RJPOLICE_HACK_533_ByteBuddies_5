import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resources from "../pages/Resources.jsx";
import Contact from "../pages/Contact.jsx";
import Community from "../pages/Community.jsx";
import Stories from "../pages/Stories.jsx";
import CustomerCare from "../pages/subpages/CustomerCare.jsx";
import EducationalResources from "../pages/subpages/EducationalResources.jsx";
import AdditionalResources from "../pages/subpages/AdditionalResources.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/community" element={<Community />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/resources/customer-care" element={<CustomerCare />} />

        <Route path="/resources/educational-resources" element={<EducationalResources />} />
        <Route path="/resources/additional-resources" element={<AdditionalResources />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
