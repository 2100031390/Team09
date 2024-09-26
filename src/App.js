import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import PortfolioEditor from './components/PortfolioEditor';
import TemplateDetail from './components/TemplateDetail';
import Templates from './components/Templates';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import PortfolioViewer from './components/PortfolioViewer';
import SkillDetail from './components/SkillDetail';  // Import SkillDetail
import ProjectDetail from './components/ProjectDetail'; // Import ProjectDetail
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/skills/:skillId" element={<SkillDetail />} /> {/* Skill detail route */}
          <Route path="/projects/:projectId" element={<ProjectDetail />} /> {/* Project detail route */}
          <Route path="/templates" element={<Templates />} />
          <Route path="/templates/:templateId" element={<TemplateDetail />} />
          <Route path="/portfolios/:customUrl" element={<PortfolioViewer />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
