import React from "react";

export default function Partner({ title, image }) {
  return (
    <div>
      <div className="partners__cards__card">
        <img className="partners__cards__card__img" src={image} alt={title} />
        <div className="partners__cards__card__text">{title}</div>
      </div>
    </div>
  );
}
