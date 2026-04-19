import { useNavigate, useParams } from "react-router-dom";
import RatingStars from "../components/rating-stars/RatingStars";
import { pokemons } from "../data/pokemon";
import { useState } from "react";
import { useRatings } from "../context/RatingsContext";
import "../index.css";

function DetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const { getRating, ratePokemon } = useRatings();

  const numericId = Number(id);
  const pokemon = pokemons.find((p) => p.id === numericId);

  if (!pokemon) return <div>Pokemon not found</div>;

  function handleRating(newRating: number) {
    ratePokemon(pokemon.id, newRating);
    setIsRatingOpen(false);
  }

  const toggleChange = () => {
    setIsRatingOpen((prev) => !prev);
  };

  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate("/")}>
        Go back
      </button>
      <h2>{pokemon.name}</h2>
      <img className="details-img" src={pokemon.image} alt={pokemon.name} />
      <p>{pokemon.description}</p>
      <RatingStars value={getRating(pokemon.id, pokemon.rating)} />

      <button className="rate-btn" onClick={toggleChange}>
        Rate
      </button>

      {isRatingOpen && (
        <div className="user-rating-container">
          <RatingStars value={0} interactive={true} onChange={handleRating} />
        </div>
      )}
    </div>
  );
}

export default DetailsPage;
