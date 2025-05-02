import React from 'react';
import { 
  Search, 
  LineChart, 
  Lightbulb, 
  Code, 
  CheckCircle, 
  RefreshCw 
} from 'lucide-react';
import ProcessStep from '../ui/ProcessStep';

const Process: React.FC = () => {
  const steps = [
    {
      icon: <Search size={24} />,
      title: 'Discovery',
      description: 'Understanding the problem space through research, user interviews, and competitive analysis.',
      color: 'bg-blue-100 dark:bg-blue-900',
      iconColor: 'text-blue-500',
    },
    {
      icon: <LineChart size={24} />,
      title: 'Planning',
      description: 'Creating project timelines, defining requirements, and establishing success metrics.',
      color: 'bg-purple-100 dark:bg-purple-900',
      iconColor: 'text-purple-500',
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Design',
      description: 'Developing wireframes, prototypes, and visual designs with user-centered approach.',
      color: 'bg-yellow-100 dark:bg-yellow-900',
      iconColor: 'text-yellow-500',
    },
    {
      icon: <Code size={24} />,
      title: 'Development',
      description: 'Building the solution with clean, efficient code and modern development practices.',
      color: 'bg-green-100 dark:bg-green-900',
      iconColor: 'text-green-500',
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Testing',
      description: 'Ensuring quality through thorough testing, user feedback, and refinement.',
      color: 'bg-red-100 dark:bg-red-900',
      iconColor: 'text-red-500',
    },
    {
      icon: <RefreshCw size={24} />,
      title: 'Iteration',
      description: 'Continuous improvement based on metrics, feedback, and emerging requirements.',
      color: 'bg-teal-100 dark:bg-teal-900',
      iconColor: 'text-teal-500',
    },
  ];

  return (
    <section id="process" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-3xl md:text-4xl mb-4">My Process</h2>
          <div className="w-20 h-1 bg-deepBlue mx-auto mb-8"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            I follow a structured yet flexible approach to ensure every project is delivered with quality and precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              color={step.color}
              iconColor={step.iconColor}
              number={index + 1}
            />
          ))}
        </div>
        
        <div className="mt-16 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="font-sans text-2xl font-bold text-center mb-8">My Development Philosophy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-sans font-bold text-xl mb-3">User-Centered</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Every decision is made with the end user in mind, ensuring intuitive and accessible experiences.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-sans font-bold text-xl mb-3">Quality-Driven</h4>
              <p className="text-gray-700 dark:text-gray-300">
                I maintain high standards through clean code, thorough testing, and attention to detail.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-sans font-bold text-xl mb-3">Continuously Learning</h4>
              <p className="text-gray-700 dark:text-gray-300">
                I stay current with industry trends and technologies to deliver modern, innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;