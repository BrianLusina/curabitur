import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { shape } from "prop-types";

const Root = ({store}: any) => (
    <Provider store={store}>
        <App/>
    </Provider>
);

Root.propTypes = {
    store: shape({}).isRequired,
};

export default Root;