import React, { useEffect, useState } from 'react';
import { fetchByID } from '../services/cocktailService';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../style/SpecificCocktailStyle.css'; // Import the CSS file for SpecificCocktail styles
import { useLocation } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SpecificCocktailPage: React.FC = () => {
  const query = useQuery();
  const searchQuery = query.get('query');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [searchedCocktail, setSearchedCocktail] = useState<any | null>(null);

  useEffect(() => {
    if (searchQuery) {
      handleSearch(searchQuery);
    }
  }, [searchQuery]);

  const handleSearch = async (query: string) => {
    if (query) {
      try {
        const result = await fetchByID(query);
        if (!result || result.length === 0) {
          setErrorMessage('No cocktail found with this ID.');
        } else {
          setSearchedCocktail(result[0]); // Access the first element of the array
        }
      } catch (error) {
        setErrorMessage('An error occurred while fetching the cocktail. Please try again.');
        console.error(error);
      }
    } else {
      setErrorMessage('Invalid query. Please try again.');
    }
  };

  return (
    <div className="specific-cocktail-container">
      <NavBar />
      <div className="content">
        {searchedCocktail ? (
          <>
            <h1 className="cocktail-title">{searchedCocktail.strDrink}</h1>
            <div className="cocktail-details">
              <div className="cocktail-image">
                <img src={searchedCocktail.strDrinkThumb} alt={searchedCocktail.strDrink} />
              </div>
              <div className="cocktail-ingredients">
                <h2>Ingredients</h2>
                <ul>
                  {Array.from({ length: 15 }, (_, i) => i + 1).map((index) => {
                    const ingredient = searchedCocktail[`strIngredient${index}`];
                    const measure = searchedCocktail[`strMeasure${index}`];
                    return (
                      ingredient && (
                        <li key={index}>
                          {measure ? `${measure} ` : ''}{ingredient}
                        </li>
                      )
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="cocktail-instructions">
              <h2>Instructions</h2>
              <p>{searchedCocktail.strInstructions}</p>
            </div>
            <div className="cocktail-glass">
              <h2>Glass</h2>
              <p>{searchedCocktail.strGlass}</p>
            </div>
          </>
        ) : (
          <p>{errorMessage || 'Loading...'}</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SpecificCocktailPage;