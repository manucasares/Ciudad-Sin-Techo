import React from 'react'

export const Contacto = () => {
    return (
        <div className="contacto">

            <div className="contacto-container">

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

            </div>
            
        </div>
    )
}
