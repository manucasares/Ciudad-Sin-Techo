import React, { useContext, useEffect, useRef } from 'react'


import { scrollContext } from '../../context'
import { ContactoForm } from './ContactoForm'



export const Contacto = () => {

    const { setNodes } = useContext(scrollContext);
    const contacto = useRef();


    useEffect(() => {
        setNodes( p => ({ ...p, contacto: contacto.current }));
    }, [contacto])


    return (
        <div
            className="contacto"
            ref={contacto}
        >

            <div className="contacto-container">


                <ContactoForm />

                <hr />

                <h3> O bien... <a href="https://api.whatsapp.com/send?phone=541131584171&text=holaasd" target="_blank" rel="noopener noreferrer" > chatea con nosotros! </a>
                </h3>

            </div>
            
        </div>
    )
}
