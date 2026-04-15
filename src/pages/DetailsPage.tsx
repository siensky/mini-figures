import { useParams } from "react-router-dom";
import RatingStars from "../components/rating-stars/RatingStars";
import { pokemons } from "../data/pokemon";

function DetailsPage() {
    const { id } = useParams()
    if (!id) return <div>Invalid pokemon id</div>

    const numericId = Number(id)
    const pokemon = pokemons.find(p => p.id === numericId)
    

  return (
    <div className="details-container">
        <button>Go back</button>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.image} alt={pokemon.name} />
        <p>{pokemon.description}</p>
        <RatingStars value={pokemon.rating} />
        <div className="user-rating-container">
            <button onClick={() => {}}>Rate</button>

        </div>
    </div>
  );
}

export default DetailsPage;