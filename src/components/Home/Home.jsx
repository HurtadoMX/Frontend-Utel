import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import ProductCard from "../ProductCard/ProductCard";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFullPublicaciones, orderByPrice } from "../../redux/actions";
import { Link } from "react-router-dom";
import Paginado from "../Paginado/Paginado";

import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allPublicaciones = useSelector((state) => state.todo);
  console.log("esto es lo que le llega al home", allPublicaciones);

  //Paginado
  const [currentPage, setCurrentPage] = useState(1);
  const [publicacionesPerPage, setpublicacionesPerPage] = useState(30);
  const indiceUltimaPublicacion = currentPage * publicacionesPerPage; //en un principio son 6
  const indicePrimerPublicaciones =
    indiceUltimaPublicacion - publicacionesPerPage; // esto nos da 0
  const currentPublicaciones = allPublicaciones.slice(
    indicePrimerPublicaciones,
    indiceUltimaPublicacion
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getFullPublicaciones());
  }, []);

  return (
    <>
      <Navbar setCurrentPage={setCurrentPage} />
      <br />
      <Paginado
        key={allPublicaciones.length}
        publicacionPerPage={publicacionesPerPage}
        allPublicaciones={allPublicaciones.length}
        paginado={paginado}
      />
      <div className="containe">
        {currentPublicaciones ? (
          currentPublicaciones.map((e) => {
            return (
              <div key={e.id}>
                <ProductCard
                  imagen={e.thumbnail}
                  titulo={e.title}
                  precio={e.price}
                  condicion={e.condition}
                  stock={e.available_quantity}
                />
              </div>
            );
          })
        ) : (
          <p>CARGANDO</p>
        )}
      </div>

      {/*     
    <ProductCard/> */}
    </>
  );
};

export default Home;
