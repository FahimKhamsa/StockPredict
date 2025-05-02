import React from "react";
import {
  TrendingUp,
  Server,
  Network,
  Zap,
  BarChart4,
  Workflow,
} from "lucide-react";

const FutureWork: React.FC = () => {
  const futureDirections = [
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
      title: "Hybrid Models",
      description:
        "Combining different architectures to leverage their complementary strengths.",
      details: [
        "Develop hybrid models that combine LSTMs with CNNs for feature extraction",
        "Integrate Attention Mechanisms to focus on important time steps",
        "Explore ensemble learning techniques to combine predictions from multiple models",
      ],
    },
    {
      icon: <Network className="w-6 h-6 text-purple-500" />,
      title: "Transformer-Based Models",
      description:
        "Adapting transformer architectures for superior performance in sequence modeling tasks.",
      details: [
        "Adapt Transformer architectures (e.g., BERT, GPT) for stock market prediction",
        "Explore Time Series Transformers to model temporal dependencies",
        "Leverage self-attention mechanisms for capturing long-range dependencies",
      ],
    },
    {
      icon: <BarChart4 className="w-6 h-6 text-green-500" />,
      title: "Graph Neural Networks",
      description:
        "Modeling relationships between stocks as a graph to capture market interconnections.",
      details: [
        "Use Graph Neural Networks to model relationships between stocks",
        "Incorporate knowledge graphs to capture external relationships",
        "Model industry sectors and geopolitical events as graph connections",
      ],
    },
  ];

  const deploymentSteps = [
    {
      icon: <Server className="w-6 h-6 text-red-500" />,
      title: "Distributed Data Storage",
      description:
        "Handling large datasets efficiently with distributed storage systems.",
      details:
        "Use distributed data storage systems like Hadoop HDFS or cloud-based solutions (e.g., AWS S3, Google Cloud Storage) to handle large datasets with scalability, fault tolerance, and high availability.",
    },
    {
      icon: <Workflow className="w-6 h-6 text-yellow-500" />,
      title: "Distributed Training",
      description:
        "Parallelizing training across multiple GPUs or nodes for efficiency.",
      details:
        "Use distributed training frameworks like TensorFlow Distributed or PyTorch Distributed to parallelize training across multiple GPUs or nodes, significantly reducing training time for large models.",
    },
    {
      icon: <Zap className="w-6 h-6 text-teal-500" />,
      title: "Real-Time Predictions",
      description:
        "Deploying models for low-latency inference in real-time applications.",
      details:
        "Deploy the model using TensorFlow Serving or FastAPI for low-latency inference, and use edge computing to deploy the model closer to the data source to reduce latency for real-time trading decisions.",
    },
  ];

  return (
    <section id="future-work" className="py-24 bg-white dark:bg-charcoal">
      <div className="container mx-auto px-6">
        <h2 className="font-sans font-bold text-3xl md:text-4xl mb-6 text-center text-deepBlue dark:text-white">
          Future Work & Scalability
        </h2>

        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-3xl mx-auto text-center mb-16">
          Exploring advanced approaches and deployment strategies to enhance our
          stock prediction system
        </p>

        <div className="mb-16">
          <h3 className="font-sans font-semibold text-2xl mb-8 text-deepBlue dark:text-white">
            Potential Research Directions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {futureDirections.map((direction, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white dark:bg-gray-700 p-3 rounded-full shadow-sm">
                    {direction.icon}
                  </div>
                </div>

                <h4 className="font-sans font-semibold text-xl mb-3 text-center text-deepBlue dark:text-white">
                  {direction.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">
                  {direction.description}
                </p>

                <ul className="space-y-2">
                  {direction.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-start text-gray-700 dark:text-gray-300"
                    >
                      <span className="w-2 h-2 bg-deepBlue rounded-full mr-3 mt-2"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-sans font-semibold text-2xl mb-8 text-deepBlue dark:text-white">
            Scalability & Deployment
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {deploymentSteps.map((step, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-white dark:bg-gray-700 p-3 rounded-full shadow-sm">
                    {step.icon}
                  </div>
                </div>

                <h4 className="font-sans font-semibold text-xl mb-3 text-center text-deepBlue dark:text-white">
                  {step.title}
                </h4>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">
                  {step.description}
                </p>

                <p className="text-gray-700 dark:text-gray-300 text-center">
                  {step.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureWork;
