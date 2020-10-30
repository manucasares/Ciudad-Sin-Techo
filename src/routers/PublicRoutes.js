import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import { LoginScreen } from '../Components/auth/LoginScreen';


export const PublicRoutes = ({
    isAuthenticated,
    ...rest


}) => {
    return (
        <Route {...rest}
                        //no se si usar props acá
            component= { () => (

                ( !isAuthenticated )
                    ? <LoginScreen />
                    : <Redirect to="/edit" />
            )}
        />
    )
}
