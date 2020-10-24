import React from 'react'

import { Header } from './Header';
import { Redes } from './Redes';
import { Contacto } from './Contacto';
import { Articulos } from './articulos/Articulos';
import { Galeria } from './Galeria';
import { Articulos } from './Articulos';


export const MainScreen = () => {
    return (
        <>
            <Header />
            <Redes />
            <Articulos/>
            <Galeria />
            <Contacto />
        </>
    )
}
