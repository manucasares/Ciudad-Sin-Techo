import React, { useState } from "react";


import { leyes } from "../../data/leyes";

import { Tabs } from "./Tabs";
import { LeyesResponsive } from "./LeyesResponsive";
import { TabShown } from "./TabShown";


export const LegislacionesScreen = () => {

    const [leyShown, setLeyShown] = useState(leyes[0]);

    return (
        <div className="legislaciones__container animate__animated animate__fadeIn">

            <h2 className="legislaciones__titulo">
                Legislaciones
            </h2>

            <h3 className="legislaciones__subtitulo">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Maxime, qui!
            </h3>

            <div className="legislaciones__info container">
                <Tabs setLeyShown={setLeyShown}/>
                <TabShown leyShown={leyShown} />
            </div>

            {/* RESPONSIVE */}
            <LeyesResponsive />
        </div>
    );
};
