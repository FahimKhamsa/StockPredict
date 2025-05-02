import React from "react";
import { FileText, Code, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const Conclusion: React.FC = () => {
  return (
    <section id="conclusion" className="py-24 bg-white dark:bg-charcoal">
      <div className="container mx-auto px-6">
        <h2 className="font-sans font-bold text-3xl md:text-4xl mb-6 text-center text-deepBlue dark:text-white">
          Conclusion
        </h2>

        <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            This study demonstrated an improved LSTM-based model for stock
            market prediction, effectively reducing false positives and
            enhancing trend prediction accuracy. The findings indicate the
            potential for deep learning in financial forecasting, though
            challenges remain in real-time implementation.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Our research demonstrates that ensemble LSTM models, when properly
            optimized for class imbalance and threshold tuning, can achieve
            remarkable accuracy in stock market prediction. The 98% training
            accuracy and 92% directional accuracy represent significant
            improvements over traditional statistical methods and simpler neural
            network architectures.
          </p>

          <p className="text-gray-700 dark:text-gray-300">
            The 68% reduction in false positive buy signals is particularly
            noteworthy, as it directly translates to more reliable investment
            recommendations and potentially improved returns. While these
            results are promising, we acknowledge the inherent limitations of
            any prediction model in the highly complex and sometimes irrational
            stock market environment.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6">
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

          <Link
            to="/results-detail"
            className="group bg-deepBlue hover:bg-blue-600 text-white py-4 px-8 rounded-lg font-sans font-medium text-lg hover:scale-[1.03] hover:translate-y-[-1px] transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl flex items-center"
          >
            <BarChart className="w-5 h-5 mr-2 transition-transform duration-500 ease-in-out group-hover:rotate-12" />
            View Detailed Results
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
