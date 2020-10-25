import React from 'react'

export const QuienesSomos = () => {
    return (
        <div className="quienes-somos">
            <div className="container">

                <img
                    src={require(`../../assets/foto5.jpg`)}
                />
    
                <div className="texto-container">
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
