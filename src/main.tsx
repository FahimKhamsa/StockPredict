import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.tsx";
import ResultsDetailPage from "./ResultsDetailPage.tsx";
import ViewReportPage from "./ViewReportPage.tsx";
import ViewModelPage from "./ViewModelPage.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/results-detail" element={<ResultsDetailPage />} />
        <Route path="/view-report" element={<ViewReportPage />} />
        <Route path="/view-model" element={<ViewModelPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
