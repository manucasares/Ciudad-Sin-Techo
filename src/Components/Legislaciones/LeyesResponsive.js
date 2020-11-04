import React from 'react'

import { leyes } from '../../data/leyes'

export const LeyesResponsive = () => {


    return (
        <>
            {
                leyes.map(({ id, title, body, pdf }) => (
                    <div
                        key={id}
                        className="legislaciones__responsive legislaciones__info container"
                    >
                        <p className="legislaciones__opcion">{title}</p>

                        <div className="legislaciones__body">
                            <h5 className="legislaciones__body-titulo">{title}</h5>

                            {
                                body.map( (text) => (
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
                    </div>
                ))
            }
        </>
    )
}
