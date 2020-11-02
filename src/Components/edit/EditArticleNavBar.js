import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import { addNewArticle, startDeletingArt, startUpdateArticle, startUploadImg } from "../../actions/crud";
import { showSidebar, toggleSidebar } from "../../actions/ui";


export const EditArticleNavBar = ({ formValues, handleInputChange }) => {

    const dispatch = useDispatch();

    const { active, arts } = useSelector( state => state.crud );
    // const ui = useSelector( state => state.ui );


    const { title, subtitle, body, date, author } = formValues;


    const handleArrow = () => {

        dispatch( toggleSidebar() )

    }

    const handleSave = () => {

        // MANEJAR ERROR DE TITULOS REPETIDOS //
        const titleRepeted = arts.some( (art) => art.title === title)

        if( titleRepeted ) {
            Swal.fire(
                '',
                'No se puede crear/guardar un artículo con un título pre-existente.',
                'error'
            )

            return;
        }

        // VALIDACIÓN CAMPOS VACIOS //
        if( !title.trim() || !subtitle.trim() || !body.trim() || !date.trim() || !author.trim() ) {
            Swal.fire(
                '',
                'Completa todos los campos.',
                'error'
            )

            return;
        }

        // ACTUALIZAR ARTÍCULO //
        if ( active.id ) {
            dispatch( startUpdateArticle(active) );
        }

        // AGREGAR ARTICULO //
        else {
            dispatch( addNewArticle(active) );
        }
    }

    const handlePictureUpload = () => {
        document.querySelector('#inputFile').click();
    }
    const handleFileChange = (e) => {
        const img = e.target.files[0];

        if ( img ) {
            dispatch( startUploadImg(img) );
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
                dispatch( showSidebar() )
                dispatch( startDeletingArt(active.id) );
            }
        })
    }



    return (
        <div className="article-edit__appbar">

            <button
                className="link arrow"
                onClick={handleArrow}
            >
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

            <input
                id="inputFile"
                type="file"
                style={{ display : 'none' }}
                onChange={handleFileChange}
            />

            <div>
                <button
                    className="link"
                    onClick={handlePictureUpload}
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
