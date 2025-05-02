import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition-transform duration-300 hover:translate-y-[-5px]">
      <div className="bg-deepBlue bg-opacity-10 p-4 rounded-full inline-flex items-center justify-center mb-4">
        <div className="text-deepBlue">{icon}</div>
      </div>
      <h3 className="font-sans font-bold text-xl mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default SkillCard;