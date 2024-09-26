import React from 'react';
import './About.css'; // Importing styles for About

const About = () => {
  return (
    <div className="about">
      <h2>About This Project</h2>
      <div className="about-content">
        <p>
          This drag-and-drop portfolio builder helps users easily create and
          customize their portfolios. .
        </p>
        <div className="features">
          <div className="feature-card">
            <h3>Easy to Use</h3>
            <p>Intuitive drag-and-drop interface for seamless customization.</p>
          </div>
          <div className="feature-card">
            <h3>Customizable Templates</h3>
            <p>Select from a variety of templates to match your style.</p>
          </div>
          <div className="feature-card">
            <h3>Live Preview</h3>
            <p>Preview your portfolio in real-time as you make changes.</p>
          </div>
          <div className="feature-card">
            <h3>Publish with Ease</h3>
            <p>Get a custom URL to share your portfolio with the world.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
