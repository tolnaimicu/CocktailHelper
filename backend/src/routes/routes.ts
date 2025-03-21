import express from "express";
import { getRandomCocktails, searchCocktailByName, searchByIngredient, searchByAlchoholic, searchByNonAlchoholic, searchById } from "../controllers/controller";

const router = express.Router();

router.get("/random", getRandomCocktails);
router.get("/search", searchCocktailByName);
router.get("/ingredient", searchByIngredient);
router.get("/alchoholic", searchByAlchoholic);
router.get("/non-alchoholic", searchByNonAlchoholic);
router.get("/searchByID", searchById);

export default router;
