import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import { Navbar } from "../Components/ui/Navbar";
import { Footer } from "../Components/ui/Footer";
import { MainScreen } from "../Components/main/MainScreen";
import { ArticleScreen } from "../Components/articles/ArticleScreen";


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />

                <Switch>
                    <Route 
                        exact 
                        path="/article/:title" 
                        component={ArticleScreen}  
                    />

                    <Route path="/" component={MainScreen} />


                    <Redirect to="/" />
                </Switch>

                <Footer />  
            </div>
        </Router>
    )
}
