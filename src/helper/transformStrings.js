
export const titleToUrl = (title) => {
    return title.normalize('NFD').replace(/[\u0300-\u036f¿_.~!*''();:@&=+$,/?#[%-+'\]]/g,"").replace(/ /g, "-");
}

