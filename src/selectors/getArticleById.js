

export const getArticleById = (arts, id) => {
    return arts.find(art => art.id === id);
}
