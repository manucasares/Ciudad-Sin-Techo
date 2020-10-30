
export const getArticlesBySearch = (arts, search) => {
    return arts.filter( ({ body }) => body.toLocaleLowerCase().includes(search));
} 
