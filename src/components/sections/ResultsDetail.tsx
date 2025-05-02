import React from "react";
import {
  ArrowLeft,
  BarChart,
  LineChart,
  PieChart,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import ClickableImage from "../ui/ClickableImage";

const ResultsDetail: React.FC = () => {
  // Table data for model comparison
  const modelComparisonData = [
    {
      model: "Ensemble LSTM",
      accuracy: "98%",
      precision: "0.94",
      recall: "0.91",
      mcc: "0.89",
      computeTime: "Medium",
    },
    {
      model: "Bidirectional LSTM",
      accuracy: "95%",
      precision: "0.92",
      recall: "0.88",
      mcc: "0.85",
      computeTime: "High",
    },
    {
      model: "CNN-LSTM",
      accuracy: "93%",
      precision: "0.89",
      recall: "0.90",
      mcc: "0.82",
      computeTime: "Medium-High",
    },
    {
      model: "Simple LSTM",
      accuracy: "89%",
      precision: "0.85",
      recall: "0.83",
      mcc: "0.78",
      computeTime: "Low",
    },
  ];

  // Data for error analysis
  const errorAnalysisData = [
    {
      errorType: "False Positives (Buy)",
      baseline: "18.4%",
      optimized: "5.9%",
      improvement: "68%",
    },
    {
      errorType: "False Negatives (Sell)",
      baseline: "12.7%",
      optimized: "7.2%",
      improvement: "43%",
    },
    {
      errorType: "Timing Errors",
      baseline: "9.3%",
      optimized: "4.1%",
      improvement: "56%",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-charcoal text-charcoal dark:text-white font-body pt-20">
      {/* Header */}
      <header className="bg-deepBlue py-16">
        <div className="container mx-auto px-6">
          <a
            href="/#results"
            className="inline-flex items-center gap-2 text-white mb-6 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </a>
          <h1 className="font-sans font-bold text-4xl md:text-5xl text-white mb-4">
            Detailed Results & Analysis
          </h1>
          <p className="text-blue-100 text-xl max-w-3xl">
            Comprehensive evaluation of our LSTM-based stock market prediction
            models, including performance metrics, error analysis, and
            comparative insights
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="container mx-auto px-6">
          {/* Introduction */}
          <section className="mb-20">
            <h2 className="font-sans font-bold text-3xl mb-6 text-deepBlue dark:text-white">
              Performance Evaluation
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-4xl">
              Our research employed a comprehensive evaluation framework to
              assess the performance of various LSTM architectures for stock
              market prediction. We utilized multiple metrics including
              accuracy, precision-recall, and the Matthews correlation
              coefficient (MCC) to provide a holistic view of model performance
              across different market conditions.
            </p>

            {/* Key Metrics Explanation */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <h3 className="font-sans font-semibold text-lg">Accuracy</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  The proportion of correct predictions (both buy and sell
                  signals) among the total number of cases examined.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                  <h3 className="font-sans font-semibold text-lg">Precision</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  The proportion of correct buy signals among all predicted buy
                  signals, critical for minimizing false positives.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart className="w-6 h-6 text-purple-500" />
                  <h3 className="font-sans font-semibold text-lg">Recall</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  The proportion of actual buy opportunities that were correctly
                  identified, important for capturing profitable trades.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <PieChart className="w-6 h-6 text-orange-500" />
                  <h3 className="font-sans font-semibold text-lg">MCC</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Matthews Correlation Coefficient, a balanced measure that
                  works well even with class imbalance in buy/sell signals.
                </p>
              </div>
            </div>

            {/* Model Comparison Table */}
            <div className="overflow-x-auto mb-12">
              <h3 className="font-sans font-semibold text-2xl mb-4 text-deepBlue dark:text-white">
                Model Comparison
              </h3>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-left">
                      Model Architecture
                    </th>
                    <th className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-center">
                      Accuracy
                    </th>
                    <th className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-center">
                      Precision
                    </th>
                    <th className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-center">
                      Recall
                    </th>
                    <th className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-center">
                      MCC
                    </th>
                    <th className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-center">
                      Compute Time
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {modelComparisonData.map((model, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0
                          ? "bg-white dark:bg-gray-900"
                          : "bg-gray-50 dark:bg-gray-800"
                      }
                    >
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 font-medium">
                        {model.model}
                      </td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-center">
                        {model.accuracy}
                      </td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-center">
                        {model.precision}
                      </td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-center">
                        {model.recall}
                      </td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-center">
                        {model.mcc}
                      </td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-center">
                        {model.computeTime}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Performance Visualization */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
              <h3 className="font-sans font-semibold text-xl mb-4 text-deepBlue dark:text-white">
                Training History
              </h3>
              <div className="aspect-w-16 aspect-h-9 w-full">
                <ClickableImage
                  src="/training_history.png"
                  alt="Training History"
                  className="w-full h-96 object-contain rounded-lg"
                />
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                Training and validation loss curves showing model convergence
                over epochs. The ensemble model (blue) demonstrates more stable
                learning compared to other architectures.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="font-sans font-semibold text-xl mb-4 text-deepBlue dark:text-white">
                  Confusion Matrix
                </h3>
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <ClickableImage
                    src="/confusion_matrix.png"
                    alt="Confusion Matrix"
                    className="w-full h-64 object-contain rounded-lg"
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                  Confusion matrix showing true positives, false positives, true
                  negatives, and false negatives for buy/sell predictions. The
                  optimized model significantly reduced false positives compared
                  to the baseline model.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="font-sans font-semibold text-xl mb-4 text-deepBlue dark:text-white">
                  Performance Metrics vs. Threshold
                </h3>
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <ClickableImage
                    src="/threshold_metrics.png"
                    alt="Performance Metrics vs Threshold"
                    className="w-full h-64 object-contain rounded-lg"
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                  Performance metrics (precision, recall, F1-score) plotted
                  against different classification thresholds. The optimal
                  threshold of 0.72 was selected to maximize precision while
                  maintaining acceptable recall.
                </p>
              </div>
            </div>
          </section>

          {/* Error Analysis */}
          <section className="mb-20">
            <h2 className="font-sans font-bold text-3xl mb-6 text-deepBlue dark:text-white">
              Error Analysis & Optimization
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-4xl">
              A critical aspect of our research was identifying and addressing
              common error patterns in stock prediction models. We focused
              particularly on reducing false positives in buy signals, which can
              lead to poor investment decisions and financial losses.
            </p>

            {/* Error Reduction Table */}
            <div className="overflow-x-auto mb-12">
              <h3 className="font-sans font-semibold text-2xl mb-4 text-deepBlue dark:text-white">
                Error Reduction Results
              </h3>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-700">
                    <th className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-left">
                      Error Type
                    </th>
                    <th className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-center">
                      Baseline Model
                    </th>
                    <th className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-center">
                      Optimized Model
                    </th>
                    <th className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-center">
                      Improvement
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {errorAnalysisData.map((error, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0
                          ? "bg-white dark:bg-gray-900"
                          : "bg-gray-50 dark:bg-gray-800"
                      }
                    >
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 font-medium">
                        {error.errorType}
                      </td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-center">
                        {error.baseline}
                      </td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-center">
                        {error.optimized}
                      </td>
                      <td className="border border-gray-200 dark:border-gray-600 px-4 py-3 text-center text-green-600 dark:text-green-400">
                        {error.improvement}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Optimization Techniques */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-amber-500" />
                  <h3 className="font-sans font-semibold text-xl text-deepBlue dark:text-white">
                    Class Imbalance Handling
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Stock market data inherently suffers from class imbalance,
                  with buy/sell signals being relatively rare compared to hold
                  signals. We implemented SMOTEENN (Synthetic Minority
                  Over-sampling Technique with Edited Nearest Neighbors) to
                  address this imbalance.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  SMOTEENN works by first oversampling the minority class
                  (buy/sell signals) using SMOTE, then cleaning the resulting
                  space using Edited Nearest Neighbors to remove noisy samples.
                  This approach led to a more balanced dataset without
                  introducing excessive synthetic noise.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <LineChart className="w-6 h-6 text-blue-500" />
                  <h3 className="font-sans font-semibold text-xl text-deepBlue dark:text-white">
                    Threshold Tuning
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Rather than using the default 0.5 threshold for
                  classification, we implemented a precision-focused threshold
                  tuning approach. By analyzing the precision-recall curve, we
                  identified an optimal threshold of 0.72 that significantly
                  reduced false positives while maintaining acceptable recall.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  This threshold optimization was particularly effective for buy
                  signals, where false positives can be more costly than false
                  negatives in many trading strategies. The approach resulted in
                  a 68% reduction in false buy signals compared to the baseline
                  model.
                </p>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section>
            <h2 className="font-sans font-bold text-3xl mb-6 text-deepBlue dark:text-white">
              Conclusion & Practical Applications
            </h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our research demonstrates that ensemble LSTM models, when
                properly optimized for class imbalance and threshold tuning, can
                achieve remarkable accuracy in stock market prediction. The 98%
                training accuracy and 92% directional accuracy represent
                significant improvements over traditional statistical methods
                and simpler neural network architectures.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                The 68% reduction in false positive buy signals is particularly
                noteworthy, as it directly translates to more reliable
                investment recommendations and potentially improved returns. By
                focusing on precision without excessively sacrificing recall,
                our model strikes a balance that is well-suited for practical
                trading applications.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                While these results are promising, we acknowledge the inherent
                limitations of any prediction model in the highly complex and
                sometimes irrational stock market environment. The model should
                be viewed as a decision support tool rather than an autonomous
                trading system, and should be used in conjunction with
                fundamental analysis and sound investment principles.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ResultsDetail;
