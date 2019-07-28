/*eslint-disable */
import thunk from "redux-thunk";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import {
    createLogger
} from "redux-logger";

// TODO: set logger options:
// refer to https://github.com/evgenyrodionov/redux-logger
const logger = createLogger({
    diff: true
});

export const prodMiddleware = [
    thunk,
];

// middleware to use based on the staging environment, this will be used when the staging environment
// will be in development (run locally), but targeting a staging server
// @ts-ignore
export const devMiddleware = prodMiddleware.concat([reduxImmutableStateInvariant(), logger]);