import React, { useContext } from 'react'
import { scrollContext } from '../../../context';

export const Paginacion = ({pagesShown, currentPage, setCurrentPage}) => {

    // const [pagesShown, setPagesShown] = useState(1);

    const { nodes } = useContext(scrollContext);

    const { blog } = nodes;


    const handlePrev = () => {
        if(currentPage === 1){
            return;
        }
        handleScroll();
        setCurrentPage( p => p - 1);
    }

    const handleNext = () => {
        if(currentPage === pagesShown[ pagesShown.length - 1 ] + 1){
            return;
        }
        handleScroll();
        setCurrentPage( p => p + 1);
    }

    const handlePageNumber = (page) => {
        if(currentPage === page){
            return;
        }
        handleScroll();
        setCurrentPage(page);
    }


    const handleScroll = () => {
        blog.scrollIntoView({block: "start", behavior: "smooth"});
    }


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
                pagesShown.map( page => (
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
