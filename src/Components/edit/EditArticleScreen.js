import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


import { setActiveArt } from "../../actions/crud";
import { useForm } from "../../hooks/useForm";
import { EditArticleNavBar } from "./EditArticleNavBar";
import { getArticleById } from "../../selectors/getArticleById";



export const EditArticleScreen = () => {
    
    const dispatch = useDispatch();
    const { active, arts } = useSelector( state => state.crud );


    const [formValues, handleInputChange, reset] = useForm({...active});
    
    const {title, subtitle, body, url, id } = formValues;


    // cambiamos el formValues cuando cambia el active
    useEffect( () => {

        // convertimos formValues en active al cambiar de articulo
        if (id !== active.id || url !== active.url) {
            
            reset(active);
        }

    }, [active, formValues, reset, dispatch] )
    

    
    
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
                ></textarea>

                <div className="article-edit__image">
                    <img
                        src={
                            ( url )
                                ? url
                                : 'https://scontent-eze1-1.xx.fbcdn.net/v/t1.0-9/44307962_969821133228878_6542943905892007936_o.jpg?_nc_cat=103&ccb=2&_nc_sid=e3f864&_nc_ohc=53XESV1NmdMAX9BBFPG&_nc_ht=scontent-eze1-1.xx&oh=a68c9ee901c9b2fffb914d002a932577&oe=5FC416F2'

                        }
                        // alt="foto"
                    />
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
