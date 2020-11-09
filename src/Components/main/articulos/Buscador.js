import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'


import { useForm } from '../../../hooks/useForm'
import { getArticlesBySearch } from '../../../selectors/getArticlesBySearch'



export const Buscador = ({setArticulos, setCurrentPage}) => {

    const { arts } = useSelector( state => state.crud );

 
    const [{search}, handleInputChange] = useForm({
        search: ''
    })

    
    useEffect(() => {
        if( !search.trim() ){
            setArticulos(arts);
            return;
        }
    
        const articlesSearch = getArticlesBySearch(arts, search);
        
        setCurrentPage(1);
        setArticulos(articlesSearch);
    }, [search, setArticulos, setCurrentPage, arts])

    
    return (
        <form
            className="articulos__buscador mt-1"
            onSubmit={e => e.preventDefault()}
        >
            <input
                className="focus input"
                placeholder="Buscar en el blog..."
                name="search"
                onChange={handleInputChange}
                value={search}
                autoComplete="off"
            />

            <i 
                className="fas fa-search pointer"
            ></i>
        </form>
    )
}
