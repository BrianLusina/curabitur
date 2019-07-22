import React, { Fragment } from "react";
import { Provider } from "react-redux";
import App from "./App";
import { shape } from "prop-types";

const Root = ({store}: any) => (
    <Provider store={store}>
        <Fragment>
            <App/>
        </Fragment>
    </Provider>
);

Root.propTypes = {
    store: shape({}).isRequired
};

export default Root;