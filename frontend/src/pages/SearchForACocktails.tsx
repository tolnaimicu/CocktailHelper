import React, { useState } from 'react';
import { fetchCocktails, getAlcoholicCocktail, getNonAlcoholicCocktail } from '../services/cocktailService';
import CocktailCard from '../components/CocktailCard';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../style/SearchPageStyle.css'; // Import the CSS file for SearchPage styles

const SearchForACocktailsPage: React.FC = () => {
  const [searchedCocktail, setSearchedCocktail] = useState<any[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [searchedMessage, setSearchedMessage] = useState<string>('');

  const handleASearch = async () => {
      try {
        const result = await getAlcoholicCocktail();
        if (result.length === 0) {
          setErrorMessage('No cocktails found for the entered ingredient.');
        } else {
          const shuffled = result.sort(() => Math.random() - 0.5);
          const randomTen = shuffled.slice(0, 12);
          setSearchedCocktail(randomTen);
          setSearchedMessage('Alcoholic Cocktails:');
        }
      } catch (error) {
        setErrorMessage('No cocktail found with this ingredient. Please try again.');
        console.error(error);
      }
    
  };


  const handleNonASearch = async () => {
      try {
        const result = await getNonAlcoholicCocktail();
        if (result.length === 0) {
          setErrorMessage('No cocktails found for the entered ingredient.');
        } else {
          const shuffled = result.sort(() => Math.random() - 0.5);
          const randomTen = shuffled.slice(0, 12);
          setSearchedCocktail(randomTen);
          setSearchedMessage('Non-Alcoholic Cocktails:');

        }
      } catch (error) {
        setErrorMessage('No cocktail found with this ingredient. Please try again.');
        console.error(error);
      }
  };

  return (
    <div className="search-container">
      <NavBar />
      <div className="content">
        <h1>Alcohol or No?</h1>
        <p>You decide what kind of party are you having, the Cocktail Helper is always here to help!</p>
        <div className="search-bar">
            <button onClick={handleASearch}>Alcoholic Cocktail</button>
            <button onClick={handleNonASearch}>Non-Alcoholic Cocktail</button>
        </div>

        {/* Display error message if any */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Render first 12 searched cocktails */}
        {searchedCocktail.length > 0 ? (
          <div>
            <h2>{searchedMessage}</h2>
            <div className="cocktail-list">
              {searchedCocktail.map((cocktail: any, index: number) => (
                <CocktailCard key={index} cocktail={cocktail} />
              ))}
            </div>
          </div>
        ) : (
          <p></p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchForACocktailsPage;