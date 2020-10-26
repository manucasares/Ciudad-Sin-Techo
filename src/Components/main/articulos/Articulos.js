import React from "react";
import { Link } from "react-router-dom";
import { articulos } from "../../../data/articulos";
import { transformToUrl } from "../../helper/transformStrings";
import { Buscador } from "./Buscador";
import { Paginacion } from "./Paginacion";


export const Articulos = () => {
  


    return (
        <div className="articulos__container">
            <div className="container">
                <h2 className="articulos__titulo">Blog de Ciudad Sin Techo</h2>

                <Buscador />

                {/* ARTICULOS */}
                <div className="d-flex-wrap d-flex-between">

                    {
                        articulos.map(({img,titulo, subtitulo, id}) => (
                        
                            <Link
                                to={{
                                    pathname: `/article/${transformToUrl(titulo)}`,
                                    state : {
                                        id
                                    }
                                }}
                                className="articulos__articulo mb-5 pointer"
                                key={id}
                                id={id}
                                
                            >

                                <img
                                    className="img"
                                    src={require(`../../../assets/${img}`)}
                                    alt={img}
                                />

                                <div className="articulos__text-container">

                                    <p className="articulos__articulo-titulo mb-1">
                                        {titulo}
                                    </p>

                                    <p className="articulos__articulo-descripcion">
                                        {subtitulo}
                                    </p>

                                </div>
                            </Link>
                        ))
                    }

                   
                </div>

                <Paginacion />
            </div>
        </div>
    );
};
