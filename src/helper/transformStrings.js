
export const transformToUrl = (string) => {
    string = string.replace(/ /g, '-');
    // string = string.replace(/[¿?/]/g, '');
    return string;
}

export const transformToString = (url) => {
    return url.replace(/-/g, " ")
}
