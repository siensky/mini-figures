import { useNavigate, useParams } from "react-router-dom";
import RatingStars from "../components/rating-stars/RatingStars";
import { pokemons } from "../data/pokemon";
import { useState } from "react";
import { useRatings } from "../context/RatingsContext";
import "../index.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isRatingOpen, setIsRatingOpen] = useState(false);
  const { getRating, ratePokemon } = useRatings();

  const numericId = Number(id);
  const pokemon = pokemons.find((p) => p.id === numericId);

  if (pokemon === undefined) return <div>Pokemon not found</div>;

  function handleRating(newRating: number) {
    if (pokemon) {
      ratePokemon(pokemon.id, newRating);
      setIsRatingOpen(false);
    }
  }

  const toggleChange = () => {
    setIsRatingOpen((prev) => !prev);
  };

  return (
    <div className="details-page">
      <nav className="details-nav">
        <button className="back-btn" onClick={() => navigate("/")}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ marginRight: "4px" }} />
          Back
        </button>
        <h1>{pokemon.name}</h1>
      </nav>
      <div className="details-card">
        <div className="img-container">
          <img className="details-img" src={pokemon.image} alt={pokemon.name} />
        </div>

        <p className="description">{pokemon.description}</p>

        <div className="rating-container">
          <div className="current-rating">
            <p>Current rating:</p>
            <RatingStars value={getRating(pokemon.id, pokemon.rating)} />
          </div>

          <button
            className={`rate-btn${isRatingOpen ? " active" : ""} `}
            onClick={toggleChange}
          >
            {isRatingOpen ? "Cancel" : "Rate This Pokemon"}
          </button>

          {isRatingOpen && (
            <div className="rating-open">
              <p>Tap a star to rate:</p>
              <RatingStars
                value={0}
                interactive={true}
                onChange={handleRating}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
