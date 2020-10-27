import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { articulos as articulosData} from "../../../data/articulos";
import { transformToUrl } from "../../helper/transformStrings";
import { Buscador } from "./Buscador";
import { Paginacion } from "./Paginacion";


export const Articulos = () => {
  
    const [articulos, setArticulos] = useState(articulosData);

    const artsPerPage = 3;

    const [currentArts, setCurrentArts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState([1]);


    // Logica CurrentArts
    useEffect(() => {    
        const indexOfLastArt = artsPerPage * currentPage;
        const indexOfFirstArt = indexOfLastArt - artsPerPage;

                    //acá puede que sea articulosData en vez de articulos
        setCurrentArts(articulos.slice(indexOfFirstArt, indexOfLastArt));
        console.log(currentArts);
    }, [setCurrentArts, artsPerPage, currentPage])

    // Logica currentPage
    useEffect(() => {
        setTotalPages([...Array(Math.ceil(articulos.length / artsPerPage)).keys()]);
    }, [artsPerPage]);


    return (
        <div className="articulos__container">
            <div className="container">
                <h2 className="articulos__titulo">Blog de Ciudad Sin Techo</h2>

                <Buscador setArticulos={setArticulos}/>

                {/* ARTICULOS */}
                <div className="d-flex-wrap ">
                    {
                        (articulos.length === 0)
                            ? <p className="articulos__not-results-found"> No se encontraron resultados para la búsqueda. </p>
                            : articulos.map(({img,titulo, subtitulo, id}) => (
                                <Link
                                    to={`/article/${transformToUrl(titulo)}`}
                                    className="articulos__articulo mb-5 pointer"
                                    key={id}
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

                <Paginacion
                    totalPages={totalPages}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </div>
    );
};
