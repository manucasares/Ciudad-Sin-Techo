import { types } from "../types/types";

const initialState = {
    arts: [],
    active: null
}


export const crudReducer = ( state = initialState, action ) => {

    switch (action.type) {
        
        case types.crudAddNewArt:
            return {
                
                arts: [ action.payload, ...state.arts ],
                active: action.payload
            }

        case types.crudActiveArt:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.crudLoadArts:
            return {
                ...state,
                arts: action.payload
            }
        
        case types.crudUpdateArt:
            return {

            }
        
        case types.crudDelete:
            return {
                arts: action.payload,
                active: null

            }



        default:
            return state;
    }



}