import express from "express";
import { getRandomCocktails, searchCocktailByName, searchByIngredient, searchByAlchoholic, searchByNonAlchoholic } from "../controllers/controller";

const router = express.Router();

router.get("/random", getRandomCocktails);
router.get("/search", searchCocktailByName);
router.get("/ingredient", searchByIngredient);
router.get("/alchoholic", searchByAlchoholic);
router.get("/non-alchoholic", searchByNonAlchoholic);

export default router;
