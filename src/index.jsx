import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { DivWrapper } from "./screens/DivWrapper";
import { HomePage } from './chatrank/HomePage';
import { ChatRankDashboard } from './chatrank/ChatRankDashboard';

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/insights/ChatRankDashboard" element={<ChatRankDashboard />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
