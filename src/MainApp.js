import React, { useState } from 'react';
import { Provider } from 'react-redux';

import { scrollContext } from './context';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';

import './styles/styles.scss';


export const MainApp = () => {

    const [nodes, setNodes] = useState({
        qs: null,
        blog: null,
        contacto: null
    });

    return (
        <scrollContext.Provider value={{nodes, setNodes}}>
            <Provider store={store}>
                <AppRouter />
            </Provider>
        </scrollContext.Provider>
    )
}
