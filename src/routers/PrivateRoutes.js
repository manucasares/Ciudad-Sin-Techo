import React from 'react'

import { Redirect, Route } from 'react-router-dom'
import { EditScreen } from '../Components/edit/EditScreen'


export const PrivateRoutes = ({
    isAuthenticated,
    ...rest
}) => {
    return (
        <Route {...rest}
        
            component= { () => (

                ( isAuthenticated )
                    ? <EditScreen />
                    : <Redirect to="/" />
            )}
        
        />
    )
}
