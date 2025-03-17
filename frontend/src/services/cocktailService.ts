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

export const fetchCocktailDetails = async (id: string) => {
  try {
    const response = await axios.get(`${API_URL}/cocktail/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cocktail details:', error);
    return null;
  }
};
