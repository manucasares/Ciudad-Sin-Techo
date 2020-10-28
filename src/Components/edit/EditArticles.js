import React from "react";
import { articulos } from "../../data/articulos";
export const EditArticles = ({handleSidebarShow}) => {
    
    return (
        <div className="edit__articles">
            {articulos.map(
                ({ id, fecha, titulo, subtitulo, img}) => (
                    <div 
                        key={id} 
                        className="edit__article"
                        onClick={handleSidebarShow}
                    >

                        <img
                            className="edit__article-picture"
                            src={require(`../../assets/${img}`)}
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
            )}
        </div>
    );
};


