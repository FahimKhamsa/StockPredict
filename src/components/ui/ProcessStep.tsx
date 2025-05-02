import React from 'react';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  iconColor: string;
  number: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  icon, 
  title, 
  description, 
  color, 
  iconColor,
  number 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <div className={`${color} ${iconColor} p-3 rounded-lg mr-4`}>
          {icon}
        </div>
        <div className="border-2 border-deepBlue w-8 h-8 rounded-full flex items-center justify-center">
          <span className="font-sans font-bold text-sm text-deepBlue">{number}</span>
        </div>
      </div>
      <h3 className="font-sans font-bold text-xl mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default ProcessStep;