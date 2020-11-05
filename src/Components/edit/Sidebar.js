import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";


import { Buscador } from "../main/articulos/Buscador";
import { SelectArticles } from "./SelectArticles";
import { Panel } from "./Panel";
import { NewArticle } from "./NewArticle";


export const Sidebar = () => {

    const { arts } = useSelector( state => state.crud );

    const [articulos, setArticulos] = useState(arts);

    const [{ sortUp, sortDown }, setShowBotton] = useState({
        sortUp: false,
        sortDown: true,
    });

    const artsPerPage = 5;

    const [currentArts, setCurrentArts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    // Logica CurrentArts
    useEffect(() => {
        const indexOfLastArt = artsPerPage * currentPage;
        const indexOfFirstArt = indexOfLastArt - artsPerPage;

        //acá puede que sea articulosData en vez de articulos
        setCurrentArts(articulos.slice(indexOfFirstArt, indexOfLastArt));
    }, [setCurrentArts, artsPerPage, currentPage, articulos]);


    //Lógica disabled botones de paginacion
    useEffect(() => {
        const totalPages = Math.ceil(articulos.length / artsPerPage);

        if (totalPages <= 1) {
            setShowBotton({sortUp:false, sortDown: false});
            return;
        }

        switch (currentPage){
            case 1:
                setShowBotton({sortUp: false, sortDown: true})
                break;
            case totalPages:
                setShowBotton({sortUp: true, sortDown: false})
                break;
            default:
                setShowBotton({sortUp:true, sortDown: true})
        }
    }, [currentPage, articulos, artsPerPage]);
    
    return (
        <aside className="edit__sidebar">
            
            <Panel />

            <NewArticle />

            <div className='container'>
                <Buscador
                    setArticulos={setArticulos}
                    setCurrentPage={setCurrentPage}
                />
    
                {/* Desabilita el boton si nos encontramos en la paginacion limite */}
                {sortUp && (
                    <i className="fas fa-sort-up fa-2x" onClick={() => setCurrentPage(p => p - 1)}></i>
                )}
    
                <SelectArticles
                    currentArts={currentArts}
                />
    
                {/* Desabilita el boton si nos encontramos en la paginacion limite */}
                {sortDown && (
                    <i className="fas fa-sort-down fa-2x" onClick={() => setCurrentPage(p => p + 1)}></i>
                )}
            </div>
        </aside>
    );
};
