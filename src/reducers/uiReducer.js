import { types } from "../types/types";


export const uiReducer = (state = true, action) => {
    
    switch (action.type) {
        case types.uiShowSidebar:
           return true;

        case types.uiHideSidebar:
            return false;

        default:
            return state;
    }
}
