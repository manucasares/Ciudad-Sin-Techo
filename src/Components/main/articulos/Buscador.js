import React, { useEffect } from 'react'
import { articulos } from '../../../data/articulos'
import { useForm } from '../../../hooks/useForm'
import { getArticlesBySearch } from '../../../selectors/getArticlesBySearch'

export const Buscador = ({setArticulos}) => {

    const [{search}, handleInputChange, reset] = useForm({
        search: ''
    })


    useEffect(() => {
        if( !search.trim() ) {
            setArticulos(articulos);
        }
    }, [search])


    const handleSearch = (e) => {
        if( !search.trim() ){
            return;
        }
        console.log('asd');

        const articlesSearch = getArticlesBySearch(search);
        setArticulos(articlesSearch);
    }

    
    return (
        <form
            className="articulos__buscador mb-5 mt-1"
            onChange={handleSearch}
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
                onClick={handleSearch}    
            ></i>
        </form>
    )
}
