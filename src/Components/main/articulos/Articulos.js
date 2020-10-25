import React from "react";
import { Buscador } from "./Buscador";
import { Paginacion } from "./Paginacion";

export const Articulos = () => {
    const articulos = [
        {
            titulo: "Lorem ipsum dolor sit amet",
            descripcion:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a dolor quis massa elementum pretium.",
            img: "foto1.jpg",
        },
        {
            titulo: "Lorem ipsum dolor sit amet",
            descripcion:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a dolor quis massa elementum pretium.",
            img: "foto2.jpg",
        },
        {
            titulo: "Lorem ipsum dolor sit amet",
            descripcion:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a dolor quis massa elementum pretium.",
            img: "foto3.jpg",
        },
        {
            titulo: "Lorem ipsum dolor sit amet",
            descripcion:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a dolor quis massa elementum pretium.",
            img: "foto4.jpg",
        },
        {
            titulo: "Lorem ipsum dolor sit amet",
            descripcion:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a dolor quis massa elementum pretium.",
            img: "foto5.jpg",
        },
        {
            titulo: "Lorem ipsum dolor sit amet",
            descripcion:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a dolor quis massa elementum pretium.",
            img: "foto6.jpg",
        },
    ];

    return (
        <div className="articulos__container">
            <div className="container">
                <h2 className="articulos__titulo">Blog de Ciudad Sin Techo</h2>

                <Buscador />

                ARTICULOS
                <div className="d-flex-wrap d-flex-between">

                    {
                        articulos.map(({img,titulo, descripcion}) => (
                        
                            <div className="articulos__articulo mb-5 pointer">

                                <img
                                    className="img"
                                    src={require(`../../../assets/${img}`)}
                                />

                                <div className="articulos__text-container">

                                    <p className="arituclos__articulo-titulo mb-1">
                                        {titulo}
                                    </p>

                                    <p className="arituclos__articulo-descripcion">
                                        {descripcion}
                                    </p>

                                </div>
                            </div>
                        ))
                    }

                   
                </div>

                <Paginacion />
            </div>
        </div>
    );
};
