import type { Pokemon } from "../../types/pokemon";

export type FigureCardProps = {
    pokemon: Pokemon
    rating: number
}

function FigureCard({pokemon, rating}: FigureCardProps ){
  return (
    <div className="figure-card">
        <img src={pokemon.image} alt={pokemon.name} />
        <h3>{pokemon.name}</h3>
        <h4>{rating}</h4>
    </div>
  );
}

export default FigureCard;