import React, { Component, ReactNode } from "react";
import { readRecord } from "Storage/localStorageService";
import { lightTheme, darkTheme } from "./themes";
import { ThemeContextType } from "./types";
import ThemeContext from "./context";

type Props = {
    children: ReactNode
};

type State = {
    colorTheme: ThemeContextType
};

export default class ThemeProvider extends Component<Props, State> {
    state: State = {
        colorTheme: readRecord("theme") !== "dark" ? lightTheme : darkTheme
    };

    /**
     * Handles the change of a theme in the application
     */
    handleThemeChange = () => {
        this.setState({
            colorTheme: this.state.colorTheme === lightTheme ? darkTheme : lightTheme
        });
    }

    render() {
        return (
            <ThemeContext.Provider value={{
                theme: this.state.colorTheme,
                changeTheme: this.handleThemeChange
            }}>
                { this.props.children }
            </ThemeContext.Provider>
        );
    }
}