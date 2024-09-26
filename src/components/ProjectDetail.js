import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { projectId } = useParams();
  
  // Sample project data, replace with real data or fetch from API
  const projects = {
    1: {
      title: 'Project 1',
      description: `Our project aims to promote pet adoption and improve the management of accessories. 
      We believe pets bring joy into people's lives and should be treated with love and care. 
      I have done this project using Java Full Stack.
      Using : Java Full Stack Development
      Role : Team Member`,
      githubLink: 'https://github.com/2100031390',
    },
    2: {
      title: 'Project 2',
      description: `Health & Life Insurance System (H.L.I)
                   Health & Life insurance System (H.L.I) is an insurance that covers part of the riskof a person
                   incurring medical expenses. Life insurance can help to your family reduce their financial burden in
                   case of your untimely demise.
                   Using : Mern Stack Web Development
                   Role :Team Member`,
      githubLink: 'https://github.com/2100031390',
    },
    3: {
      title: 'Project 3',
      description: `Real Estate Management refers to the operation, control, and oversight of real estate properties, 
      including residential, commercial, and industrial properties. It encompasses various activities aimed at maximizing the value of properties 
      while ensuring they are well-maintained and provide satisfactory returns to owners and investors.`,
      githubLink: 'https://github.com/2100031390',
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
