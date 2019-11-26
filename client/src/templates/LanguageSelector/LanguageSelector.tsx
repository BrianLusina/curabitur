import React, { Component, ChangeEvent } from "react";
import StyledLanguageSelector from "./StyledLanguageSelector";
import { TranslationContextType } from "Providers/translations/types";
import { storeToLocalStorage, readRecord } from "Storage/localStorageService";

type Props = {
    translations: TranslationContextType,
    changeLanguage: () => void
};

export default class LanguageSelect extends Component<Props> {
    handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
        storeToLocalStorage("lang", e.currentTarget.value);
        this.props.changeLanguage();
    };


    render() {
        const { translations } = this.props;

        return (
            <StyledLanguageSelector>
                <label htmlFor="language">{translations.langLabel}</label>
                <select id="language" onChange={this.handleLanguageChange} defaultValue={readRecord("lang") || "en"}>
                    <option value="en">{translations.languageEN}</option>
                    <option value="de">{translations.languageDE}</option>
                </select>
            </StyledLanguageSelector>
        );
    }
}