import React, { useRef } from 'react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

import { useForm } from '../../hooks/useForm';


export const ContactoForm = () => {

    const [ { name, email, message }, handleInputChange, reset ]  = useForm({
        name: '',
        email: '',
        message: ''
    })

    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const inputs = [ nameRef, emailRef, messageRef ];


    const removeWarningClass = () => {
        inputs.forEach( input => input.current.classList.remove('warning'));
    }


    const sendEmail = (e) => {
        e.preventDefault();

        if(!name.trim() || !email.trim() || !message.trim()){
            //le sacamos la clase warning
            removeWarningClass();

            //filtro los inputs que estuvieron sin completar
            const emptyInputs = inputs.filter( input => input.current.value === '');

            //a cada uno de ellos les agrego la class warning
            emptyInputs.forEach(input => {
                input.current.classList.add('warning');
            });

            //le mando un focus al primer elemento sin completar
            emptyInputs[0].current.focus();

            return;
        }

        // EmailJS

        
        emailjs.sendForm('service_lz2no69', 'template_xdwjwgv', e.target, 'user_gndPnP4XXkXKL54I8d0bh')
            .then(() => {
                Swal.fire(
                    '',
                    'Tu mensaje ha sido enviado exitosamente',
                    'success'
                )
            }, (error) => {
                Swal.fire(
                    '',
                    'Hubo un error. Inténtelo de nuevo más tarde.',
                    'error'
                )
            });

        removeWarningClass();
        reset();
    }

    return (
        <>
            <p className="titulo">Contacto</p>

            <form onSubmit={sendEmail}>
    
                <input
                    className="input focus"
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    ref={nameRef}
                />
    
                <input
                    className="input focus"
                    type="email"
                    placeholder="Correo"  
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    ref={emailRef}
                />
    
                <textarea
                    className="textarea focus"
                    placeholder="Mensaje"
                    name="message"
                    value={message}
                    onChange={handleInputChange}
                    ref={messageRef}
                ></textarea>
    
                <button
                    type="submit"
                >
                    Enviar
                </button>
    
            </form>
        </>
    )
}
