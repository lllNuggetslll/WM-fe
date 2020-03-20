export const decideStars = rating => {
  let numStars = rating;

  return new Array(5).fill(0).map(() => {
    let num;

    if (numStars <= 0) num = 0;
    if (numStars > 0 && numStars < 0.25) num = 0;
    if (numStars >= 0.25 && numStars < 1) num = 0.5;
    if (numStars >= 1) num = 1;

    numStars = numStars - 1;

    return num;
  });
};

export const starMap = {
  1: {
    icon: "fas fa-star",
    color: "#00CDBD"
  },
  0.5: {
    icon: "fas fa-star-half-alt",
    color: "#00CDBD"
  },
  0: {
    icon: "fas fa-star",
    color: "#e8e8e8"
  }
};
