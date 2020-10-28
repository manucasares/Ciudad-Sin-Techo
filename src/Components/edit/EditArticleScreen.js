import React from "react";
import { EditArticleNavBar } from "./EditArticleNavBar";

export const EditArticleScreen = ({setSidebarShown}) => {
    return (
        <div className="article-edit__main-content">
           
           <EditArticleNavBar setSidebarShown={setSidebarShown} />

            <div className="article-edit__content container">
                

                <input
                    type="text"
                    placeholder="Titulo"
                    className="article-edit__title-input"
                />

                <input
                    type="text"
                    placeholder="Subtitulo / Descripción"
                    className="article-edit__subtitulo-input"
                />

                <div className="article-edit__image">
                    <img
                        src="https://img.freepik.com/foto-gratis/campo-lavanda-al-atardecer-gran-paisaje-verano_129479-48.jpg?size=626&ext=jpg"
                        alt="foto"
                    />
                </div>

                <textarea
                    placeholder="Texto del Articulo"
                    className="article-edit__textarea"
                ></textarea>
            </div>
        </div>
    );
};
