import React from 'react'


export const TabShown = ({leyShown}) => {
    
    return (
        <div className="legislaciones__body">
            <h5 className="legislaciones__body-titulo">
                {leyShown.titulo}
            </h5>

            {
                leyShown.body.map( (text) => (
                    <p
                        key={text}
                        className="legislaciones__body-descripcion"
                    >
                        {text}
                    </p>
                ))
            }

            <div className="btn legislaciones__btn d-flex-center">
                <i className="fas fa-file-pdf"></i>
                <p>ver texto completo</p>
            </div>
        </div>
    )
}
