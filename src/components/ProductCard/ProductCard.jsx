import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const ProductCard = ({ imagen, titulo, precio, condicion, stock }) => {
  const formatNumberWithCommas = (number) => {
    if (number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return number;
    }
  };
  return (
    <div className="car">
      <img className="img" src={imagen} alt="Card image cap" />
      <h4 className="h4">{titulo}</h4>
      <p className="p">Precio: {`$${formatNumberWithCommas(precio)}`}</p>
      <p className="p">Condicion: {condicion}</p>
      <p className="p">Stock: {stock}</p>
      <a href="#" className="a">
        Ver mas...
      </a>
    </div>
  );
};

export default ProductCard;
