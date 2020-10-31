import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setActiveArt } from "../../actions/crud";
import { useForm } from "../../hooks/useForm";
import { EditArticleNavBar } from "./EditArticleNavBar";


export const EditArticleScreen = () => {
    
    const dispatch = useDispatch();
    const { active } = useSelector( state => state.crud );


    const [formValues, handleInputChange, reset] = useForm({...active});

    // cambiamos el formValues cuando cambia el active
    useEffect( () => {
        if(formValues.id !== active.id){
            reset(active);
            console.log('entró')
        }
    }, [active] )
    // console.log(formValues)
    
    // date y author en navbar //       
    const {title, subtitle, body } = formValues;


    // cambiamos el active al modificar el formulario
    useEffect( () => {

        dispatch( setActiveArt(formValues) );

    }, [formValues])



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
                        src="https://img.freepik.com/foto-gratis/campo-lavanda-al-atardecer-gran-paisaje-verano_129479-48.jpg?size=626&ext=jpg"
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
