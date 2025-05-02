import React from "react";
import { Brain, BarChart, LineChart, Sigma } from "lucide-react";

const Methodology: React.FC = () => {
  const steps = [
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Data Collection & Preprocessing",
      description:
        "Historical stock data including price, volume, and technical indicators are collected and normalized for optimal model performance.",
      details: [
        "Historical stock market datasets",
        "Technical indicators (RSI, MACD, Bollinger Bands)",
        "Handling missing values and normalization",
        "Feature engineering for enhanced prediction",
      ],
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "LSTM Architecture",
      description:
        "A sophisticated neural network designed to capture both short-term price movements and long-term market trends.",
      details: [
        "Ensemble LSTM model architecture",
        "Bidirectional LSTM for improved trend recognition",
        "Hybrid CNN-LSTM for feature extraction",
        "Attention mechanism for focusing on important time steps",
      ],
    },
    {
      icon: <Sigma className="w-6 h-6" />,
      title: "Model Training",
      description:
        "Rigorous training process with cross-validation to ensure robust prediction capabilities.",
      details: [
        "80-20 train-test split",
        "SMOTEENN for class balancing",
        "Early stopping to prevent overfitting",
        "Adam optimizer with learning rate scheduling",
      ],
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Performance Evaluation",
      description:
        "Comprehensive evaluation using multiple metrics to assess prediction accuracy.",
      details: [
        "Accuracy and Precision-Recall metrics",
        "Matthews Correlation Coefficient (MCC)",
        "Mean Squared Error (MSE) and RMSE",
        "Threshold tuning to reduce false positives",
      ],
    },
  ];

  return (
    <section id="methodology" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="font-sans font-bold text-3xl md:text-4xl mb-6 text-center text-deepBlue dark:text-white">
          Research Methodology
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto text-center mb-16">
          Our approach combines advanced deep learning techniques with
          comprehensive market analysis to create a robust prediction model.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-deepBlue bg-opacity-10 dark:bg-opacity-20 p-3 rounded-lg">
                  {step.icon}
                </div>
                <h3 className="font-sans font-semibold text-xl text-deepBlue dark:text-white">
                  {step.title}
                </h3>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {step.description}
              </p>

              <ul className="space-y-2">
                {step.details.map((detail, detailIndex) => (
                  <li
                    key={detailIndex}
                    className="flex items-center text-gray-700 dark:text-gray-400"
                  >
                    <span className="w-2 h-2 bg-deepBlue rounded-full mr-3"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <h3 className="font-sans font-semibold text-xl mb-4 text-center text-deepBlue dark:text-white">
            Technical Implementation
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="font-bold text-4xl text-deepBlue dark:text-white mb-2">
                98%
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Training Accuracy
              </p>
            </div>
            <div className="text-center">
              <p className="font-bold text-4xl text-deepBlue dark:text-white mb-2">
                0.002
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Mean Squared Error
              </p>
            </div>
            <div className="text-center">
              <p className="font-bold text-4xl text-deepBlue dark:text-white mb-2">
                92%
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Directional Accuracy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
