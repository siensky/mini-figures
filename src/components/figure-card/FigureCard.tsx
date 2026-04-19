import type { Pokemon } from "../../types/pokemon";
import RatingStars from "../rating-stars/RatingStars";
import "./figure-card.css"

export type FigureCardProps = {
    pokemon: Pokemon
    rating: number
}

function FigureCard({pokemon, rating}: FigureCardProps ){
  return (
    <div className="figure-card">
        <img className="card-img" src={pokemon.image} alt={pokemon.name} />
        <h3>{pokemon.name}</h3>
        <RatingStars value={rating} />
    </div>
  );
}

export default FigureCard;