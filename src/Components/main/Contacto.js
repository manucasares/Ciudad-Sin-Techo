import React from 'react'

export const Contacto = () => {
    return (
        <div className="contacto">

            <div className="contacto-container">

                <p className="titulo">Contacto</p>

                <form>
                    <input
                        type="text"
                        placeholder="Nombre"  
                    />

                    <input
                        type="email"
                        placeholder="Correo"  
                    />

                    <textarea
                        placeholder="Mensaje"
                    ></textarea>

                    <button
                        type="submit"
                    >
                        Enviar
                    </button>

                </form>

            </div>
            
        </div>
    )
}
