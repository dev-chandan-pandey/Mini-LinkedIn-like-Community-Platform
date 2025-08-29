import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TemplateSelectionPage from './pages/TemplateSelectionPage';
import PortfolioFormPage from './pages/PortfolioFormPage';
import ProfessionalsListPage from './pages/ProfessionalsListPage';
import PortfolioPage from './pages/PortfolioPage';
// import Header from './components/Header.jsx'
function App() {
  return (
  
  
    <Router>
      <Routes>
        <Route path="/" element={<TemplateSelectionPage />} />
      
        {/* We will add the other routes here later */}
        <Route path="/create" element={<PortfolioFormPage />} />
        <Route path="/professionals" element={<ProfessionalsListPage />} />
        <Route path="/portfolio/:id" element={<PortfolioPage />} />
      </Routes>
    </Router>
  
  );
}

export default App;