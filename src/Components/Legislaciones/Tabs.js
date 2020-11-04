import React, { useRef } from 'react'

import { leyes } from '../../data/leyes';


export const Tabs = ({setLeyShown}) => {

    const opcion1 = useRef();
    const opcion2 = useRef();
    const opcion3 = useRef();


    

    const handleShowInfo = index => {
        const refs = [opcion1, opcion2, opcion3];

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
                Programa de Inserción Laboral
            </p>
            <p
                className="legislaciones__opcion"
                ref={opcion3}
                onClick={() => handleShowInfo(2)}
            >
                Proyecto de ley
            </p>
        </div>
    )
}
