import React from "react";
import { Shield, Scale, Leaf } from "lucide-react";

const Ethics: React.FC = () => {
  return (
    <section id="ethics" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="font-sans font-bold text-3xl md:text-4xl mb-6 text-center text-deepBlue dark:text-white">
          Ethical Considerations
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto text-center mb-16">
          Addressing the ethical implications and sustainability aspects of
          AI-powered financial prediction
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Ethical Issues Column */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-red-100 dark:bg-red-900 p-4 rounded-full">
                <Shield className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="font-sans font-bold text-2xl text-deepBlue dark:text-white">
                Ethical Issues
              </h3>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="font-sans font-semibold text-xl mb-3 text-deepBlue dark:text-white">
                  Biases in the Model
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  Machine learning models, including LSTM, can only be as good
                  as the data they are trained on. If the historical stock price
                  data used contains inherent biases, such as
                  underrepresentation of certain market conditions or financial
                  events, the model may perpetuate these biases in its
                  predictions. In financial prediction, this could lead to
                  skewed or unfair results, creating inaccurate forecasts.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  For example, if the data used for training predominantly comes
                  from a period of market growth and lacks data from recessions
                  or market crashes, the model might perform poorly during
                  volatile periods, affecting investors' decision-making. It is
                  crucial to ensure that the data used is representative and
                  balanced to minimize the risk of such biases.
                </p>
              </div>

              <div>
                <h4 className="font-sans font-semibold text-xl mb-3 text-deepBlue dark:text-white">
                  Ethical Dilemmas in Decision-Making
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  While the focus of this project is on stock market prediction,
                  broader ethical dilemmas can arise when predictive models are
                  used for financial decision-making. For example, using an AI
                  model to predict stock prices could lead to increased market
                  speculation, causing fluctuations in stock values based on
                  AI-generated predictions rather than actual market
                  fundamentals. If these predictions are wrong, they could
                  contribute to market instability and negatively impact
                  investors or entire economies.
                </p>
              </div>
            </div>
          </div>

          {/* Sustainability Column */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full">
                <Leaf className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-sans font-bold text-2xl text-deepBlue dark:text-white">
                Sustainability
              </h3>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="font-sans font-semibold text-xl mb-3 text-deepBlue dark:text-white">
                  Economic Sustainability
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  From an economic perspective, AI models like the one used in
                  stock market prediction could potentially influence financial
                  markets in significant ways. On the positive side, AI could
                  democratize access to financial tools, allowing smaller
                  investors to make more informed decisions. However, if
                  AI-powered predictions lead to excessive market speculation,
                  it could cause volatility in the stock market, affecting the
                  broader economy.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  Moreover, over-reliance on AI for stock predictions could
                  inadvertently cause job displacement in areas like financial
                  analysis or trading. While AI can improve efficiency, it could
                  reduce the need for human workers in certain roles, leading to
                  potential disruptions in employment. It is important to strike
                  a balance between automation and job creation by investing in
                  reskilling programs for affected workers.
                </p>
              </div>

              <div>
                <h4 className="font-sans font-semibold text-xl mb-3 text-deepBlue dark:text-white">
                  Social Impact
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  On a social level, the widespread use of AI in financial
                  decision-making could contribute to greater financial
                  inclusion by providing individuals with access to advanced
                  tools and resources. However, there is also the risk that
                  these technologies might disproportionately benefit those with
                  more resources and expertise, widening the gap between the
                  wealthy and less privileged individuals or communities.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mt-3">
                  Additionally, the development of AI in financial sectors could
                  lead to the growth of AI-driven financial products that may
                  not always align with the values of certain investors, such as
                  those focused on environmental, social, and governance (ESG)
                  criteria. Thus, it's essential for companies and developers to
                  ensure that these systems are inclusive, accessible, and align
                  with societal goals, rather than just economic profit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <div className="flex items-center gap-4 mb-6 justify-center">
            <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full">
              <Scale className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="font-sans font-bold text-2xl text-deepBlue dark:text-white">
              Our Commitment
            </h3>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-center max-w-4xl mx-auto">
            We are committed to developing AI systems that are fair,
            transparent, and beneficial to society. Our research acknowledges
            these ethical considerations and aims to address them through
            rigorous testing, diverse training data, and transparent reporting
            of model limitations. We believe that by openly discussing these
            challenges, we can work towards AI solutions that enhance financial
            decision-making while minimizing potential negative impacts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ethics;
