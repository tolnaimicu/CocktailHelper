import dotenv from "dotenv";

dotenv.config();

export const config = {
  API_URL: "https://www.thecocktaildb.com/api/json/v1/1",
  PORT: process.env.PORT || 5000,
};
