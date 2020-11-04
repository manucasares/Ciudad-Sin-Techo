import React from "react";

import { galeria } from "../../data/galeria";

export const Galeria = () => {
    

    return (
        <div className="galeria__container">
            {
                galeria.map( ({ id, img, alt }) => (
                    <img
                        src={require(`../../assets/${img}.jpg`)}
                        alt={alt}
                        key={id}
                    />
                ))
            }
        </div>
    );
};
