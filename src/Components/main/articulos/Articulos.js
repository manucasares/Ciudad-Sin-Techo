import React, { useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { scrollContext } from "../../../context";


import { transformToUrl } from "../../../helper/transformStrings";
import { Buscador } from "./Buscador";
import { Paginacion } from "./Paginacion";


export const Articulos = () => {
  
    const { arts } = useSelector( state => state.crud );


    const { setNodes } = useContext(scrollContext)
    const blog = useRef();


    const [articulos, setArticulos] = useState(arts);
    
    const artsPerPage = 9;
    
    const [currentArts, setCurrentArts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState([1]);

    const [pagesShown, setPagesShown] = useState(totalPages);
    const [pagesShownLength, setPagesShownLength] = useState(9);
    

    useEffect(() => {
        setNodes( p => ({ ...p, blog: blog.current }));
    }, [setNodes, blog])
    

    // Logica CurrentArts
    useEffect(() => {    
        const indexOfLastArt = artsPerPage * currentPage;
        const indexOfFirstArt = indexOfLastArt - artsPerPage;

                    //acá puede que sea articulosData en vez de articulos
        setCurrentArts(articulos.slice(indexOfFirstArt, indexOfLastArt));


    }, [setCurrentArts ,artsPerPage, currentPage, articulos])

    // Logica totalPages
    useEffect(() => {
        setTotalPages([...Array(Math.ceil(articulos.length / artsPerPage)).keys()]);
    }, [artsPerPage, articulos]);

    useEffect(() => {
        if (totalPages.length > 10) {

            // si la currentPage + Variable es undefined
            // ? si es undefined significa que ya esta "al final" de la paginacion y comenzará a cortar el array de adelante hacia atras
            // : si no es undefined seguirá cortando desde la currentPage hasta la cantidad de paginas que se muestran
        
            ( !totalPages[ currentPage + pagesShownLength ] ) 
                ? setPagesShown( totalPages.slice( - ( pagesShownLength + 1 ) ))
                : setPagesShown( totalPages.slice(currentPage - 1, currentPage + pagesShownLength ));
            
        } else {
            setPagesShown(totalPages)
        }
    }, [totalPages, currentPage, pagesShownLength])

    // Responsive paginación
    useEffect(() => {
        if(window.innerWidth < 500) {
            setPagesShownLength(6);
        }
    }, [pagesShownLength])



    return (
        <div
            className="articulos__container"
            ref={blog}
        >
            <div className="container">
                <h2 className="articulos__titulo">Blog de Ciudad Sin Techo</h2>

                <Buscador
                    setArticulos={setArticulos}
                    setCurrentPage={setCurrentPage}
                />

                {/* ARTICULOS */}
                <div className="d-flex-wrap ">
                    {
                        (articulos.length === 0)

                            ? <p className="articulos__not-results-found"> No se encontraron resultados para la búsqueda. </p>
                            : currentArts.map(({ title, subtitle, id, url }) => (
                                <Link
                                    to={`/article/${transformToUrl(title)}`}
                                    className="articulos__articulo mb-5 pointer"
                                    onClick={ () => window.scrollTo(0, 100) }
                                    key={id}
                                >
                                    <img
                                        className="img"
                                        src={ url }
                                        alt={ title }
                                    />

                                    <div className="articulos__text-container">

                                        <p className="articulos__articulo-titulo mb-1">
                                            {title}
                                        </p>

                                        <p className="articulos__articulo-descripcion">
                                            {subtitle}
                                        </p>

                                    </div>
                                </Link>
                            ))
                    }
                </div>

                {
                    (currentArts.length !== 0) &&
                        <Paginacion
                            pagesShown={pagesShown}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                }
            </div>
        </div>
    );
};
