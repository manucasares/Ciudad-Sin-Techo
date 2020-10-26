import React from 'react'

export const Paginacion = () => {


    const arr = [1, 2, 3, 4, 5 ,6]

    return (
        <div className="articulos__paginacion-container">

            <div className="articulos__paginacion">
                <i className="fas fa-caret-left"></i>
            </div>

            {
                arr.map( e => (
                    <div 
                        className="articulos__paginacion"
                        key={e}
                    >
                        <p> {e} </p>
                    </div>
                ))
            }

            <div className="articulos__paginacion">
                <i className="fas fa-caret-right"></i>
            </div>



        </div>
    )
}
