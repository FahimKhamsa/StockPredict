import React from "react";
import { TrendingUp, FileText, Code } from "lucide-react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const handleExplore = () => {
    const resultsSection = document.getElementById("results");
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-blue-100 dark:from-gray-900 dark:to-blue-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20 dark:opacity-5">
        <div className="h-full w-full bg-[url('https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&format=webp')] bg-center bg-cover"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6 animate-fade-in">
            <TrendingUp className="text-deepBlue w-12 h-12 mr-4" />
            <span className="text-deepBlue font-semibold text-xl">
              AI-Powered Analysis
            </span>
          </div>

          <h1 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
            Stock Market Prediction using LSTM
          </h1>

          <h2 className="font-sans text-xl md:text-2xl lg:text-3xl mb-8 text-gray-600 dark:text-gray-300 animate-fade-in-delay">
            Leveraging Deep Learning to Forecast Market Trends
          </h2>

          <p className="text-lg md:text-xl mb-12 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto animate-fade-in-delay-2">
            An advanced machine learning system that analyzes historical market
            data to predict future stock price movements with unprecedented
            accuracy.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-6 animate-fade-in-delay-3">
            <button
              onClick={handleExplore}
              className="group bg-deepBlue hover:bg-blue-600 text-white py-4 px-8 rounded-lg font-sans font-medium text-lg hover:scale-[1.03] hover:translate-y-[-1px] transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl flex items-center"
            >
              <TrendingUp className="w-5 h-5 mr-2 transition-transform duration-500 ease-in-out group-hover:rotate-12" />
              Explore Results
            </button>

            <Link
              to="/view-report"
              className="group bg-deepBlue hover:bg-blue-600 text-white py-4 px-8 rounded-lg font-sans font-medium text-lg hover:scale-[1.03] hover:translate-y-[-1px] transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl flex items-center"
            >
              <FileText className="w-5 h-5 mr-2 transition-transform duration-500 ease-in-out group-hover:rotate-12" />
              View Report PDF
            </Link>

            <Link
              to="/view-model"
              className="group bg-deepBlue hover:bg-blue-600 text-white py-4 px-8 rounded-lg font-sans font-medium text-lg hover:scale-[1.03] hover:translate-y-[-1px] transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl flex items-center"
            >
              <Code className="w-5 h-5 mr-2 transition-transform duration-500 ease-in-out group-hover:rotate-12" />
              View Model
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
