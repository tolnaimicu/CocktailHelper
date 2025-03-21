import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../style/AboutPageStyle.css'; // Import the CSS file for AboutPage styles

const AboutPage: React.FC = () => {
  return (
    <div className="about-page-container">
      <NavBar />
      <div className="about-content">
        <h1>About This Project</h1>
        <p className="about-description">
          Welcome to <strong>CocktailHelper</strong>, a modern web application designed to help you discover and explore a wide variety of cocktails. Whether you're a professional bartender or just someone who loves experimenting with drinks, this app is your go-to resource for cocktail recipes and inspiration.
        </p>

        <div className="about-section">
          <h2>Technologies Used</h2>
          <ul className="tech-list">
            <li>React (Frontend Framework)</li>
            <li>TypeScript (Static Typing)</li>
            <li>Axios (HTTP Requests)</li>
            <li>React Router (Routing)</li>
            <li>CSS Modules (Styling)</li>
            <li>GitHub (Source Control)</li>
            <li>Open Source API: <a href="https://www.thecocktaildb.com/" target="_blank" rel="noopener noreferrer">TheCocktailDB</a></li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Project Structure</h2>
          <p>
            The project is divided into two main parts: the <strong>Frontend</strong> and the <strong>Backend</strong>.
          </p>
          <ul className="structure-list">
            <li>
              <strong>Frontend:</strong> Built using React and TypeScript, the frontend handles the user interface, routing, and interaction with the backend API. It includes components for searching cocktails, viewing details, and navigating the app.
            </li>
            <li>
              <strong>Backend:</strong> The backend is powered by the <a href="https://www.thecocktaildb.com/" target="_blank" rel="noopener noreferrer">TheCocktailDB API</a>, which provides a comprehensive database of cocktail recipes, ingredients, and images. The backend is responsible for serving cocktail data to the frontend.
            </li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Separation of Concerns</h2>
          <p>
            This project follows the principle of <strong>separation of concerns</strong> to ensure that each part of the application has a clear and distinct responsibility. Here’s how this was achieved:
          </p>
          <ul className="modular-list">
            <li>
              <strong>Components:</strong> The UI is broken down into reusable React components, such as the navigation bar, footer, and cocktail cards. This makes the codebase easier to maintain and extend.
            </li>
            <li>
              <strong>Services:</strong> API calls and data-fetching logic are handled in a dedicated service layer, keeping the components focused on rendering and user interaction.
            </li>
            <li>
              <strong>Routing:</strong> React Router is used to manage navigation between pages, ensuring a clean separation between different views (e.g., search, details, about).
            </li>
            <li>
              <strong>Styling:</strong> CSS Modules are used to scope styles to individual components, preventing style conflicts and making the design system modular.
            </li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Features</h2>
          <ul className="feature-list">
            <li>Search for cocktails by name or ingredient.</li>
            <li>View detailed cocktail recipes with images and instructions.</li>
            <li>Explore random cocktails for inspiration.</li>
            <li>Dynamic ingredient-based search functionality.</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Open Source API</h2>
          <p>
            This project uses the <a href="https://www.thecocktaildb.com/" target="_blank" rel="noopener noreferrer">TheCocktailDB API</a>, an open-source API that provides a comprehensive database of cocktail recipes, ingredients, and images. Special thanks to the creators of this API for making this project possible.
          </p>
        </div>

        <div className="about-section">
          <h2>Why This Project?</h2>
          <p>
            This project was created as a way to learn and experiment with modern web development technologies while building something fun and useful. It combines the power of React, TypeScript, and APIs to deliver a seamless user experience.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;