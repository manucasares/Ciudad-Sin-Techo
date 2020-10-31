const { types } = require("../types/types");


export const toggleSidebar = () => {
    return ( dispatch, getState ) => {
        const sidebarState = getState().ui;

        (sidebarState)
        ? dispatch( hideSidebar() )
        : dispatch( showSidebar() )
    }
}

export const showSidebar = () => ({
    type: types.uiShowSidebar
})

export const hideSidebar = () => ({
    type: types.uiHideSidebar
})