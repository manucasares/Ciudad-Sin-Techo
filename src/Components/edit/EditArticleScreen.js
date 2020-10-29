import React from "react";
import { useForm } from "../../hooks/useForm";
import { EditArticleNavBar } from "./EditArticleNavBar";

export const EditArticleScreen = ({ setSidebarShown }) => {
    const [formValues, handleInputChange] = useForm({
        date: "",
        author: "",
        title: "",
        subtitle: "",
        text: "",
    });

    const {title, subtitle, text} = formValues;

    return (
        <div className="article-edit__main-content">
            <EditArticleNavBar
                setSidebarShown={setSidebarShown}
                formValues={formValues}
                handleInputChange={handleInputChange}
            />

            <div className="article-edit__content container">
                <input
                    type="text"
                    placeholder="Titulo"
                    className="article-edit__title-input"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />

                <input
                    type="text"
                    placeholder="Subtitulo / Descripción"
                    className="article-edit__subtitle-input"
                    name="subtitle"
                    value={subtitle}
                    onChange={handleInputChange}
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
                    name="text"
                    value={text}
                    onChange={handleInputChange}
                ></textarea>
            </div>
        </div>
    );
};
