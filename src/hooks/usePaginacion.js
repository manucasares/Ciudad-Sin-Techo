import { useEffect, useState } from "react";

export const usePaginacion = (
    arts,
    artsPerPage = 9,
    limitPagesInitialState = 9
) => {
    //Articulos TOTALES.
    const [articulos, setArticulos] = useState(arts);

    //Cantidad de ARTICULOS que se van a ver PerPage.
    const [currentArts, setCurrentArts] = useState([]);

    //Cantidad de paginas totales.
    const [totalPages, setTotalPages] = useState([1]);

    //Pagina en la que se encuentra actualmente.
    const [currentPage, setCurrentPage] = useState(1);

    //Limite de paginas que van a aparecer a la vista del usuario
    //depende del responsive
    const [limitPagesShown, setLimitPagesShown] = useState(
        limitPagesInitialState
    );

    //Las paginas que van a aparecer a la vista del usuario
    //A medida que avanza entré las paginas va a ir cambiando
    const [pagesShown, setPagesShown] = useState(totalPages);

    // Logica CurrentArts
    useEffect(() => {
        const indexOfLastArt = artsPerPage * currentPage;
        const indexOfFirstArt = indexOfLastArt - artsPerPage;

        //acá puede que sea articulosData en vez de articulos
        setCurrentArts(articulos.slice(indexOfFirstArt, indexOfLastArt));
    }, [setCurrentArts, artsPerPage, currentPage, articulos]);

    // Logica totalPages
    useEffect(() => {
        setTotalPages([
            ...Array(Math.ceil(articulos.length / artsPerPage)).keys(),
        ]);
    }, [artsPerPage, articulos]);

    //Logica PagesShown (Paginas que se van a ir mostrar para el usuario)
    useEffect(() => {
        //Si la cantidad de paginas TOTALES, es mayor que el limite de paginas.
        if (totalPages.length > limitPagesShown) {
            // si la currentPage + Variable es undefined
            // ? si es undefined significa que ya esta "al final" de la paginacion y comenzará a cortar el array de adelante hacia atras
            // : si no es undefined seguirá cortando desde la currentPage hasta la cantidad de paginas que se muestran

            !totalPages[currentPage + limitPagesShown]
                ? setPagesShown(totalPages.slice(-(limitPagesShown + 1)))
                : setPagesShown(
                      totalPages.slice(
                          currentPage - 1,
                          currentPage + limitPagesShown
                      )
                  );
        } else {
            setPagesShown(totalPages);
        }
    }, [totalPages, currentPage, limitPagesShown]);

    return {
        articulos,
        setArticulos,
        currentArts,
        setCurrentArts,
        totalPages,
        setTotalPages,
        currentPage,
        setCurrentPage,
        limitPagesShown,
        setLimitPagesShown,
        pagesShown,
        setPagesShown
    };

};
