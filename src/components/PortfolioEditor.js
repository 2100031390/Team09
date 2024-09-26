import React, { useState } from 'react';

const PortfolioEditor = () => {
  const [sections, setSections] = useState(['Introduction', 'Projects', 'Skills']);

  const onDragOver = (event) => {
    event.preventDefault();
  };

  const onDrop = (event, index) => {
    const draggedItem = event.dataTransfer.getData('section');
    const updatedSections = [...sections];
    updatedSections.splice(index, 0, draggedItem);
    setSections(updatedSections);
  };

  return (
    <div className="portfolio-editor">
      {sections.map((section, index) => (
        <div
          key={index}
          draggable
          onDragOver={onDragOver}
          onDrop={(event) => onDrop(event, index)}
        >
          <h3>{section}</h3>
        </div>
      ))}
    </div>
  );
};

export default PortfolioEditor;
