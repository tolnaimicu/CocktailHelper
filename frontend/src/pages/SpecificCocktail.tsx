import React, { useEffect, useState } from 'react';
import { fetchByID } from '../services/cocktailService';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../style/SpecificCocktailStyle.css'; // Import the CSS file for SpecificCocktail styles
import { useLocation, useNavigate } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SpecificCocktailPage: React.FC = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const searchQuery = query.get('query');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [searchedCocktail, setSearchedCocktail] = useState<any | null>(null);

  useEffect(() => {
    if (searchQuery) {
      handleSearch(searchQuery);
    }
  }, [searchQuery]);

  const handleSearch = async (query: string) => {
    try {
      const result = await fetchByID(query);
      if (!result) {
        setErrorMessage('No cocktail found with this ID.');
      } else {
        setSearchedCocktail(result);
      }
    } catch (error) {
      setErrorMessage('An error occurred while fetching the cocktail. Please try again.');
      console.error(error);
    }
  };


  const handleIngredientClick = (ingredientName: string) => {
    // Navigate to the ingredient details page
    navigate(`/search/?query=${ingredientName}`);
  };

  return (
    <div className="specific-cocktail-container">
      <NavBar />
      <div className="content">
        {searchedCocktail ? (
          <>
            <h1 className="cocktail-title">{searchedCocktail.strDrink}</h1>
            <p className="cocktail-subtitle">{searchedCocktail.strAlcoholic} Drink</p>
            <div className="cocktail-details">
              {/* Cocktail Image */}
              <div className="cocktail-image">
                <img src={searchedCocktail.strDrinkThumb} alt={searchedCocktail.strDrink} />
                {searchedCocktail.strImageSource && (
                  <p className="image-source">
                    Image Source: <a href={searchedCocktail.strImageSource}>Creative Commons</a>
                  </p>
                )}
              </div>

              {/* Ingredients Section */}
              <div className="cocktail-ingredients">
                <h2>Ingredients</h2>
                <ul>
                  {searchedCocktail.ingredients.map((ingredient: any, index: number) => (
                    <li
                    key={index}
                    className="ingredient-item"
                    onClick={() => handleIngredientClick(ingredient.name)} // Pass the ingredient name to the handler
                    style={{ cursor: 'pointer' }} // Add a pointer cursor to indicate it's clickable
                  >
                    <img
                      src={ingredient.imageUrl}
                      alt={ingredient.name}
                      className="ingredient-image"
                    />
                    <span className="ingredient-text">
                      {ingredient.measure} {ingredient.name}
                    </span>
                  </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Instructions Section */}
            <div className="cocktail-instructions">
              <h2>Instructions</h2>
              <p>{searchedCocktail.strInstructions}</p>
            </div>

            {/* Glass Section */}
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