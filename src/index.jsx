import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { DivWrapper } from "./screens/DivWrapper";
import { ChatRankDashboard } from './chatrank/ChatRankDashboard.jsx'

createRoot(document.getElementById("app")).render(
  <StrictMode>
      <ChatRankDashboard />
  </StrictMode>
);