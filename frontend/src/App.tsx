import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchByIngrPage';
import SearchCocktailPage from './pages/SearchForCocktailPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search-cocktail" element={<SearchCocktailPage />} />
      </Routes>
    </Router>
  );
};

export default App;