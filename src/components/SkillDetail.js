import React from 'react';
import { useParams } from 'react-router-dom'; // To get the skill name from the URL

const SkillDetail = () => {
  const { skillName } = useParams(); // Access the skill name from the URL parameter

  // You can define skill details dynamically based on skillName
  const skills = {
    javascript: {
      name: 'JavaScript',
      description: 'JavaScript is a programming language that allows you to implement complex features on web pages.',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    react: {
      name: 'React',
      description: 'React is a JavaScript library for building user interfaces.',
      link: 'https://reactjs.org/'
    },
    // Add more skills here...
  };

  const skill = skills[skillName];

  if (!skill) {
    return <div>Skill not found.</div>;
  }

  return (
    <div>
      <h2>{skill.name}</h2>
      <p>{skill.description}</p>
      <a href={skill.link} target="_blank" rel="noopener noreferrer">
        Learn more about {skill.name}
      </a>
    </div>
  );
};

export default SkillDetail;
