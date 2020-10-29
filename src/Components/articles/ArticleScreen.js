import React from 'react'
import { Redirect, useParams } from 'react-router-dom';
import { transformToString } from '../../helper/transformStrings';
import { getArticleByTitle } from '../../selectors/getArticleByTitle';
export const ArticleScreen = () => {
    
    
    const {title} = useParams()

    const art = getArticleByTitle(transformToString(title));
    
    if( !art ) {
        console.log('asd');
        return <Redirect to="/" />
    }

    const {fecha, autor, img, titulo, subtitulo, body} = art;


    return (
        <div className="article container">
            <div className="fecha-autor d-flex-between">
                <p>{fecha}</p>
                <i className="fas fa-circle"></i>
                <p>{autor}</p>
            </div>

            <h2 className="titulo mt-5">{titulo}</h2>


            <p className="subtitulo">
                {subtitulo}
            </p>

            <img
                src={require(`../../assets/${img}`)}
                alt="foto1"
            />

            <p className="main-text">
                {body}
            </p>
        </div>
    )
}
