import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for navigation
import './Home.css'; // Importing styles for Home

const Home = () => {
  return (
    <div className="home">
      <div className="intro">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi! I'm Chaya, a passionate developer with skills in various technologies.
          This is a showcase of my Skills and Projects.
        </p>
      </div>
      
      <div className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          {/* Skill cards linked to the detail pages */}
          <Link to="/skills/javascript" className="skill-card">JavaScript</Link>
          <Link to="/skills/react" className="skill-card">React</Link>
          <Link to="/skills/css" className="skill-card">CSS</Link>
          <Link to="/skills/nodejs" className="skill-card">Node.js</Link>
          <Link to="/skills/mongodb" className="skill-card">MongoDB</Link>
        </div>
      </div>

      <div className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          {/* Project cards linked to the detail pages */}
          <Link to="/projects/1" className="project-card">
            <h3>Project 1</h3>
            <p>A description of your project goes here.</p>
          </Link>
          <Link to="/projects/2" className="project-card">
            <h3>Project 2</h3>
            <p>A description of your project goes here.</p>
          </Link>
          <Link to="/projects/3" className="project-card">
            <h3>Project 3</h3>
            <p>A description of your project goes here.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
