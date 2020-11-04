import React from 'react'
import { useDispatch } from 'react-redux'


import { startNewArticle } from '../../actions/crud';
import { hideSidebar } from '../../actions/ui';


export const NewArticle = () => {

    const dispatch = useDispatch();


    const handleNewArticle = () => {

        dispatch( hideSidebar() );
        dispatch( startNewArticle() );
    }



    return (
        <div
            className="edit__new-entry pointer"
            onClick = { handleNewArticle }
        >
            <i className="far fa-calendar-plus fa-3x "></i>
            <p
                className="mt-5"
            >
                Nuevo articulo
            </p>
        </div>
    )
}
