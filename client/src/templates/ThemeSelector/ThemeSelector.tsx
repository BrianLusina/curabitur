import React, { Component } from "react";
import StyledThemeSelector from "./StyledThemeSelector";
import { TranslationContextType } from "Providers/translations/types";
import { readRecord, storeToLocalStorage } from "Storage/localStorageService";
import RadioGroup from "Components/RadioGroup";

type Props = {
    changeTheme: () => void,
    translations: TranslationContextType
};

export default class ThemeSelector extends Component<Props> {

    handleCallback = (value: string) => {
        storeToLocalStorage("theme", value);
        this.props.changeTheme();
    };

    render() {
        const { translations } = this.props;

        return (
            <StyledThemeSelector>
                <label htmlFor="themeSelector">{translations.interfaceColor}</label>
                <RadioGroup
                    isLeftChecked={readRecord("theme") !== "dark"}
                    radioGroupName={"themeSelector"}
                    leftRadioLabel={translations.colors.color1}
                    leftRadioValue={"light"}
                    rightRadioLabel={translations.colors.color2}
                    rightRadioValue={"dark"}
                    callback={this.handleCallback} />
            </StyledThemeSelector>
        );
    }
}