import React from "react";
import { BarChart, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ClickableImage from "../ui/ClickableImage";

const Results: React.FC = () => {
  return (
    <section id="results" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="font-sans font-bold text-3xl md:text-4xl mb-6 text-center text-deepBlue dark:text-white">
          Results & Insights
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto text-center mb-16">
          Our comprehensive evaluation reveals significant improvements in stock
          market prediction accuracy
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="font-sans font-semibold text-2xl mb-4 text-deepBlue dark:text-white">
                Model Performance Comparison
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deepBlue rounded-full mr-3 mt-2.5"></span>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Ensemble LSTM Model:</span>{" "}
                    Achieved the highest accuracy (98%) and stability across
                    various market conditions, proving most reliable for
                    consistent predictions.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deepBlue rounded-full mr-3 mt-2.5"></span>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Bidirectional LSTM:</span>{" "}
                    Showed improved trend recognition capabilities but required
                    significantly more computational resources, making it less
                    suitable for real-time applications.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deepBlue rounded-full mr-3 mt-2.5"></span>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">CNN-LSTM:</span> Performed
                    exceptionally well in feature extraction from raw market
                    data but struggled with capturing long-term dependencies in
                    extended time series.
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-sans font-semibold text-2xl mb-4 text-deepBlue dark:text-white">
                Optimization Techniques
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                We successfully addressed two critical challenges in stock
                prediction models:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deepBlue rounded-full mr-3 mt-2.5"></span>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">
                      False Positive Reduction:
                    </span>{" "}
                    Through careful threshold tuning and precision-focused
                    optimization, we significantly reduced false buy signals
                    that could lead to poor investment decisions.
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-deepBlue rounded-full mr-3 mt-2.5"></span>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">
                      Class Imbalance Handling:
                    </span>{" "}
                    Implemented SMOTEENN (Synthetic Minority Over-sampling
                    Technique with Edited Nearest Neighbors) to address the
                    inherent imbalance in buy/sell signals, improving overall
                    prediction reliability.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Chart and Statistics */}
          <div className="space-y-8">
            {/* Chart */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="aspect-w-4 aspect-h-3 w-full">
                <ClickableImage
                  src="/training_history.png"
                  alt="Training History"
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="mt-4">
                <h4 className="font-sans font-semibold text-lg text-center text-deepBlue dark:text-white">
                  Training History
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-center text-sm mt-2">
                  Training and validation loss curves showing model convergence
                  over epochs
                </p>
              </div>
            </div>

            {/* Call-out Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                  <h4 className="font-sans font-bold text-xl">92%</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Directional accuracy in predicting market trends,
                  significantly outperforming traditional statistical methods
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <div className="flex items-center gap-3 mb-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h4 className="font-sans font-bold text-xl">68%</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Reduction in false positive buy signals compared to baseline
                  models, leading to more reliable investment recommendations
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/results-detail"
            className="group inline-flex items-center gap-2 bg-deepBlue hover:bg-blue-600 text-white py-4 px-8 rounded-lg font-sans font-medium text-lg hover:scale-[1.03] hover:translate-y-[-1px] transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl"
          >
            <BarChart className="w-5 h-5 transition-transform duration-500 ease-in-out group-hover:rotate-12" />
            View Detailed Results
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Results;
