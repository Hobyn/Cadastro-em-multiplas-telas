import React from "react";
/* Icons */
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

/* Css */
import "./ReviewForm.css";

const ReviewForm = ({ data, updateFielHandler }) => {
  return (
    <div className="review-form">
    <div className="form-control score-container">
      <label className="radio-container">
        <input
          type="radio"
          value="unsatisfied"
          name="review"
          checked={data.review === "unsatisfied"}
          required
          onChange={(e) => updateFielHandler("review", e.target.value)}
        />
        <BsFillEmojiFrownFill />
        <p>Insatisfeito</p>
      </label>
      <label className="radio-container">
        <input
          type="radio"
          value="neutral"
          name="review"
          checked={data.review === "neutral"}
          onChange={(e) => updateFielHandler("review", e.target.value)}
        />
        <BsFillEmojiNeutralFill />
        <p>Poderia ser melhor</p>
      </label>
      <label className="radio-container">
        <input
          type="radio"
          value="satisfied"
          name="review"
          checked={data.review === "satisfied"}
          onChange={(e) => updateFielHandler("review", e.target.value)}
        />
        <BsFillEmojiSmileFill />
        <p>Satisfeito</p>
      </label>
      <label className="radio-container">
        <input
          type="radio"
          value="very_satisfied"
          name="review"
          checked={data.review === "very_satisfied"}
          onChange={(e) => updateFielHandler("review", e.target.value)}
        />
        <BsFillEmojiHeartEyesFill />
        <p>Muito satisfeito</p>
      </label>
    </div>
    <div className="form-control">
      <label htmlFor="comment">Comentário:</label>
      <textarea
        name="cooment"
        id="comment"
        placeholder="Conte como foi a sua experiência com o produto..."
        value={data.comment || ""}
        required
        onChange={(e) => updateFielHandler("comment", e.target.value)}
      ></textarea>
    </div>
  </div>
  );
};

export default ReviewForm;
