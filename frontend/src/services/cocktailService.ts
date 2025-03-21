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
      console.log(`${API_URL}/searchByID?id=${id}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching cocktail by id:', error);
      return [];
    }
  };



