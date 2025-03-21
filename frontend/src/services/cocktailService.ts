import axios from 'axios';

// Replace with the URL of your backend API
const API_URL = 'http://localhost:5000/api';

export const fetchCocktails = async (ingredient: string) => {
  try {
    console.log(ingredient);
    console.log(`${API_URL}/ingredient?ingredient=${ingredient}`);
    const response = await axios.get(`${API_URL}/ingredient?ingredient=${ingredient}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cocktails:', error);
    return [];
  }
};

export const fetchCocktailsByName = async (name: string) => {
  try {
    
    const response = await axios.get(`${API_URL}/search?name=${name}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cocktails:', error);
    return [];
  }
};

export const getRandomCocktail = async () => {
    try {
      const response = await axios.get(`${API_URL}/random`);
      console.log(response);
      return response.data;
      
    } catch (error) {
      console.error('Error fetching cocktails:', error);
      return [];
    }
  };

  export const getAlcoholicCocktail = async () => {
    try {
      const response = await axios.get(`${API_URL}/alchoholic`);
      console.log(response);
      return response.data;
      
    } catch (error) {
      console.error('Error fetching alchoholic cocktails:', error);
      return [];
    }
  };


  export const getNonAlcoholicCocktail = async () => {
    try {
      const response = await axios.get(`${API_URL}/non-alchoholic`);
      console.log(response);
      return response.data;
      
    } catch (error) {
      console.error('Error fetching non-alchoholic cocktails:', error);
      return [];
    }
  };


  export const fetchByID = async (id: string) => {
    try {
      const response = await axios.get(`${API_URL}/searchByID?id=${id}`);
      console.log('API Response:', response.data); // Log the full API response
  
      const cocktail = response.data[0]; // Access the first cocktail in the array
  
      if (!cocktail) {
        console.error('No cocktail found in the response.');
        return null;
      }
  
      // Extract ingredients and measurements
      const ingredients = Array.from({ length: 15 }, (_, i) => {
        const ingredient = cocktail[`strIngredient${i + 1}`];
        const measure = cocktail[`strMeasure${i + 1}`];
        if (ingredient) {
          return {
            name: ingredient,
            measure: measure || '', // Use an empty string if no measure is provided
            imageUrl: `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`,
          };
        }
        return null;
      }).filter(Boolean); // Remove null/undefined entries
  
      return {
        ...cocktail,
        ingredients, // Add processed ingredients with names, measures, and image URLs
      };
    } catch (error) {
      console.error('Error fetching cocktail by ID:', error);
      return null;
    }
  };


  export const getIngredientImages = (ingredients: string[]) => {
    console.log("in the ingredients section");
    console.log("Print 3"+ingredients);
    return ingredients.map((ingredient) => {
      if (ingredient) {
        return {
          name: ingredient,
          imageUrl: `https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`,
        };
      }
      return null;
    }).filter(Boolean); // Remove null/undefined entries
  };



