import React, { Component } from "react";
import RadioGroup from "Components/RadioGroup";
import { TranslationContextType } from "Providers/translations/types";
import { readRecord, storeToLocalStorage } from "Storage/localStorageService";
import StyledClockMode from "./StyledClockMode";

type Props = {
    translations: TranslationContextType
};

export default class ClockMode extends Component<Props> {

    handleCallback = (clockMode: string) => {
        storeToLocalStorage("clockMode", clockMode);
    };

    render() {
        const { translations } = this.props;
        return (
            <StyledClockMode>
                <label htmlFor="clockMode">{translations.clockDisplay}</label>
                <RadioGroup isLeftChecked={readRecord("clockMode") !== "24"}
                            radioGroupName={"clockMode"}
                            leftRadioLabel={translations.clockModes.hours12}
                            leftRadioValue={"12"}
                            rightRadioLabel={translations.clockModes.hours24}
                            rightRadioValue={"24"}
                            callback={this.handleCallback} />
            </StyledClockMode>
        );
    }
}