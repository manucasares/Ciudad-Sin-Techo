const { types } = require("../types/types");


export const toggleSidebar = () => {
    return ( dispatch, getState ) => {
        const { showSidebar: showSidebarState } = getState().ui;

        (showSidebarState)
            ? dispatch( hideSidebar() )
            : dispatch( showSidebar() );
    }
}

export const showSidebar = () => ({
    type: types.uiShowSidebar
})

export const hideSidebar = () => ({
    type: types.uiHideSidebar
})

export const startLoading = () => ({
    type: types.uiStartLoading,
})

export const finishLoading = () => ({
    type: types.uiFinishLoading,
})