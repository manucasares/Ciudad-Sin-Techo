import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import { addNewArticle, setActiveArt, startDeletingArt, startUpdateArticle, startUploadImg } from "../../actions/crud";
import { showSidebar  } from "../../actions/ui";
import { titleToUrl } from "../../helper/transformStrings";
import { getArticleById } from "../../selectors/getArticleById";


export const EditArticleNavBar = ({ formValues, handleInputChange }) => {

    const dispatch = useDispatch();
    const options = useRef();

    const { active, arts } = useSelector( state => state.crud );


    const { title, subtitle, date, author } = formValues;
    let { body } = formValues;


    const handleArrow = () => {

        const initialActiveState = getArticleById(arts, active.id);
                
        const isNotEmptyArt = Object.values(formValues).some(val => val.trim() && val !== date);

        if( isNotEmptyArt && JSON.stringify(active) !== JSON.stringify(initialActiveState) ) {
            

            Swal.fire({
                title: 'Hay cambios sin guardar!',
                text: 'Si salis sin guardar los cambios se borrarán permanentemente.',
                icon: 'warning',
                showConfirmButton: true,
                confirmButtonText: 'Salir',
                showCancelButton: true,
                allowOutsideClick: false,
            }).then( (res) => {
                if( res.isConfirmed ) {
                    dispatch( showSidebar() )
                    dispatch( setActiveArt(null) )
                } 
            })

        } else {
            dispatch( showSidebar() )
            dispatch( setActiveArt(null) )
        }

    }

    const handleSave = () => {
        // MANEJAR ERROR DE TITULOS REPETIDOS //
        const titleRepeted = arts.some( (art) => art.title === title && art.id !== formValues.id)

        if( titleRepeted ) {
            Swal.fire(
                '',
                'No se puede crear/guardar un artículo con un título pre-existente.',
                'error'
            )

            return;
        }

        console.log(active);

        // VALIDACIÓN CAMPOS VACIOS //
        if( !title.trim() || !subtitle.trim() || !body.trim() || !date.trim() || !author.trim() || !active.imgUrl ) {

            Swal.fire(
                '',
                'Completa todos los campos.',
                'error'
            )

            return;
        }

        
        active.url = titleToUrl(title);

        console.log(active.imgUrl);


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

    const handleOptions = () => {
        options.current.classList.toggle('show-options');
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
                    autoComplete="off"
                />
            </div>

            <input
                id="inputFile"
                type="file"
                style={{ display : 'none' }}
                onChange={handleFileChange}
            />

            <div
                className="article-edit__options"
                ref={options}
            >
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

            <i
                className="fa-ellipsis-h fas"
                onClick={handleOptions}
            ></i>
        </div>
    );
};
