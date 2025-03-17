import React, { useState, useEffect } from 'react';
import { fetchCocktails, getRandomCocktail } from '../services/cocktailService';

const HomePage: React.FC = () => {
  const [randomCocktail, setRandomCocktail] = useState<any>(null);
  const [searchedCocktail, setSearchedCocktail] = useState<any[]>([]);
  const [ingredient, setIngredient] = useState<string>(''); // Default ingredient

  // Fetch random cocktail only once when the component mounts
  useEffect(() => {
    const getCocktails = async () => {
      const result = await getRandomCocktail();
      // Assuming the API returns an array, we want the first element
      setRandomCocktail(result[0]);
    };

    getCocktails();
  }, []);

  // Function to trigger the cocktail search when the button is clicked
  const handleSearch = async () => {
    if (ingredient) {
      const result = await fetchCocktails(ingredient);
      const shuffled = result.sort(() => Math.random() - 0.5);
    const randomTen = shuffled.slice(0, 10);
    setSearchedCocktail(randomTen); 
      console.log(result);
    } else {
      console.log("No ingredient entered");
    }
  };

  if (!randomCocktail) return <p>Loading...</p>; // Loading state while fetching data

  return (
    <div>
      <h1>Cocktail Helper</h1>
      <input
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)} // Update ingredient on input change
        placeholder="Enter an ingredient"
      />
      <button onClick={handleSearch}>Search Cocktail</button>

      <h2>Random Cocktail: {randomCocktail.strDrink}</h2>

       {/* Render first 10 searched cocktails */}
       {searchedCocktail.length > 0 ? (
        <div>
          <h2>Searched Cocktails:</h2>
          <ul>
            {searchedCocktail.map((cocktail: any, index: number) => (
              <li key={index}>{cocktail.strDrink}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No searched cocktails found for {ingredient}</p>
      )}
    </div>
  );
};

export default HomePage;
