import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Buscador } from "../main/articulos/Buscador";
import { SelectArticles } from "./SelectArticles";
import { Panel } from "./Panel";
import { NewArticle } from "./NewArticle";
import { usePaginacion } from "../../hooks/usePaginacion";

export const Sidebar = () => {
    const { arts } = useSelector(state => state.crud);

    const [{ sortUp, sortDown }, setShowBotton] = useState({
        sortUp: false,
        sortDown: true,
    });

    const {
        setArticulos,
        currentArts,
        totalPages,
        currentPage,
        setCurrentPage,
    } = usePaginacion(arts, 5);

    //Lógica disabled botones de paginacion
    useEffect(() => {
        console.log(totalPages.length)
        if (totalPages.length <= 1) {
            setShowBotton({ sortUp: false, sortDown: false });
            return;
        }

        switch (currentPage) {
            case 1:
                setShowBotton({ sortUp: false, sortDown: true });
                break;
            case totalPages.length:
                setShowBotton({ sortUp: true, sortDown: false });
                break;
            default:
                setShowBotton({ sortUp: true, sortDown: true });
        }
<<<<<<< HEAD
    }, [currentPage, totalPages]);

=======
    }, [currentPage, articulos, artsPerPage]);
    
>>>>>>> 249169bab75716c18ecd39e809546dc808bf5e79
    return (
        <aside className="edit__sidebar">
            <Panel />

            <NewArticle />

            <div className="container">
                <Buscador
                    setArticulos={setArticulos}
                    setCurrentPage={setCurrentPage}
                />

                {/* Desabilita el boton si nos encontramos en la paginacion limite */}
                {sortUp && (
                    <i
                        className="fas fa-sort-up fa-2x"
                        onClick={() => setCurrentPage(p => p - 1)}
                    ></i>
                )}

                <SelectArticles currentArts={currentArts} />

                {/* Desabilita el boton si nos encontramos en la paginacion limite */}
                {sortDown && (
                    <i
                        className="fas fa-sort-down fa-2x"
                        onClick={() => setCurrentPage(p => p + 1)}
                    ></i>
                )}
            </div>
        </aside>
    );
};
