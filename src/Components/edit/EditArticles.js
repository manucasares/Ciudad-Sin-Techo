import React from "react";
export const EditArticles = ({handleSidebarShow, currentArts}) => {
    
    return (
        <div className="edit__articles">
            {
                (currentArts.length === 0)

                ? <p className="edit__article-title"> No se encontraron resultados para la búsqueda. </p>

            
                : currentArts.map(
                    ({ id, fecha, titulo, subtitulo, img}) => (
                        <div 
                            key={id} 
                            className="edit__article"
                            onClick={handleSidebarShow}
                        >

                            <img
                                className="edit__article-picture"
                                src={require(`../../assets/${img}`)}
                                alt={titulo}
                            />

                            <div className="edit__article-body">
                                <p className="edit__article-title">{titulo}</p>

                                <p className="edit__article-content">
                                    {subtitulo}
                                </p>
                            </div>

                            <div className="edit__article-date-box">
                                <span>{fecha}</span>
                            </div>
                        </div>
                    )
                 )
            }
        </div>
    );
};


