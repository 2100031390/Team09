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
  
  const [shareableLink, setShareableLink] = useState(''); // For the Word file shareable link
  const [customUrl, setCustomUrl] = useState(''); // For the custom URL input
  const [publishedLink, setPublishedLink] = useState(''); // For the published portfolio link

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

  // Generate and download as Word (DOCX) and create a shareable link
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

    // Create a shareable link (in a real scenario, this should be uploaded to a server)
    const shareableURL = link.href;
    setShareableLink(shareableURL);
  };

  // Copy the shareable link to clipboard
  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareableLink).then(() => {
      alert('Link copied to clipboard!');
    }).catch((err) => {
      console.error('Could not copy text: ', err);
    });
  };

  // Publish the portfolio
  const handlePublishPortfolio = () => {
    // In a real application, this would involve an API call to save the data to a database
    const publishedPortfolioLink = `https://drive.google.com/file/d/1VVJ6q7To30l5Vwk748UfY949LfTlGz0K/view?usp=drive_link/${customUrl}`;
    setPublishedLink(publishedPortfolioLink);
    alert('Portfolio published successfully!');
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

        {/* Only show the Copy Link button if the shareable link exists */}
        {shareableLink && (
          <div>
            <p>Shareable Link: <a href={shareableLink} target="_blank" rel="noopener noreferrer">{shareableLink}</a></p>
            <button type="button" onClick={handleCopyLink}>
              Copy Link to Clipboard
            </button>
          </div>
        )}
        
        {/* Custom URL Section */}
        <div>
          <label>Custom URL:</label>
          <input
            type="text"
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
            placeholder="Enter your custom URL"
          />
        </div>
        <button type="button" onClick={handlePublishPortfolio}>
          Publish Portfolio
        </button>

        {/* Only show the published link if it exists */}
        {publishedLink && (
          <div>
            <p>Your published portfolio link: <a href={publishedLink} target="_blank" rel="noopener noreferrer">{publishedLink}</a></p>
            <button type="button" onClick={() => navigator.clipboard.writeText(publishedLink)}>
              Copy Published Link
            </button>
          </div>
        )}
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
