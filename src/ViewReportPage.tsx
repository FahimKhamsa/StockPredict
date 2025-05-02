import React from "react";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";

const ViewReportPage: React.FC = () => {
  const pdfUrl = "/4709_Project_Report_Group_B6.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Stock_Market_Prediction_LSTM_Report.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-charcoal text-charcoal dark:text-white font-body">
        <Navbar />
        <div className="pt-20">
          {/* Header */}
          <header className="bg-deepBlue py-8">
            <div className="container mx-auto px-6">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white mb-2 hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
              <h1 className="font-sans font-bold text-3xl md:text-4xl text-white">
                Project Report
              </h1>
            </div>
          </header>

          {/* Main Content */}
          <main className="py-12">
            <div className="container mx-auto px-6">
              <div className="flex justify-end mb-6">
                <button
                  onClick={handleDownload}
                  className="bg-deepBlue text-white py-3 px-6 rounded-lg font-sans font-medium hover:bg-opacity-90 transition-all duration-300 shadow-md flex items-center"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download PDF
                </button>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 w-full h-screen">
                  <iframe
                    src={pdfUrl}
                    title="Stock Market Prediction using LSTM Report"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ViewReportPage;
