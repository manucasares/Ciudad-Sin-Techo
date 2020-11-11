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
                active: null
            }

        case types.crudActiveArt:
            return {
                ...state,
                active: action.payload
                
            }

        case types.crudLoadArts:
            return {
                ...state,
                arts: action.payload
            }
        
        case types.crudUpdateArt:
            return {
                arts: state.arts.map( art => (
                    (art.id === action.payload.id)
                        ? action.payload
                        : art
                )),
                active: null
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