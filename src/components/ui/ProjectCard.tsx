import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
        <img 
          src={project.image} 
          alt={project.title} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-deepBlue bg-opacity-30 transition-opacity duration-300 flex items-center justify-center ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-deepBlue p-3 rounded-full hover:bg-deepBlue hover:text-white transition-colors duration-300"
            aria-label={`View ${project.title} project`}
          >
            <ExternalLink size={20} />
          </a>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-deepBlue text-white text-xs font-sans py-1 px-3 rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-sans font-bold text-xl mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-sans py-1 px-3 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;