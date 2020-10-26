import React from "react";

export const Galeria = () => {
    const imgs = [
        "foto1",
        "foto2",
        "foto3",
        "foto4",
        "foto5",
        "foto6",
        "foto7",
        "foto8",
    ];

    return (
        <div className="galeria__container">
            {imgs.map(img => (
                <img
                    src={require(`../../assets/${img}.jpg`)}
                    alt={img}
                    key={img}
                />
            ))}
        </div>
    );
};
