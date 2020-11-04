import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';


import { Redirect, useParams } from 'react-router-dom';
import { transformToString } from '../../helper/transformStrings';
import { getArticleByTitle } from '../../selectors/getArticleByTitle';
import { Spinner } from '../ui/Spinner';



export const ArticleScreen = () => {
    
    const { arts } = useSelector( state => state.crud );

    const {title} = useParams()
    
    //Espines para esperar a que carguen los articulos de firebase
    if (!arts.length) {
        return <Spinner />
    } 

    //Busca si la url del articulo realmente existe
    const art = getArticleByTitle( arts, transformToString(title) );

    //Error 404, si no existe la página redireccionará 
    if( !art ) {
        return <Redirect to="/" />
    }

    const {date, author, subtitle, url, body} = art;
    
  
   


    return (
        <div className="article container animate__animated animate__fadeIn">
            <div className="fecha-autor d-flex-between">
                <p>{date}</p>
                <i className="fas fa-circle"></i>
                <p>{author}</p>
            </div>

            <h2 className="titulo mt-5">{art.title}</h2>


            <p className="subtitulo">
                {subtitle}
            </p>

            <img
                src={url}
                alt={art.title}
            />

            <p className="main-text" >
                {body}
            </p>
        </div>
    )
}
