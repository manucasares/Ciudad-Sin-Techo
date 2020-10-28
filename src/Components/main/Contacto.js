import React from 'react'
import { ContactoForm } from './ContactoForm'

export const Contacto = () => {
    return (
        <div className="contacto">

            <div className="contacto-container">


                <ContactoForm />

                <hr />

                <h3> O bien... Chatea con nosotros! </h3>

                <div className="whatsapp-container">
                    <div className="whatsapp-icon">
                        <img
                            src={require(`../../assets/whatsapp_icon.png`)}
                        />
                    </div>

                    <button>
                        Iniciar chat

                    </button>

                </div>

            </div>
            
        </div>
    )
}
