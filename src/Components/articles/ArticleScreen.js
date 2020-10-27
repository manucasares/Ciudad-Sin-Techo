import React from 'react'
import { useParams } from 'react-router-dom';
import { getArticleByTitle } from '../../selectors/getArticleByTitle';
import { transformToString } from '../helper/transformStrings';

export const ArticleScreen = () => {
    
    
    const {title} = useParams()

    console.log(title);
    
    const art = getArticleByTitle(transformToString(title));
    
    const {fecha, autor, img, titulo, subtitulo, body} = art;


    return (
        <div className="article container">
            <div className="fecha-autor d-flex-between">
                <p>{fecha}</p>
                <i class="fas fa-circle"></i>
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
