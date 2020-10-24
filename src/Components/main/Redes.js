import React from 'react'

export const Redes = () => {
    return (
        <div className="redes">
            <p>Seguinos en nuestras Redes</p>

            <div className="redes-container d-flex-between">
                <a
                    href="https://www.facebook.com/CiudadSinTecho/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a
                    href="https://twitter.com/ciudadsin?lang=es"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <i className="fab fa-twitter"></i>
                </a>
                <a
                    href="https://www.instagram.com/ciudadsintecho/"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    )
}
