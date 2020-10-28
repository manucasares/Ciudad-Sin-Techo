import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "../Components/auth/LoginScreen";
import { EditScreen } from "../Components/edit/EditScreen";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>

                    {/* PRIVATE ROUTE */}
                    <Route 
                        exact 
                        path="/edit" 
                        component={EditScreen} 
                        // isAuthenticated={ isLoggedIn }    
                    />

                    {/* PUBLIC ROUTE */}
                    <Route
                        exact
                        path="/auth/login"
                        component={LoginScreen}
                    />

                    
                    <Route path='/' component= {DashboardRoutes} />


                </Switch>
            </div>
        </Router>
    );
};