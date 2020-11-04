import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


import { setActiveArt } from "../../actions/crud";
import { useForm } from "../../hooks/useForm";
import { EditArticleNavBar } from "./EditArticleNavBar";



export const EditArticleScreen = () => {
    
    const dispatch = useDispatch();
    const { active } = useSelector( state => state.crud );


    const [formValues, handleInputChange, reset] = useForm({...active});
    
    const {title, subtitle, url, id, body } = formValues;


    // cambiamos el formValues cuando cambia el active
    useEffect( () => {
        // convertimos formValues en active al cambiar de articulo
        if (id !== active.id || url !== active.url) {
            reset(active);
        }

    }, [active, formValues, reset, dispatch, id, url] )
    
    // cambiamos el active al modificar el formulario
    useEffect( () => {
        dispatch( setActiveArt(formValues) );

    }, [formValues, dispatch])



    return (
        <div className="article-edit__main-content">
            <EditArticleNavBar
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

                <textarea
                    type="text"
                    placeholder="Subtitulo / Descripción"
                    className="article-edit__subtitle-textarea"
                    name="subtitle"
                    value={subtitle}
                    onChange={handleInputChange}
                >
                </textarea>

                <div className="article-edit__image">

                    {
                        (url)
                            ?   <img
                                    src={ url }
                                    alt={ title }
                                />
                            :   <p> Imagen no insertada </p>
                    }

                </div>

                <textarea
                    placeholder="Texto del Articulo"
                    className="article-edit__textarea"
                    name="body"
                    value={body}
                    onChange={handleInputChange}
                ></textarea>
            </div>
        </div>
    );
};
