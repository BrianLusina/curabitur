import React, { Component, FunctionComponent, ComponentClass } from "react";
import ThemeContext from "./context";

/**
 * HoC that wraps a component and gives the component access to theme context
 * @param {Component} WrappedComponent Wrapped Component
 */
export default function withTheme(WrappedComponent: ComponentClass | FunctionComponent) {
    return class extends Component {
        render() {
            return (
                <ThemeContext.Consumer>
                    {
                        value => (
                            // @ts-ignore
                            <WrappedComponent
                                {...this.props}
                                changeTheme={value.changeTheme}
                                theme={value.theme}
                            />
                        )
                    }
                </ThemeContext.Consumer>
            );
        }
    };
}