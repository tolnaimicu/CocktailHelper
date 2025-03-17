import React, { useState, useEffect } from 'react';
import { getRandomCocktail } from '../services/cocktailService';
import CocktailCard from '../components/CocktailCard';
import NavBar from '../components/NavBar';
import '../style/HomePageStyle.css'; // Import the CSS file for HomePage styles
import heroImage from '../assets/logo1.png'; // Adjust the path to your image file
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const [randomCocktail, setRandomCocktail] = useState<any>(null);

  const fetchRandomCocktail = async () => {
    const result = await getRandomCocktail();
    setRandomCocktail(result[0]);
  };

  useEffect(() => {
    fetchRandomCocktail();
  }, []);

  if (!randomCocktail) return <p>Loading...</p>; // Loading state while fetching data

  return (
    <div className="home-container">
      <NavBar />

      {/* Introductory Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            
            <p>
              Welcome to CocktailHelper, your ultimate guide to discovering amazing cocktails! Whether you have a specific ingredient in mind or are looking for inspiration, we’re here to help you find the perfect drink.
            </p>
            <p>
              Enter an ingredient, and we'll suggest a list of cocktails you can make, or let us surprise you with a random cocktail. Ready to start mixing?
            </p>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Cocktails" />
          </div>
        </div>
      </section>

      {/* Option Section */}
      
      <section className="options">
      <h2 className="options-title">Get Started</h2>
        <div className="options-buttons">
          <Link to="/search">
            <button>Search by Ingredient</button>
          </Link>
          <Link to="/search-cocktail">
            <button>Search for Cocktail</button>
          </Link>
          <Link to="/search-alc-cocktail">
            <button>Search for Non-alcoholic</button>
          </Link>
        </div>
      </section>

      {/* Random Cocktail Section */}
      <section className="random-cocktail">
        <div className="random-cocktail-content">
          <div className="random-cocktail-card">
            <CocktailCard cocktail={randomCocktail} />
            <button onClick={fetchRandomCocktail}>Get A New One</button>
          </div>
          <div className="random-cocktail-text">
            <h2>Your Random Cocktail:</h2>
            <p>Discover a random cocktail and get inspired to try something new. Click the button below to generate a new random cocktail.</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;