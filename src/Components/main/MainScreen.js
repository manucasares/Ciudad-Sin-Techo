import React from 'react';

import { Navbar } from './Navbar';
import { Header } from './Header';
import { Redes } from './Redes';
import { Contacto } from './Contacto';
import { Articulos } from './Articulos';


export const MainScreen = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Redes />
            <Articulos/>
            <Contacto />
        </>
    )
}
