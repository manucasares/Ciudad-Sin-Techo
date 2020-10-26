import { articulos } from "../data/articulos"


// export const getArticlesBySearch = (search) => {
//     return articulos.filter( article => {
//         console.log(article.body.includes('hola'));
//     } );
// } 

export const getArticlesBySearch = (search) => {
    return articulos.filter( article => article.body.toLocaleLowerCase().includes(search));
} 


// article.body.toLocaleLowerCase.includes(search)