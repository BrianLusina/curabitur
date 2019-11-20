import React, { FunctionComponent } from "react";
import { HashRouter, withRouter, Switch, Route } from "react-router-dom";
import Navigation from "Components/navigation/Navigation";
import ChatPage from "Pages/chat/ChatPage";

// @ts-ignore
const BlockedNavigation = withRouter(Navigation);

export const AppRouter: FunctionComponent = () => {
    return (
        <HashRouter>
            <>
                <BlockedNavigation />
                <Switch>
                    <Route exact={true} path="/" component={ChatPage} />
                </Switch>
            </>
        </HashRouter>
    );
};

export default AppRouter;