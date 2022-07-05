import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import search from "../../assets/search.png";

import "./navbar.css";
import {
  getFullPublicaciones,
  orderByCondition,
  orderByPrice,
  searchPublicaciones,
} from "../../redux/actions";

const Navbar = ({ setCurrentPage }) => {
  const dispatch = useDispatch();

  const [busqueda, setBusqueda] = useState("");

  function handlePrecio(e) {
    console.log("estoy en el handlePrecio", e.target.value);
    e.preventDefault();
    dispatch(orderByPrice(e.target.value));
    setCurrentPage(1);
  }
  function handleCondicion(e) {
    e.preventDefault();
    dispatch(orderByCondition(e.target.value));
    setCurrentPage(1);
  }

  function handleSearch(e) {
    e.preventDefault();
    if (busqueda === "") alert("Ingresa algo para buscar");
    dispatch(searchPublicaciones(busqueda));
    document.getElementById("buscar").value = "";
    setCurrentPage(1);
  }

  function handleInput(e) {
    e.preventDefault();
    setBusqueda(e.target.value);
  }
  function handleInicio() {
    dispatch(orderByPrice("ALL"));
  }

  return (
    <>
      <nav className="nav">
        <ul className="ul">
          <li className="logo">ML-CHALLENGE</li>
          <li className="btn">
            <span className="fas fa-bars"></span>
          </li>
          <div className="items">
            <li className="li">
              <Link to="/" onClick={(e) => handleInicio(e)}>
                Inicio
              </Link>
            </li>
            <div className="custom-select" style={{ width: "200px" }}>
              <select
                className=""
                // onChange={(e) => handleOrder(e)}
                onChange={(e) => handlePrecio(e)}
              >
                {/* siempre es necesario poner un value a todas las option */}
                <option value="ALL">PRECIO</option>
                <option value="desc">MAYOR -MENOR</option>
                <option value="asc">MENOR - MAYOR</option>
              </select>
            </div>
            <div>
              <select
                className=""
                // onChange={(e) => handleOrder(e)}
                onChange={(e) => handleCondicion(e)}
              >
                {/* siempre es necesario poner un value a todas las option */}
                <option value="ALL">CONDICION</option>
                <option value="new">NUEVO</option>
                <option value="not_specified">USADO</option>
              </select>
            </div>
          </div>
          <input
            className="search-icon"
            id="buscar"
            type="search"
            placeholder="Buscar producto"
            onChange={(e) => handleInput(e)}
          />
          {console.log(busqueda)}

          <img
            src={search}
            alt=""
            className="button"
            onClick={(e) => handleSearch(e)}
          />
        </ul>
      </nav>
      {/* <div className="content">
    <div className="text">
       Responsive Navbar with Searchbox
    </div>
    <div class="p">
       HTML and CSS (Flexbox) Full video tutorial
    </div>
 </div> */}
    </>
  );
};

export default Navbar;
