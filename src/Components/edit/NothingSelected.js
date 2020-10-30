import React from 'react'

export const NothingSelected = ({setSidebarShown}) => {

    const handleSidebarShow = () => {
        setSidebarShown(prevState => ( !prevState ));
    };

    return (

        <div className="edit__nothing-container">

            <button
                className="link arrow nothing__arrow"
                onClick={handleSidebarShow}
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