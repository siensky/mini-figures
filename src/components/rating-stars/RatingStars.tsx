import "./rating-stars.css";

type RatingProps = {
  value: number;
  interactive: boolean;
  onChange?: (rating: number) => void;
};

function RatingStars({ value, interactive = false, onChange }: RatingProps) {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star) => (
        <span
          key={star}
          onClick={interactive ? () => onChange?.(star) : undefined}
          className={`star ${star <= value ? "filled" : ""}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default RatingStars;
