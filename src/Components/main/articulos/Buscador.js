import React, { useEffect } from 'react'
import { articulos } from '../../../data/articulos'
import { useForm } from '../../../hooks/useForm'
import { getArticlesBySearch } from '../../../selectors/getArticlesBySearch'

export const Buscador = ({setArticulos, setCurrentPage}) => {

    const [{search}, handleInputChange] = useForm({
        search: ''
    })

    
    useEffect(() => {
        if( !search.trim() ){
            setArticulos(articulos);
            return;
        }
    
        const articlesSearch = getArticlesBySearch(search);
        
        setCurrentPage(1);
        setArticulos(articlesSearch);
    }, [search, setArticulos, setCurrentPage])

    
    return (
        <form
            className="articulos__buscador mb-5 mt-1"
            onSubmit={e => e.preventDefault()}
        >
            <input
                className="input"
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
