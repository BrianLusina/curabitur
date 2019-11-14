import React, { Component, ReactNode } from "react";
import * as deTranslations from "Translations/de.json";
import * as enTranslations from "Translations/en.json";
import { readRecord } from "Storage/localStorageService";
import TranslationContext from "./context";
import { TranslationContextType } from "./types";

type Props = {
    children: ReactNode
};

type State = {
    translations: TranslationContextType
};

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
            <TranslationContext.Provider value={{
                translations: this.state.translations,
                changeLanguage: this.handleLanguageChange
            }}>
                { this.props.children }
            </TranslationContext.Provider>
        );
    }
}

