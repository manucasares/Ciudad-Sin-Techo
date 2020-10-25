import React from 'react'

import { Header } from './Header';
import { QuienesSomos } from './QuienesSomos';
import { Redes } from './Redes';
import { Contacto } from './Contacto';
import { Articulos } from './Articulos';


export const MainScreen = () => {
    return (
        <>
            <Header />
            <QuienesSomos />
            <Redes />
            <Articulos/>
            <Contacto />
        </>
    )
}
