import React from "react";
import { Lightbulb, TrendingUp, Target } from "lucide-react";

const Background: React.FC = () => {
  return (
    <section id="background" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="font-sans font-bold text-3xl md:text-4xl mb-6 text-center text-deepBlue dark:text-white">
          Background & Motivation
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto text-center mb-16">
          The journey from market volatility to predictive accuracy
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Challenge Paragraph */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <div className="flex justify-center mb-6">
              <div className="bg-yellow-100 dark:bg-yellow-900 p-4 rounded-full">
                <Lightbulb className="w-8 h-8 text-yellow-500" />
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              The stock market is highly volatile, requiring sophisticated
              models to predict trends accurately. Traditional statistical
              methods struggle with the complexity and non-linearity of stock
              prices. Despite advancements in deep learning for stock
              prediction, challenges such as class imbalance, overfitting, and
              false positives persist in existing models.
            </p>
          </div>

          {/* LSTM Explanation Paragraph */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full">
                <TrendingUp className="w-8 h-8 text-blue-500" />
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              Long Short-Term Memory (LSTM) networks, a type of recurrent neural
              network (RNN), have shown promise in capturing sequential
              dependencies in financial data. Unlike traditional models, LSTMs
              maintain a "memory" of previous data points, recognizing patterns
              across different timeframes. This project builds upon existing
              LSTM models by incorporating ensemble learning and hybrid CNN-LSTM
              architectures.
            </p>
          </div>

          {/* Objective Paragraph */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full">
                <Target className="w-8 h-8 text-green-500" />
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-center">
              Our objectives include developing an advanced LSTM-based model for
              stock price prediction, reducing false positive buy signals using
              precision-focused techniques, comparing different model
              architectures (simple LSTM, bidirectional LSTM, CNN-LSTM), and
              implementing robust evaluation metrics to validate model
              performance. The project addresses challenges through enhanced
              data preprocessing, feature engineering, and model selection
              techniques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Background;
