import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/CocktailCardStyle.css';

interface CocktailCardProps {
  cocktail: any;
}

const CocktailCard: React.FC<CocktailCardProps> = ({ cocktail }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/cocktail/${cocktail.idDrink}`);
  };

  return (
    <div className="cocktail-card" onClick={handleClick}>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <h3>{cocktail.strDrink}</h3>
    </div>
  );
};

export default CocktailCard;