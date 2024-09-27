import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { skills } from './skillsData'; // Ensure this path is correct

const SkillDetail = () => {
  const { skillName } = useParams(); // Get the skillName from the route
  const [skill, setSkill] = useState(null); // State to manage the skill object
  const [selectedLevel, setSelectedLevel] = useState(''); // State to manage selected skill level

  // Fetch the skill details dynamically
  useEffect(() => {
    const fetchedSkill = skills[skillName?.toLowerCase()];
    if (fetchedSkill) {
      setSkill(fetchedSkill); // Set the skill data
      setSelectedLevel(fetchedSkill.defaultLevel); // Set the default skill level
    } else {
      setSkill(null); // If skill is not found
    }
  }, [skillName]); // This will re-run when skillName changes

  const handleLevelChange = (e) => {
    setSelectedLevel(e.target.value);
  };

  if (!skill) {
    return <div>Invalid skill route. Please try again.</div>;
  }

  return (
    <div>
      <h2>{skill.name}</h2>
      <p>{skill.description}</p>

      {/* Dropdown to allow user to select skill level */}
      <label htmlFor="skill-level">Select your skill level:</label>
      <select id="skill-level" value={selectedLevel} onChange={handleLevelChange}>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>

      {/* Display the selected skill level */}
      <p>Skill Level: {selectedLevel}</p>

      {/* Link to learn more about the skill */}
      <a href={skill.link} target="_blank" rel="noopener noreferrer">
        Learn more about {skill.name}
      </a>
    </div>
  );
};

export default SkillDetail;
