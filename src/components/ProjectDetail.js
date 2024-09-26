import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { projectId } = useParams();
  
  // Sample project data, replace with real data or fetch from API
  const projects = {
    1: {
      title: 'Project 1',
      description: 'Detailed description of Project 1.',
      githubLink: 'https://github.com/yourusername/project1',
    },
    2: {
      title: 'Project 2',
      description: 'Detailed description of Project 2.',
      githubLink: 'https://github.com/yourusername/project2',
    },
    3: {
      title: 'Project 3',
      description: 'Detailed description of Project 3.',
      githubLink: 'https://github.com/yourusername/project3',
    },
  };

  const project = projects[projectId];

  return (
    <div className="project-detail">
      {project ? (
        <>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </>
      ) : (
        <p>Project not found.</p>
      )}
    </div>
  );
};

export default ProjectDetail;
