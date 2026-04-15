import FigureCard from "../components/figure-card/FigureCard.js";
import { pokemons } from "../data/pokemon.js";

function CatalogPage() {
  return (
    <>
      <div className="grid-container">
        {pokemons.map((pokemon) => (
          <div className="grid-item">
            <FigureCard
              key={pokemon.id}
              pokemon={pokemon}
              rating={pokemon.rating}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default CatalogPage;
