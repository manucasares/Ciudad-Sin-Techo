import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';


import { authReducer } from '../reducers/authReducer';
import { crudReducer } from '../reducers/crudReducer';
import { uiReducer } from '../reducers/uiReducer';


const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    crud: crudReducer,
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

