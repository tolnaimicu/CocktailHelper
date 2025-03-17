import React, { useState } from 'react';
import { fetchCocktails } from '../services/cocktailService';
import CocktailCard from '../components/CocktailCard';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../style/SearchPageStyle.css'; // Import the CSS file for SearchPage styles

const SearchPage: React.FC = () => {
  const [searchedCocktail, setSearchedCocktail] = useState<any[]>([]);
  const [ingredient, setIngredient] = useState<string>('');
  const [searchClicked, setSearchClicked] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSearch = async () => {
    setSearchClicked(true);
    setErrorMessage(''); // Reset error message
    if (ingredient) {
      try {
        const result = await fetchCocktails(ingredient);
        if (result.length === 0) {
          setErrorMessage('No cocktails found for the entered ingredient.');
        } else {
          const shuffled = result.sort(() => Math.random() - 0.5);
          const randomTen = shuffled.slice(0, 12);
          setSearchedCocktail(randomTen);
        }
      } catch (error) {
        setErrorMessage('No cocktail found with this ingredient. Please try again.');
        console.error(error);
      }
    } else {
      setErrorMessage('Please enter an ingredient.');
    }
  };

  return (
    <div className="search-container">
      <NavBar />
      <div className="content">
        <h1>Search by Ingredient</h1>
        <p>Enter an ingredient below and click "Search Cocktail" to find cocktails you can make with that ingredient.</p>
        <div className="search-bar">
          <input
            type="text"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
            placeholder="Enter an ingredient"
          />
          <button onClick={handleSearch}>Search Cocktail</button>
        </div>

        {/* Display error message if any */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Render first 12 searched cocktails */}
        {searchedCocktail.length > 0 ? (
          <div>
            <h2>Searched Cocktails:</h2>
            <div className="cocktail-list">
              {searchedCocktail.map((cocktail: any, index: number) => (
                <CocktailCard key={index} cocktail={cocktail} />
              ))}
            </div>
          </div>
        ) : (
          searchClicked && !errorMessage && <p></p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;