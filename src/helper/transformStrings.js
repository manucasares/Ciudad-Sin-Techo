
export const transformToUrl = (string) => {
    return string.replace(/ /g, "-")
}

export const transformToString = (url) => {
    return url.replace(/-/g, " ")
}
