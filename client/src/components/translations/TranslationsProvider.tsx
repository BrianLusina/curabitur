import React, { Component, createContext, ReactNode } from "react";
import * as deTranslations from "Translations/de.json";
import * as enTranslations from "Translations/en.json";
import { readRecord } from "Storage/localStorageService";
export interface TranslationContext {
    clockDisplay: string;
    clockModes: {
      hours12: string;
      hours24: string;
    };
    colors: {
      color1: string;
      color2: string;
    };
    interfaceColor: string;
    langCode: string;
    langLabel: string;
    languageEN: string;
    languageDE: string;
    nav: {
      chatTabLabel: string,
      settingsTabLabel: string
    };
    resetButtonLabel: string;
    userName: string;
    ctrlEnterOptionsTitle: string;
    ctrlEnterSendingOptions: {
      option1: string;
      option2: string;
    };
}

const translationsContext = createContext<TranslationContext | any>(null);

type Props = {
    children: ReactNode
};

type State = {
    translations: TranslationContext
};

const Provider = translationsContext.Provider;
export const TranslationContextConsumer = translationsContext.Consumer;

export default class TranslationsProvider extends Component<Props, State> {
    state: State = {
        translations: readRecord("lang") !== "de" ? enTranslations : deTranslations
    };

    /**
     * Handle language change
     */
    handleLanguageChange = () => {
        this.setState({
            translations: this.state.translations.langCode === "DE" ? enTranslations : deTranslations
        });
    };

    render() {
        return (
            <Provider value={{
                translations: this.state.translations,
                changeLanguage: this.handleLanguageChange
            }}>
                { this.props.children }
            </Provider>
        );
    }
}

