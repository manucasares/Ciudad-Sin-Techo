import React, { useRef } from 'react'

import { leyes } from '../../data/leyes';


export const Tabs = ({setLeyShown}) => {

    const opcion1 = useRef();
    const opcion2 = useRef();
    const opcion3 = useRef();
    const opcion4 = useRef();


    

    const handleShowInfo = index => {
        const refs = [opcion1, opcion2, opcion3, opcion4];

        refs.forEach(e => e.current.classList.remove("active"));

        setLeyShown(leyes[index]);

        refs[index].current.classList.add("active");
    };


    return (


        <div className="d-flex-center">
            <p
                className="legislaciones__opcion active"
                ref={opcion1}
                onClick={() => handleShowInfo(0)}
            >
                Ley 13956
            </p>
            <p
                className="legislaciones__opcion"
                ref={opcion2}
                onClick={() => handleShowInfo(1)}
            >
                Ley 3706
            </p>
            <p
                className="legislaciones__opcion"
                ref={opcion3}
                onClick={() => handleShowInfo(2)}
            >
                Programa de Inserción Laboral
            </p>
            <p
                className="legislaciones__opcion"
                ref={opcion4}
                onClick={() => handleShowInfo(3)}
            >
                Proyecto de ley
            </p>
        </div>
    )
}
