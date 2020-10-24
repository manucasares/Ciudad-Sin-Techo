import React from 'react'

import { Navbar } from './Navbar';
import { Header } from './Header';
import { Redes } from './Redes';
import { Contacto } from './Contacto';
import { Footer } from './Footer'
import { Articulos } from './articulos/Articulos';
import { Galeria } from './Galeria';


export const MainScreen = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Redes />
            <Articulos/>
            <Galeria />
            <Contacto />
            <Footer />
        </>
    )
}
