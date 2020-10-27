import React, { useEffect, useState } from 'react'

export const Paginacion = ({totalPages, setTotalPages, currentPage, setCurrentPage}) => {

    // const [pagesShown, setPagesShown] = useState(1);

    const handlePrev = () => {
        if(currentPage === 1){
            return;
        }
        setCurrentPage( p => p - 1);
    }

    const handleNext = () => {
        if(currentPage === totalPages.length){
            return;
        }
        setCurrentPage( p => p + 1);
    }

    const handlePageNumber = (page) => {
        if(currentPage === page){
            return;
        }

        setCurrentPage(page);
    }


    // useEffect(() => {

    //     if(totalPages.length >= 10){
    //         // console.log('length totalPages: ' + totalPages.length);


    //         // setTotalPages( totalPages.slice(currentPage - 1, currentPage + 9 ))
    //     }

    // }, [currentPage, totalPages])



    return (
        <div className="articulos__paginacion-container">
            
            {/* PREV */}
            <div
                className="articulos__paginacion"
                onClick={handlePrev}
            >
                <i className="fas fa-caret-left"></i>
            </div>


            {/* PAGINAS */}
            {
                totalPages.map( page => (
                    <div 
                        className={
                            (page + 1 === currentPage)
                                ? "articulos__paginacion active"
                                : "articulos__paginacion"
                        }
                        key={page + 1}
                        onClick={ () => handlePageNumber(page + 1) }
                    >
                        <p> {page + 1} </p>
                    </div>
                ))
            }



            {/* NEXT */}
            <div
                className="articulos__paginacion"
                onClick={handleNext}
            >
                <i className="fas fa-caret-right"></i>
            </div>

        </div>
    )
}
