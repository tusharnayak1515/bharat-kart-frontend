import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StarDiv, StarHead } from "./Star";

const StarRating = ({edit, isEdit, rating, hover, setRating, setHover, setEdit }) => {
  return (
    <StarDiv>
      <StarHead>Rate this product</StarHead>
      <div>
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= (hover || rating) ? "on" : "off"}
              onClick={() => {
                if (isEdit) {
                  setEdit({ ...edit, ratings: index });
                }
                else {
                  setRating(index);
                }
              }}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <FontAwesomeIcon icon={faStar} size="2x" />
            </button>
          );
        })}
      </div>
    </StarDiv>
  );
};

export default StarRating;
