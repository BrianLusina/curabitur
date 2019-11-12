import React, { createContext, Component, ReactNode } from "react";
import { readRecord } from "Storage/localStorageService";
import { lightTheme, darkTheme } from "./themes";

interface ThemeContext {
    primaryLightColor: string;
    secondaryLightColor: string;
    primaryDarkColor: string;
    secondaryDarkColor: string;
    messageBackgroundColor: string;
}

const themeContext = createContext<ThemeContext | any>(null);

const ContextProvider = themeContext.Provider;
export const ThemeContextConsumer = themeContext.Consumer;

type Props = {
    children: ReactNode
};

type State = {
    colorTheme: ThemeContext
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
            <ContextProvider value={{
                theme: this.state.colorTheme,
                changeTheme: this.handleThemeChange
            }}>
                { this.props.children }
            </ContextProvider>
        );
    }
}