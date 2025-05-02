import React from "react";
import { Users, Calendar, School } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-charcoal">
      <div className="container mx-auto px-6">
        <h2 className="font-sans font-bold text-3xl md:text-4xl mb-8 text-deepBlue dark:text-white text-center">
          About This Project
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Team Info */}
          <div className="space-y-8">
            {/* Team Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-deepBlue dark:text-white">
                <Users className="w-6 h-6" />
                <h3 className="font-sans font-black text-xl">
                  Team Composition
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-8 font-semibold">
                <li>Mehedi Hasan (200021146)</li>
                <li>Faiyaj Abrar (200021250)</li>
                <li>Kushal Muhammed (200021209)</li>
                <li>Tahsin Jawad (200021207)</li>
              </ul>
            </div>

            {/* Academic Supervision */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-deepBlue dark:text-white">
                <School className="w-6 h-6" />
                <h3 className="font-sans font-black text-xl">
                  Academic Supervision
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 ml-8 font-semibold">
                Md Arefin Rabbi Emon
              </p>
            </div>

            {/* Institution & Date */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-deepBlue dark:text-white">
                <Calendar className="w-6 h-6" />
                <h3 className="font-sans font-black text-xl">
                  Project Details
                </h3>
              </div>
              <div className="ml-8 space-y-2 text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Institution:</strong> Islamic University of Technology
                </p>
                <p>
                  <strong>Submission Date:</strong> March 21, 2025
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Project Description */}
          <div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                This project explores the application of Long Short-Term Memory
                (LSTM) neural networks for stock market prediction. We've
                developed an advanced deep learning model that analyzes
                historical market data to forecast future price movements with
                high accuracy.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Our approach combines technical analysis with machine learning
                techniques to identify patterns in market behavior that are
                invisible to traditional analysis methods. By implementing
                ensemble LSTM models with optimized hyperparameters, we've
                achieved significant improvements in prediction accuracy while
                reducing false positive signals that often lead to poor
                investment decisions.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                The model demonstrates exceptional performance with 98% training
                accuracy and 92% directional accuracy in predicting market
                trends. Most notably, we achieved a 68% reduction in false
                positive buy signals compared to baseline models, making our
                system more reliable for real-world trading applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
