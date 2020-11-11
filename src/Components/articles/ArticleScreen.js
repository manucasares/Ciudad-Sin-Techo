import React from 'react'
import { useSelector } from 'react-redux';


import { Redirect, useLocation, useParams } from 'react-router-dom';
import { getArticleByUrl } from '../../selectors/getArticleByUrl';
import { Spinner } from '../ui/Spinner';


export const ArticleScreen = () => {
    
    const location = useLocation();


    const { arts } = useSelector( state => state.crud );

    const {url} = useParams();
    
    //Espines para esperar a que carguen los articulos de firebase
    if (!arts.length) {
        return <Spinner />
    } 

    //Busca si la url del articulo realmente existe
    const art = getArticleByUrl( arts, url );

    //Error 404, si no existe la página redireccionará 
    if( !art ) {
        return <Redirect to="/" />
    }

    const {date, author, subtitle, imgUrl, body, title} = art;
    
  
   


    return (
        <div className="article container animate__animated animate__fadeIn">
            <div className="fecha-autor d-flex-between">
                <p>{date}</p>
                <i className="fas fa-circle"></i>
                <p>{author}</p>
            </div>

            <h2 className="titulo mt-5">{title}</h2>


            <p className="subtitulo">
                {subtitle}
            </p>

            <img
                src={imgUrl}
                alt={title}
            />

            <p className="main-text" >
                {body}
            </p>
        </div>
    )
}
