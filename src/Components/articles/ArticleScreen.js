import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';


import { Redirect, useParams } from 'react-router-dom';
import { transformToString } from '../../helper/transformStrings';
import { getArticleByTitle } from '../../selectors/getArticleByTitle';



export const ArticleScreen = () => {
    
    const { arts } = useSelector( state => state.crud );

    const {title} = useParams()

    const art = getArticleByTitle( arts, transformToString(title) );
    
    // if( !art ) {
    //     return <Redirect to="/" />
    // }

    const {date, author, subtitle, url} = art;
    
    let { body } = art;


    useEffect(() => {
        body = body.split('<br>');

        if(typeof body === 'object'){
        }
    }, [body])

   


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

            <div className="main-text">
                {
                    (typeof body === 'object')
                    &&
                    body.map( p => {
                        console.log(p);
                    })
                }
            </div>
        </div>
    )
}
