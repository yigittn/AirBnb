import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img className="card--image" src={`image/${props.coverImg}`} alt="Logo" />
      <div className="card--stats">
        {!props.openSpots && <div className="card--badge"> SOLD OUT</div>}
        <img src="/image/Star1.png" className="card--star" alt="CardStar" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From {props.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
