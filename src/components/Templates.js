import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './Templates.css'; // Import styles for Templates

const initialTemplates = [
  { id: '1', title: 'Template 1', details: 'A clean and modern portfolio layout.' },
  { id: '2', title: 'Template 2', details: 'A creative and colorful design.' },
  { id: '3', title: 'Template 3', details: 'A minimalist approach with elegant typography.' },
];

const Templates = () => {
  const [templates, setTemplates] = useState(initialTemplates);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedTemplates = Array.from(templates);
    const [removed] = reorderedTemplates.splice(result.source.index, 1);
    reorderedTemplates.splice(result.destination.index, 0, removed);

    setTemplates(reorderedTemplates);
  };

  return (
    <div className="templates">
      <h2>Select Your Template</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              className="template-list"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {templates.map((template, index) => (
                <Draggable key={template.id} draggableId={template.id} index={index}>
                  {(provided) => (
                    <Link
                      to={`/templates/${template.id}`}  // Route to template details
                      className="template-link"
                    >
                      <div
                        className="template-card"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <h3>{template.title}</h3>
                        <p>{template.details}</p>
                      </div>
                    </Link>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Templates;
