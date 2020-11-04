import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { firebase } from '../firebase/firebaseConfig';

import { LoginScreen } from "../Components/auth/LoginScreen";
import { EditScreen } from "../Components/edit/EditScreen";
import { Spinner } from "../Components/ui/Spinner";

import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

import { login } from "../actions/auth";
import { startLoadingArticles } from "../actions/crud";


export const AppRouter = () => {

    const dispatch = useDispatch();
    
    const [checkIsLogged, setCheckIsLogged] = useState(false);
    const [checkingStateLogin, setCheckingStateLogin] = useState(true);


    useEffect(() => {
        dispatch( startLoadingArticles() );
    }, [dispatch])


    useEffect(() => {

        firebase.auth().onAuthStateChanged( (user) => {

            if(user?.uid) {
                dispatch( login(user.uid) );
                setCheckIsLogged(true);
            } else {
                setCheckIsLogged(false);
            }
            // aca ya tenemos nuestro estado de logeo
            setCheckingStateLogin(false);
        })

    }, [dispatch])

    if( checkingStateLogin ) {
        return <Spinner />
    }

    return (
        <Router>
            <div>
                <Switch>

                    {/* PRIVATE ROUTE */}
                    <PrivateRoutes 
                        exact 
                        path="/edit" 
                        component={EditScreen} 
                        isAuthenticated={ checkIsLogged }    
                    />

                    {/* PUBLIC ROUTE */}
                    <PublicRoutes
                        exact
                        path="/auth/login"
                        component={LoginScreen}
                        isAuthenticated={ checkIsLogged }    
                    />

                    
                    <Route path='/' component={DashboardRoutes} />

                </Switch>
            </div>
        </Router>
    );
};