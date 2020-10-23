import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import { MainScreen } from "../Components/main/MainScreen";
import { ArticleScreen } from "../Components/articles/ArticleScreen";


export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/article/" component={ArticleScreen} />

                    <Route path="/" component={MainScreen} />


                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
