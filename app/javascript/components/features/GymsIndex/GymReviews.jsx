import React from "react";

const GymReviews = ({ gym }) => {
  if (!gym.reviews) {
    console.log("no reviews");
    return null;
  }

  return (
    <div>
      <div className="gym-item__container">
        <div className="gym-item__content">
          <ul>
            {gym.reviews.map((review) => (
              <li key={review.id}>
                <p className="gym-item__name">Rating: {review.rating}/5</p>
                <p className="gym-item__name">{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GymReviews;
