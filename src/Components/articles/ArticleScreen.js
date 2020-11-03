import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import { transformToString } from '../../helper/transformStrings';
import { getArticleByTitle } from '../../selectors/getArticleByTitle';
export const ArticleScreen = () => {
    
    const { arts } = useSelector( state => state.crud );

    const {title} = useParams()

    const art = getArticleByTitle( arts, transformToString(title) );
    
    if( !art ) {
        return <Redirect to="/" />
    }

    console.log(art);

    const {date, author, subtitle, body, url} = art;


    return (
        <div className="article container">
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
                alt="foto1"
            />

            <p className="main-text">
                {body}
            </p>
        </div>
    )
}
