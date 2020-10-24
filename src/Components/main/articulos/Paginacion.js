import React from 'react'

export const Paginacion = () => {


    const arr = [1, 2, 3, 4, 5 ,6]

    return (
        <div className="articulos__paginacion-container">

            <div className="articulos__paginacion">
                <i class="fas fa-caret-left"></i>
            </div>

            {
                arr.map( e => (
                    <div className="articulos__paginacion">
                        <p> {e} </p>
                    </div>
                ))
            }

            <div className="articulos__paginacion">
                <i class="fas fa-caret-right"></i>
            </div>



        </div>
    )
}
