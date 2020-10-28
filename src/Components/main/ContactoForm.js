import React from 'react'

export const ContactoForm = () => {
    return (
        <p>
            <p className="titulo">Contacto</p>

            <form>
    
                <input
                    className="input focus"
                    type="text"
                    placeholder="Nombre"  
                />
    
                <input
                    className="input focus"
                    type="email"
                    placeholder="Correo"  
                />
    
                <textarea
                    className="textarea focus"
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
