import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import { Buscador } from "../main/articulos/Buscador";
import { startLogout } from "../../actions/auth";
import { startNewArticle } from "../../actions/crud";
import { SelectArticles } from "./SelectArticles";



export const Sidebar = ({ setSidebarShown }) => {

    const dispatch = useDispatch();
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

    //handleSidebarShow: para sacar y poner el sidebar
    //PARA SACAR Y PONER EL SIDEBAR, SERÍA OPTIMO DEJAR ESTO EN REDUX
    const handleSidebarShow = () => {
        setSidebarShown( prevState => ( !prevState ));
    };
    

    const handleLogout = () => {
        dispatch(
            startLogout()
        );
    }
       
    
    const handleNewArticle = () => {
        handleSidebarShow();

        dispatch(
            startNewArticle()
        );
    }


    return (
        <aside className="edit__sidebar">
            <div className="edit__sidebar-navbar d-flex-between">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> Ciudad Sin Techo </span>
                </h3>

                <button
                    className="link"
                    onClick={handleLogout}
                >
                    Logout
                </button>

                <button
                    className="edit__sidebar-arrow link"
                    onClick={handleSidebarShow}
                >
                    <i className="fas fa-arrow-left"></i>
                </button>
            </div>

            <div
                className="edit__new-entry pointer"
                onClick={handleSidebarShow}
                onClick = { handleNewArticle }
            >
                <i className="far fa-calendar-plus fa-3x "></i>
                <p
                    className="mt-5"
                    onClick={handleNewArticle}
                >
                    Nuevo articulo
                </p>
            </div>

            <Buscador
                setArticulos={setArticulos}
                setCurrentPage={setCurrentPage}
            />

            {/* Desabilita el boton si nos encontramos en la paginacion limite */}
            {sortUp && (
                <i className="fas fa-sort-up fa-2x" onClick={() => setCurrentPage(p => p - 1)}></i>
            )}

            <SelectArticles
                handleSidebarShow={handleSidebarShow}
                currentArts={currentArts}
            />

            {/* Desabilita el boton si nos encontramos en la paginacion limite */}
            {sortDown && (
                <i className="fas fa-sort-down fa-2x" onClick={() => setCurrentPage(p => p + 1)}></i>
            )}
        </aside>
    );
};
