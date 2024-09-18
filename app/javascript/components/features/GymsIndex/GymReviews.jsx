import React from "react";

const GymReviews = ({ gym }) => {
  if (!gym.reviews || gym.reviews.length === 0) {
    return (
      <div className="gym-item__container">
        <p className="text-gray-500 italic">
          No reviews available for this gym.
        </p>
      </div>
    );
  }

  const renderStars = (rating) => {
    const fullStar = <i className="fa-solid fa-star"></i>;
    const emptyStar = <i className="fa-regular fa-star"></i>;
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <span key={index}>{index < rating ? fullStar : emptyStar}</span>
      ));
  };

  return (
    <div className="gym-item__container">
      <ul className="p-0 m-0 list-none">
        {gym.reviews.map((review) => (
          <li key={review.id} className="pb-4 mb-2 gym-item">
            <div className="flex items-center mb-2">
              <span
                className="text-yellow-500 mr-2"
                aria-label={`${review.rating}`}
              >
                {renderStars(review.rating)}
              </span>
            </div>
            <p className="gym-item__description text-sm">{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GymReviews;
