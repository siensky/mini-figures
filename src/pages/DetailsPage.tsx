import { useNavigate, useParams } from "react-router-dom";
import RatingStars from "../components/rating-stars/RatingStars";
import { pokemons } from "../data/pokemon";
import { useState } from "react";

function DetailsPage() {
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const [userRating, setUserRating] = useState<number>(() => getStoredRating(numericId));

  const getStoredRating(id: number): number => {
    const savedRating = localStorage.getItem(`pokemon-rating-${id}`)
    return savedRating ? Number(savedRating) : 0 
  }

  const saveRating(id:number, rating: number) => {
    localStorage.setItem(`pokemon-rating-${id}`, String(rating))
  }

  const navigate = useNavigate();

  const { id } = useParams();
  const numericId = Number(id);

  const pokemon = pokemons.find((p) => p.id === numericId);
  if (!pokemon) return <div>Pokemon not found</div>;

  function handleRating(newRating: number) {
    setUserRating(newRating);
    saveRating(pokemon.id, newRating);
    setIsRatingOpen(false);
  }

  const displayedRating = userRating ? userRating : pokemon.rating;

  const toggleChange = () => {
    setIsRatingOpen(!isRatingOpen);
  };

  return (
    <div className="details-container">
      <button onClick={() => navigate("/")}>Go back</button>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.image} alt={pokemon.name} />
      <p>{pokemon.description}</p>
      <RatingStars value={displayedRating} />

      <button onClick={toggleChange}>Rate</button>

      {isRatingOpen && (
        <div className="user-rating-container">
          <RatingStars value={0} interactive={true} onChange={handleRating} />
        </div>
      )}
    </div>
  );
}

export default DetailsPage;
