import React, { useContext, useEffect, useRef, useState } from 'react';


import { scrollContext } from '../../context';


export const QuienesSomos = () => {

    const { setNodes } = useContext(scrollContext)


    const quienesSomos = useRef();



    // efecto parallax
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.pageYOffset);
    }

    
    useEffect(() => {
        setNodes( p => ({ ...p, qs: quienesSomos.current }));
    }, [setNodes, quienesSomos])
    

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    

    return (
        <div
            className="quienes-somos"
            ref={quienesSomos}
        >
            <div className="container">

                <img
                    src={require(`../../assets/foto5.jpg`)}
                    alt="ciudad sin techo agrupacion"
                />
    
                <div
                    className="texto-container"
                    style={{
                        transform : `translateY( ${offsetY * -.5 }px )`
                    }}
                >
                    <h2>¿Quiénes somos?</h2>

                    <p>
                        Somos un colectivo social que reúne a gente en "situación de calle y en riesgo de situación de calle" en la zona de la Plaza de los dos Congresos.
                    </p>

                    <p>
                        Nacimos un 14 de julio del 2012, cuando desde las entrañas de quienes cada jueves acompaña a las MADRES DE PLAZA DE MAYO en sus interminables marchas, surgió la idea de compartir con quienes viven hoy la exclusión social, una chocolatada, que al pasar los dias se transformó en un espacio donde compartimos realidades, intentando transformarlas.
                    </p>
    
                </div>

            </div>
        </div>
    )
}
