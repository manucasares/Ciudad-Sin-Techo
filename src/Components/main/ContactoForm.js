import React from 'react'

export const ContactoForm = () => {
    return (
        <p>
            <p className="titulo">Contacto</p>

            <form>
    
                <input
                    className="focus"
                    type="text"
                    placeholder="Nombre"  
                />
    
                <input
                    className="focus"
                    type="email"
                    placeholder="Correo"  
                />
    
                <textarea
                    className="focus"
                    placeholder="Mensaje"
                ></textarea>
    
                <button
                    type="submit"
                >
                    Enviar
                </button>
    
            </form>
        </p>
    )
}
