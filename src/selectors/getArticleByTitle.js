

export const getArticleByTitle = (arts, title) => {
    
    return arts.find(art => art.title === title);

}
