import React from 'react'

export const Buscador = () => {
    return (
        <div className="articulos__buscador mb-5 mt-1">
            <input className="input" placeholder="Buscar en el blog..." />
            <i className="fas fa-search pointer"></i>
        </div>
    )
}
