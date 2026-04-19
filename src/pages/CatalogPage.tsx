import { Link } from "react-router-dom";
import FigureCard from "../components/figure-card/FigureCard.js";
import { pokemons } from "../data/pokemon.js";
import { useRatings } from "../context/RatingsContext.js";

function CatalogPage() {
    const { getRating } = useRatings()

  return (
    <>
      <div className="grid-container">
        {pokemons.map((pokemon) => (
          <div className="grid-item">
            <Link to={`/pokemon/${pokemon.id}`} className="figure-card-link" >
            <FigureCard
              key={pokemon.id}
              pokemon={pokemon}
              rating={getRating(pokemon.id, pokemon.rating)}
            />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default CatalogPage;
