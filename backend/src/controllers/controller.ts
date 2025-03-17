import axios from "axios";
import { Request, Response } from "express";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export const getRandomCocktails = async (req: Request, res: Response): Promise<void> => {
    try {

        const response = await axios.get(`${BASE_URL}/random.php`);
        res.json(response.data.drinks || []);

    } catch (err) {

        console.error("❌ API Request Error:", err);
        res.status(500).json({ error: "Failed to fetch random cocktail: ", details: err });
    }
  };

export const searchCocktailByName = async (req: Request, res: Response): Promise<void> => {
  const { name } = req.query;
  if (!name) {
    res.status(400).json({ error: "Cocktail name is required" });
    return;
  }

  try {

    const response = await axios.get(`${BASE_URL}/search.php?s=${name}`);
    res.json(response.data.drinks || []);

  } catch (err) {

        console.error("❌ API Request Error:", err);
        res.status(500).json({ error: "Failed to search cocktail: ", details: err });
  }
};

export const searchByIngredient = async (req: Request, res: Response): Promise<void> => {
  const { ingredient } = req.query;
  if (!ingredient) {
    res.status(400).json({ error: "Ingredient is required" });
    return;
  }

  try {

    const response = await axios.get(`${BASE_URL}/filter.php?i=${ingredient}`);
    res.json(response.data.drinks || []);
    
  } catch (err) {

        console.error("❌ API Request Error:", err);
        res.status(500).json({ error: "Failed to search ingredient: ", details: err });
  }
};


export const searchByAlchoholic = async (req: Request, res: Response): Promise<void> => {
 
  try {

    const response = await axios.get(`${BASE_URL}/filter.php?a=Alcoholic`);
    res.json(response.data.drinks || []);
    
  } catch (err) {

        console.error("❌ API Request Error:", err);
        res.status(500).json({ error: "Failed to search alcholoic cocktails: ", details: err });
  }
};

export const searchByNonAlchoholic = async (req: Request, res: Response): Promise<void> => {
 
  try {

    const response = await axios.get(`${BASE_URL}/filter.php?a=Non_Alcoholic`);
    res.json(response.data.drinks || []);
    
  } catch (err) {

        console.error("❌ API Request Error:", err);
        res.status(500).json({ error: "Failed to search non-alcholoic cocktails: ", details: err });
  }
};
