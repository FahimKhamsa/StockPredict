import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import ResultsDetail from "./components/sections/ResultsDetail";

const ResultsDetailPage: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-charcoal text-charcoal dark:text-white font-body">
        <Navbar />
        <ResultsDetail />
      </div>
    </ThemeProvider>
  );
};

export default ResultsDetailPage;
