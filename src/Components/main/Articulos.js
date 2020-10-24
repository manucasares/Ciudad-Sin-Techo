import React from 'react'

export const Articulos = () => {
    return (
        <div className="articulos__container container">



                <h2 className="articulos__titulo">Blog de Ciudad Sin Techo</h2>
                
                {/* BUSCADOR */}
                <div className="articulos__buscador mb-5 mt-1">
                    <input
                        className="input"
                        placeholder="Buscar en el blog..."
                    />
                    <i className="fas fa-search pointer"></i>
                </div>

                <div className="d-flex-wrap d-flex-between">

                    <div className="articulos__articulo mb-5 pointer">

                        <img
                            className="img"
                            src={require('../../assets/foto1.jpg')}
                        />

                        <div className="articulos__text-container">

                            <p className="articulos__articulo-titulo mb-1"> Lorem ipsum dolor sit amet </p>

                            <p className="articulos__articulo-descripcion"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a dolor quis massa elementum pretium. </p>

                        </div>

                    </div>
                    
                    
                    <div className="articulos__articulo mb-5 pointer">

                    <img className="img" src={require('../../assets/foto2.jpg')} />

                    <div className="articulos__text-container">

                        <p className="arituclos__articulo-titulo mb-1"> Lorem ipsum dolor sit amet </p>

                        <p className="arituclos__articulo-descripcion"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a dolor quis massa elementum pretium. </p>

                    </div>

                </div>
                    <div className="articulos__articulo mb-5 pointer">

                    <img className="img" src={require('../../assets/foto3.jpg')} />

                    <div className="articulos__text-container">

                        <p className="arituclos__articulo-titulo mb-1"> Lorem ipsum dolor sit amet </p>

                        <p className="arituclos__articulo-descripcion"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a dolor quis massa elementum pretium. </p>

                    </div>

                </div>
                    <div className="articulos__articulo mb-5 pointer">

                    <img className="img" src={require('../../assets/foto4.jpg')} />

                    <div className="articulos__text-container">

                        <p className="arituclos__articulo-titulo mb-1"> Lorem ipsum dolor sit amet </p>

                        <p className="arituclos__articulo-descripcion"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a dolor quis massa elementum pretium. </p>

                    </div>

                </div>
                    <div className="articulos__articulo mb-5 pointer">

                    <img className="img" src={require('../../assets/foto5.jpg')} />

                    <div className="articulos__text-container">

                        <p className="arituclos__articulo-titulo mb-1"> Lorem ipsum dolor sit amet </p>

                        <p className="arituclos__articulo-descripcion"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a dolor quis massa elementum pretium. </p>

                    </div>

                </div>
                    <div className="articulos__articulo mb-5 pointer">

                        <img className="img" src={require('../../assets/foto6.jpg')} />

                        <div className="articulos__text-container">

                            <p className="arituclos__articulo-titulo mb-1"> Lorem ipsum dolor sit amet </p>

                            <p className="arituclos__articulo-descripcion"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a dolor quis massa elementum pretium. </p>

                        </div>

                    </div>
                
                </div>
        </div>
    )
}
