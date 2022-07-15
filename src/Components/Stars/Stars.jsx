import React from "react";
import star from "../../img/Rating_Star.png";
import Halfstar from "../../img/HalfStar.png";
import EmptyStar from "../../img/Empty_star.png";

const Stars = (props) => {
  let num_star = props.num;
  let half_star = (
    <li>
      <img src={EmptyStar} alt="" />
    </li>
  );
  if (props.num / 2 !== 0) {
    half_star = (
      <li>
        <img src={Halfstar} alt="" />
      </li>
    );
  }
  num_star = Math.floor(num_star);
  let starArray = [];
  for (let i = 0; i < num_star; i++) {
    starArray.push(i);
  }
  let stars = starArray.map((el) => (
    <li key={el}>
      <img src={star} alt="" />
    </li>
  ));
  num_star = 5 - props.num;
  num_star = Math.floor(num_star);
  starArray = [];
  for (let i = 0; i < num_star; i++) {
    starArray.push(i);
  }
  let Emptystars = starArray.map((el) => (
    <li key={el}>
      <img src={EmptyStar} alt="" />
    </li>
  ));
  return (
    <ul>
      {stars}
      {half_star}
      {Emptystars}
    </ul>
  );
};
export default Stars;
