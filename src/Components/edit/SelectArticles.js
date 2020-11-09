import React from "react";
import { useDispatch, useSelector } from "react-redux";


import { setActiveArt } from "../../actions/crud";
import { hideSidebar } from "../../actions/ui";
import { getArticleById } from "../../selectors/getArticleById";



export const SelectArticles = React.memo(({ currentArts }) => {

    const dispatch = useDispatch();
    const { arts } = useSelector( state => state.crud );

    const handleOpenArt = (id) => {
        
        dispatch( hideSidebar() );

        const selectedArt = getArticleById(arts, id);
        dispatch( setActiveArt(selectedArt) );
    }


    return (
        <div className="edit__articles">
            {
                (currentArts.length === 0)
                    ? <p className="edit__article-title "> No se encontraron resultados para la búsqueda. </p>
                    : currentArts.map(
                        ({ id, date, title, subtitle, url }) => (
                            <div 
                                key={id} 
                                className="edit__article d-flex-between"
                                onClick={ () => handleOpenArt(id)}
                            >

                                <img
                                    className="edit__article-picture"
                                    src={url}
                                    alt={title}
                                />

                                <div className="edit__article-body">
                                    <p className="edit__article-title">{title}</p>

                                    <p className="edit__article-content">
                                        {subtitle}
                                    </p>
                                </div>

                            </div>
                        )
                )
            }
        </div>
    );
});


