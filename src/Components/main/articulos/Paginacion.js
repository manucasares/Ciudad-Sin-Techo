import React from 'react'

export const Paginacion = ({totalPages, currentPage, setCurrentPage}) => {

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

    console.log(currentPage);


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
