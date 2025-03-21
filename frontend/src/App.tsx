import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchByIngrPage';
import SearchCocktailPage from './pages/SearchForCocktailPage';
import SearchForACocktailsPage from './pages/SearchForACocktails';
import SpecificCocktailPage from './pages/SpecificCocktail';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search-cocktail" element={<SearchCocktailPage />} />
        <Route path="/search-alc-cocktail" element={<SearchForACocktailsPage />} />
        <Route path="/specificCocktai" element={<SpecificCocktailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;