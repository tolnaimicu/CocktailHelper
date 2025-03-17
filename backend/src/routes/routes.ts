import express from "express";
import { getRandomCocktails, searchCocktailByName, searchByIngredient } from "../controllers/controller";

const router = express.Router();

router.get("/random", getRandomCocktails);
router.get("/search", searchCocktailByName);
router.get("/ingredient", searchByIngredient);

export default router;
