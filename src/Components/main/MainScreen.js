import React from 'react'

import { Header } from './Header';
import { QuienesSomos } from './QuienesSomos';
import { Redes } from './Redes';
import { Contacto } from './Contacto';
import { Articulos } from './articulos/Articulos';
import { Galeria } from './Galeria';


export const MainScreen = () => {

 
    return (
        <div className="animate__animated animate__fadeIn">
            <Header />
            <QuienesSomos/>
            <Redes />
            <Articulos/>
            <Galeria />
            <Contacto />
        </div>
    )
}
