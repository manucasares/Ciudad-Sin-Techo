import React from 'react'
import { ContactoForm } from './ContactoForm'

export const Contacto = () => {
    return (
        <div className="contacto">

            <div className="contacto-container">


                <ContactoForm />

                <hr />

                <h3> O bien... <a href="https://api.whatsapp.com/send?phone=541131584171&text=holaasd" target="_blank" rel="noopener noreferrer" > chatea con nosotros! </a>
                </h3>

                {/* <div className="whatsapp-container">
                    <div className="whatsapp-icon">
                        <img
                            src={require(`../../assets/whatsapp_icon.png`)}
                        />
                    </div>

                    <button className="btn">
                        Iniciar chat
                    </button>

                </div> */}

            </div>
            
        </div>
    )
}
