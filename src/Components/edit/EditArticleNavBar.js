import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import { addNewArticle, startDeletingArt } from "../../actions/crud";
import { showSidebar, toggleSidebar } from "../../actions/ui";


export const EditArticleNavBar = ({ formValues, handleInputChange }) => {

    const dispatch = useDispatch();
    const { active } = useSelector( state => state.crud );

    const { title, subtitle, body, date, author } = formValues;

    const handleSave = () => {

        if( !title.trim() || !subtitle.trim() || !body.trim() || !date.trim() || !author.trim() ) {
            Swal.fire(
                '',
                'Completa todos los campos.',
                'error'
            )

            return;
        }

        if ( active.id ) {
            // dispatch( startUploadArticle() );
        } else {
            dispatch( addNewArticle(active) );
        }


    }



    const handleDelete = () => {

        
        
        Swal.fire({
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: 'Borrar',
            confirmButtonColor: '#fc0303',
            text: 'El artículo se eliminará permanentemente. ¿Desea continuar?',
            icon: 'warning'
        }).then( (res) => {
            
            if( res.isConfirmed ) {
                dispatch(showSidebar())
                dispatch( startDeletingArt(active.id) );
            }

        })

    }


    return (
        <div className="article-edit__appbar">

            <button className="link arrow" onClick={() => dispatch(toggleSidebar())}>
                <i className="fas fa-arrow-left"></i>
            </button>

            <div>
                <input
                    type="date"
                    placeholder="Titulo"
                    className="article-edit__date-input pointer"
                    name='date'
                    value={date}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    placeholder="Autor"
                    className="article-edit__author-input"
                    name='author'
                    value={author}
                    onChange={handleInputChange}
                />
            </div>

            <div>
                <button
                    className="link"
                >
                    Picture
                </button>

                <button     
                    className="link" 
                    onClick={handleSave}
                >
                    Save
                </button>

                {
                    ( active.id )
                    &&
                    <button     
                        className="link link-delete btn"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                }
            </div>
        </div>
    );
};
