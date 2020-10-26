import { articulos } from "../data/articulos"

export const getArticleByTitle = (titulo) => {
    
    return articulos.find(art => art.titulo === titulo);

}
