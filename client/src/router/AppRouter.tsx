import React, { FunctionComponent, Fragment } from "react";
import { HashRouter } from "react-router-dom";
import Navigation from "Components/navigation/Navigation";

export const AppRouter: FunctionComponent = () => {
    return (
        <HashRouter>
            <Fragment>
                <Navigation />
            </Fragment>
        </HashRouter>
    );
};

export default AppRouter;