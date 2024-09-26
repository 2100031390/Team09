import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import jsPDF from 'jspdf'; // For PDF generation
import './TemplateDetail.css'; // Import the CSS file

const TemplateDetail = () => {
  const { templateId } = useParams(); // Get the templateId from the URL
  const [formData, setFormData] = useState({
    projectTitle: '',
    description: '',
    skills: '',
    technologies: '',
    achievements: '',
    collegeName: '',
    cgpa: '',
    passedOut: ''
  });

  const formRef = useRef(); // For PDF or Word export

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Generate and download PDF
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text(`Template ID: ${templateId}`, 10, 10);
    doc.text(`Project Title: ${formData.projectTitle}`, 10, 20);
    doc.text(`Description: ${formData.description}`, 10, 30);
    doc.text(`Skills: ${formData.skills}`, 10, 40);
    doc.text(`Technologies Used: ${formData.technologies}`, 10, 50);
    doc.text(`Achievements: ${formData.achievements}`, 10, 60);
    doc.text(`College Name: ${formData.collegeName}`, 10, 70);
    doc.text(`CGPA: ${formData.cgpa}`, 10, 80);
    doc.text(`Year of Passing: ${formData.passedOut}`, 10, 90);
    doc.save(`template-${templateId}.pdf`);
  };

  // Generate and download as Word (DOCX)
  const handleDownloadWord = () => {
    const content = `
      Template ID: ${templateId}\n
      Project Title: ${formData.projectTitle}\n
      Description: ${formData.description}\n
      Skills: ${formData.skills}\n
      Technologies Used: ${formData.technologies}\n
      Achievements: ${formData.achievements}\n
      College Name: ${formData.collegeName}\n
      CGPA: ${formData.cgpa}\n
      Year of Passing: ${formData.passedOut}\n
    `;
    const blob = new Blob([content], { type: 'application/msword' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `template-${templateId}.docx`;
    link.click();
  };

  return (
    <div className="template-detail" ref={formRef}>
      <h2>Customize Template {templateId}</h2>
      {/* Form for custom data */}
      <form>
        <div>
          <label>Project Title:</label>
          <input
            type="text"
            name="projectTitle"
            placeholder="Enter project title"
            value={formData.projectTitle}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            placeholder="Enter project description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Skills:</label>
          <input
            type="text"
            name="skills"
            placeholder="Enter relevant skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Technologies Used:</label>
          <input
            type="text"
            name="technologies"
            placeholder="Enter technologies used"
            value={formData.technologies}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Achievements:</label>
          <textarea
            name="achievements"
            placeholder="Enter any achievements or milestones"
            value={formData.achievements}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>College Name:</label>
          <input
            type="text"
            name="collegeName"
            placeholder="Enter your college name"
            value={formData.collegeName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>CGPA:</label>
          <input
            type="text"
            name="cgpa"
            placeholder="Enter your CGPA"
            value={formData.cgpa}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Year of Passing:</label>
          <input
            type="text"
            name="passedOut"
            placeholder="Enter year of passing"
            value={formData.passedOut}
            onChange={handleChange}
          />
        </div>

        <button type="button" onClick={handleDownloadPDF}>
          Download as PDF
        </button>
        <button type="button" onClick={handleDownloadWord}>
          Download as Word
        </button>
      </form>

      {/* Dynamic Preview */}
      <div className="summary-preview">
        <h3>Live Preview</h3>
        <p><strong>Template ID:</strong> {templateId}</p>
        <p><strong>Project Title:</strong> {formData.projectTitle}</p>
        <p><strong>Description:</strong> {formData.description}</p>
        <p><strong>Skills:</strong> {formData.skills}</p>
        <p><strong>Technologies Used:</strong> {formData.technologies}</p>
        <p><strong>Achievements:</strong> {formData.achievements}</p>
        <p><strong>College Name:</strong> {formData.collegeName}</p>
        <p><strong>CGPA:</strong> {formData.cgpa}</p>
        <p><strong>Year of Passing:</strong> {formData.passedOut}</p>
      </div>
    </div>
  );
};

export default TemplateDetail;
