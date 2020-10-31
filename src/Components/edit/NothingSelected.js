import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../../actions/ui';

export const NothingSelected = () => {
    const dispatch = useDispatch();

    return (

        <div className="edit__nothing-container">

            <button
                className="link arrow nothing__arrow"
                onClick={ () => dispatch(toggleSidebar()) }
            >
                <i className="fas fa-arrow-left"></i>
            </button>

            <div className="edit__nothing-content">
                <p>Selecciona un articulo 
                    <br />
                    o crea uno nuevo
                </p>
                <i className="far fa-star fa-4x mt-5"></i>
            </div>

        </div>
    )
}