import React from "react";
import styled from "styled-components";
import { decideStars, starMap } from "./starRatingUtils";

const StarContainer = styled.span`
  margin-left: 10px;
  font-weight: bold;
  opacity: 0.4;
`;

const StarRating = ({ rating }) => {
  const ratingText = rating.toPrecision(2);
  const stars = decideStars(rating);

  return (
    <div>
      {stars.map(rating => {
        const { color, icon } = starMap[rating];

        return <i style={{ color }} className={icon} />;
      })}
      <StarContainer>{ratingText}</StarContainer>
    </div>
  );
};

export default StarRating;

//   For performance, I could've combined the util here and use a prefilled array
//   to achieve just 1 single loop, I chose not to for readability and testability

//   let numStars = rating;
//   {[1, 1, 1, 1, 1].map(rating => {
//     let num;
//
//     if (numStars <= 0) num = 0;
//     if (numStars > 0 && numStars < 0.25) num = 0;
//     if (numStars >= 0.25 && numStars < 1) num = 0.5;
//     if (numStars >= 1) num = 1;
//
//     numStars = numStars - 1;
//
//     const { color, icon } = starMap[num];
//
//     return <i style={{ color }} className={icon} />;
//   })}
