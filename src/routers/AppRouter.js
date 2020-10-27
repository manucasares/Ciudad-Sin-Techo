import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import { Navbar } from "../Components/ui/Navbar";
import { Footer } from "../Components/ui/Footer";
import { MainScreen } from "../Components/main/MainScreen";
import { ArticleScreen } from "../Components/articles/ArticleScreen";
import { LegislacionesScreen } from "../Components/LegislacionesScreen";

export const AppRouter = () => {
    return (
        <Router>
            <div className="app-router">
                <Navbar />

                <Switch>
                    <Route
                        exact
                        path="/article/:title"
                        component={ArticleScreen}
                    />

                    <Route path="/" component={MainScreen} />

                    <Route path="/" component={LegislacionesScreen} />

                    <Redirect to="/" />
                </Switch>

                <Footer />
            </div>
        </Router>
    );
};
