import React, { useContext, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { scrollContext } from "../../../context";

import { transformToUrl } from "../../../helper/transformStrings";
import { usePaginacion } from "../../../hooks/usePaginacion";
import { Buscador } from "./Buscador";
import { Paginacion } from "./Paginacion";

export const Articulos = () => {

    const { arts } = useSelector(state => state.crud);

    const { setNodes } = useContext(scrollContext);

    const blog = useRef();

    //usePaginación
    const {
        articulos,
        setArticulos,
        currentArts,
        currentPage,
        setCurrentPage,
        limitPagesShown,
        setLimitPagesShown,
        pagesShown
    } = usePaginacion(arts, 9, 9);

    //Logico Nodes para el Scroll
    useEffect(() => {
        setNodes(p => ({ ...p, blog: blog.current }));
    }, [blog, setNodes]);

    // Responsive paginación
    useEffect(() => {
        if (window.innerWidth < 500) {
            setLimitPagesShown(6);
        }
    }, [setLimitPagesShown, limitPagesShown]);

    return (
        <div className="articulos__container" ref={blog}>
            <div className="container">
                <h2 className="articulos__titulo">Blog de Ciudad Sin Techo</h2>

                <Buscador
                    setArticulos={setArticulos}
                    setCurrentPage={setCurrentPage}
                />

                {/* ARTICULOS */}
                <div className="d-flex-wrap ">
                    {articulos.length === 0 ? (
                        <p className="articulos__not-results-found">
                            {" "}
                            No se encontraron resultados para la búsqueda.{" "}
                        </p>
                    ) : (
                        currentArts.map(({ title, subtitle, id, url }) => (
                            <Link
                                to={`/article/${transformToUrl(title)}`}
                                className="articulos__articulo mb-5 pointer"
                                key={id}
                            >
                                <img className="img" src={url} alt={title} />

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
                    )}
                </div>

                {currentArts.length !== 0 && (
                    <Paginacion
                        pagesShown={pagesShown}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                )}
            </div>
        </div>
    );
};
