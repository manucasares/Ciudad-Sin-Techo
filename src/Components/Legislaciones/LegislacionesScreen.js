import React, { useRef, useState } from "react";

export const LegislacionesScreen = () => {
    const opcion1 = useRef();
    const opcion2 = useRef();
    const opcion3 = useRef();

    const leyes = [
        {
            titulo: "Ley 13956: Pograma de Asistencia Integral Para Personas en Situación de Calle",
            body: [
                "Crea el Pograma de Asistencia Integral Para Personas en Situación de Calle, en el ámbito de la Provincia de Buenos Aires.",
                "Crea el servicio social de atención telefónica y servicio móvil de atención social.",
                "Serán objetivos esenciales del programa creado por la presente Ley, la localización, empadronamiento, asistencia médica y alimentaria, y habitacional transitoria, para las personas de todas las edades y sexo, en situación de calle logrando su reinserción social. ",
            ],
            pdf: null, //url del pdf
        },
        {
            titulo: "Proyecto de Ley: Programa de Inserción Laboral",
            body: [
                "Créase el Programa de Inserción Laboral (PIL) para personas en situación de calle o en riego de situación de calle en el ámbito de la Ciudad Autónoma de Buenos Aires.",
                "Tiene por objeto la generación de fuentes de trabajo para la población mencionada tanto en el sector público como privado, así como la promoción del desarrollo de proyectos productivos cooperativos, con el objetivo de revertir la situación de calle o riesgo de calle y fomentar la autonomía de las personas. ",
                "Los destinatarios del presente proyecto son las personas mayores de edad en situación de calle y en riesgo a la situación de calle. "
            ],
            pdf: null, //url del pdf
        },
        {
            titulo: "Proyecto de Ley",
            body: [
                "La   presente   ley   tiene   por   objeto   proteger, garantizar   integralmente   y   hacer   operativos   los   derechos   de   las personas en situación de calle y en riesgo a la situación de calle. ",
                "Derecho  a  la  dignidad  personal  e  integridad  física.",
                "Derecho   a   la   identidad   personal.",
                "Derecho  al  acceso  y  al  uso  de  los  servicios,  de  la infraestructura  y  de  los  espacios  públicos. ",
                "Derecho   al   acceso   pleno   a   los   servicios   socio-asistenciales.",
                "Derecho   al   acceso   pleno   a   los   servicios   socio-asistenciales."
            ],
            pdf: null, //url del pdf
        },
    ];

    const [leyShow, setLeyShow] = useState(leyes[0]);

    const handleShowInfo = index => {
        const arr = [opcion1, opcion2, opcion3];

        arr.forEach(e => e.current.classList.remove("active"));

        setLeyShow(leyes[index]);

        arr[index].current.classList.add("active");
    };

    return (
        <div className="legislaciones__container">
            <h2 className="legislaciones__titulo">Legislaciones</h2>
            <h3 className="legislaciones__subtitulo">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime, qui!
            </h3>

            <div className="legislaciones__info container">
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

                <div className="legislaciones__body">
                    <h5 className="legislaciones__body-titulo">
                        {leyShow.titulo}
                    </h5>

                    {leyShow.body.map((text, i) => (
                        <p key={i} className="legislaciones__body-descripcion">
                            {text}
                        </p>
                    ))}

                    <div className="btn legislaciones__btn d-flex-center">
                        <i className="fas fa-file-pdf"></i>
                        <p>ver texto completo</p>
                    </div>
                </div>
            </div>

            {/* RESPONSIVE */}
            {leyes.map(({ titulo, body, pdf }, i) => (
                <div
                    key={i}
                    className="legislaciones__responsive legislaciones__info container"
                >
                    <p className="legislaciones__opcion">{titulo}</p>

                    <div className="legislaciones__body">
                        <h5 className="legislaciones__body-titulo">{titulo}</h5>

                        {body.map((text, i) => (
                            <p
                                key={i}
                                className="legislaciones__body-descripcion"
                            >
                                {text}
                            </p>
                        ))}

                        <div className="btn legislaciones__btn d-flex-center">
                            <i className="fas fa-file-pdf"></i>
                            <p>ver texto completo</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
