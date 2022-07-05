import React from "react";
import "./paginado.css";

export default function Paginado({ publicacionPerPage, allPublicaciones, paginado }) {
  const pageNumbers = [];

  //calculo cantidad de paginas y pusheo el resultado
  for (let i = 1; i <= Math.ceil(allPublicaciones / publicacionPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="">
      <ul className="pagination">
        {pageNumbers &&
          pageNumbers.map((number) => {
            return (
              <li key={number} className="">
                <a className="" onClick={() => paginado(number)}>
                  {number}
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
