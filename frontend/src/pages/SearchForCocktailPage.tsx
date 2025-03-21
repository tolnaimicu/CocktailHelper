import React, { useEffect, useState } from 'react';
import { fetchCocktailsByName } from '../services/cocktailService';
import CocktailCard from '../components/CocktailCard';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../style/SearchPageStyle.css'; // Import the CSS file for SearchPage styles
import { useLocation } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchForCocktailPage: React.FC = () => {
  const [searchedCocktail, setSearchedCocktail] = useState<any[]>([]);
  const [name, setName] = useState<string>('');
  const [searchClicked, setSearchClicked] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const query = useQuery();
  const searchQuery = query.get('query');

  useEffect(() => {
    if (searchQuery) {
      setName(searchQuery); // Pre-fill the search input field with the query parameter
      handleSearch(searchQuery);
    }
  }, [searchQuery]);

  const handleSearch = async (query: string) => {
    setSearchClicked(true);
    setErrorMessage('');
    if (query) {
      try {
        const result = await fetchCocktailsByName(query);
        if (result.length === 0) {
          setErrorMessage('No cocktails found by this name.');
        } else {
          const shuffled = result.sort(() => Math.random() - 0.5);
          const randomTen = shuffled.slice(0, 12);
          setSearchedCocktail(randomTen);
        }
      } catch (error) {
        setErrorMessage('No cocktail found by this name. Please try again.');
        console.error(error);
      }
    } else {
      setErrorMessage('Please enter a name.');
    }
  };

  const handleButtonClick = () => {
    handleSearch(name);
  };

  return (
    <div className="search-container">
      <NavBar />
      <div className="content">
        <h1>Search by Name</h1>
        <p>Enter your prefered name below and click "Search Cocktail" to find the cocktail recipes.</p>
        <div className="search-bar">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter a cocktail name"
          />
          <button onClick={handleButtonClick}>Search Cocktail</button>
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
          searchClicked && !errorMessage && <p>No cocktails found for "{name}".</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchForCocktailPage;