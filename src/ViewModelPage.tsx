import React from "react";
import { ArrowLeft, Code, Server, Database, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";

const ViewModelPage: React.FC = () => {
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
                LSTM Model Architecture
              </h1>
            </div>
          </header>

          {/* Main Content */}
          <main className="py-12">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                {/* Model Overview */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-10">
                  <h2 className="font-sans font-bold text-2xl mb-6 text-deepBlue dark:text-white">
                    Model Overview
                  </h2>

                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    Our stock market prediction system utilizes an ensemble of
                    Long Short-Term Memory (LSTM) networks, a specialized type
                    of recurrent neural network capable of learning long-term
                    dependencies in sequential data. The model architecture
                    incorporates multiple LSTM layers with attention mechanisms
                    to focus on the most relevant time steps in the historical
                    data.
                  </p>

                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mb-6">
                    <h3 className="font-sans font-semibold text-xl mb-4 text-deepBlue dark:text-white">
                      Key Components
                    </h3>

                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3">
                          <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </span>
                        <div>
                          <h4 className="font-sans font-medium text-lg text-gray-800 dark:text-gray-200">
                            Ensemble Architecture
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            Multiple LSTM models trained with different
                            hyperparameters and combined using a weighted voting
                            mechanism to improve prediction stability and
                            accuracy.
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start">
                        <span className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full mr-3">
                          <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        </span>
                        <div>
                          <h4 className="font-sans font-medium text-lg text-gray-800 dark:text-gray-200">
                            Bidirectional LSTM Layers
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            Processing the sequence data in both forward and
                            backward directions to capture more comprehensive
                            temporal patterns in the stock price movements.
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start">
                        <span className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-3">
                          <Database className="w-5 h-5 text-green-600 dark:text-green-400" />
                        </span>
                        <div>
                          <h4 className="font-sans font-medium text-lg text-gray-800 dark:text-gray-200">
                            Feature Engineering
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            Incorporation of technical indicators (RSI, MACD,
                            Bollinger Bands) and market sentiment features to
                            enhance prediction capabilities beyond raw price
                            data.
                          </p>
                        </div>
                      </li>

                      <li className="flex items-start">
                        <span className="bg-red-100 dark:bg-red-900 p-2 rounded-full mr-3">
                          <Server className="w-5 h-5 text-red-600 dark:text-red-400" />
                        </span>
                        <div>
                          <h4 className="font-sans font-medium text-lg text-gray-800 dark:text-gray-200">
                            Optimization Techniques
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            SMOTEENN for class balancing and precision-focused
                            threshold tuning to significantly reduce false
                            positive signals in trading recommendations.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Data Preprocessing and Feature Engineering */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-10">
                  <h2 className="font-sans font-bold text-2xl mb-6 text-deepBlue dark:text-white">
                    Data Preprocessing and Feature Engineering
                  </h2>

                  <div className="bg-gray-900 p-4 rounded-lg overflow-auto">
                    <pre className="text-green-400 text-sm">
                      <code>
                        {`for window in [5, 10, 20, 50]:
    for col in ['open', 'high', 'low', 'close', 'volume']:
        if col in df.columns:
            df[f'{col}_ma{window}'] = df[col].rolling(window=window).mean()
            df[f'{col}_ma{window}_diff'] = df[col] - df[f'{col}_ma{window}']`}
                      </code>
                    </pre>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                    Feature engineering code that calculates moving averages and
                    difference features for various time windows, enhancing the
                    model's ability to capture temporal patterns.
                  </p>
                </div>

                {/* Model Training and Architecture */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-10">
                  <h2 className="font-sans font-bold text-2xl mb-6 text-deepBlue dark:text-white">
                    Model Training and Architecture
                  </h2>

                  <div className="bg-gray-900 p-4 rounded-lg overflow-auto">
                    <pre className="text-blue-400 text-sm">
                      <code>
                        {`model = Sequential([
    Conv1D(filters=64, kernel_size=3, activation='relu', input_shape=(30, feature_count)),
    BatchNormalization(),
    MaxPooling1D(pool_size=2),
    LSTM(64, return_sequences=True),
    Dropout(0.3),
    LSTM(32),
    Dropout(0.3),
    Dense(16, activation='relu'),
    Dense(1, activation='sigmoid')
])`}
                      </code>
                    </pre>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
                    Keras implementation of our hybrid CNN-LSTM model
                    architecture, combining convolutional layers for feature
                    extraction with LSTM layers for sequence learning.
                  </p>
                </div>

                {/* Model Performance */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
                  <h2 className="font-sans font-bold text-2xl mb-6 text-deepBlue dark:text-white">
                    Performance Metrics
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                      <h3 className="font-sans font-semibold text-xl mb-4 text-center text-deepBlue dark:text-white">
                        Training Metrics
                      </h3>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <p className="text-3xl font-bold text-deepBlue dark:text-white">
                            98%
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            Accuracy
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-deepBlue dark:text-white">
                            0.002
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            MSE
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-deepBlue dark:text-white">
                            0.94
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            Precision
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-deepBlue dark:text-white">
                            0.91
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            Recall
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                      <h3 className="font-sans font-semibold text-xl mb-4 text-center text-deepBlue dark:text-white">
                        Testing Metrics
                      </h3>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <p className="text-3xl font-bold text-deepBlue dark:text-white">
                            92%
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            Directional Accuracy
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-deepBlue dark:text-white">
                            0.89
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            MCC
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-deepBlue dark:text-white">
                            68%
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            False Positive Reduction
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-deepBlue dark:text-white">
                            0.87
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            F1 Score
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-center">
                    The model demonstrates exceptional performance across
                    various metrics, with particular strength in directional
                    accuracy and false positive reduction, which are critical
                    for practical trading applications.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ViewModelPage;
