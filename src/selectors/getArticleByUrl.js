

export const getArticleByUrl = (arts, url) => {
    return arts.find(art => art.url === url);
}
