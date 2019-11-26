import React, { Component } from "react";
import RadioGroup from "Components/RadioGroup";
import { TranslationContextType } from "Providers/translations/types";
import { readRecord, storeToLocalStorage } from "Storage/localStorageService";
import StyledSendingOptions from "./StyledSendingOptions";

type Props = {
    translations: TranslationContextType
};

export default class SendingOptions extends Component<Props> {

    handleCallback = (sendingOptions: string) => {
        storeToLocalStorage("ctrlEnterSending", sendingOptions);
    };

    render() {
        const { translations } = this.props;
        return (
            <StyledSendingOptions>
                <label htmlFor="ctrlEnterOptionsTitle">{translations.ctrlEnterOptionsTitle}</label>
                <RadioGroup isLeftChecked={readRecord("ctrlEnterSending") === "On"}
                    radioGroupName={"ctrlEnterOptions"}
                    leftRadioLabel={translations.ctrlEnterSendingOptions.option1}
                    leftRadioValue={translations.ctrlEnterSendingOptions.option1}
                    rightRadioLabel={translations.ctrlEnterSendingOptions.option2}
                    rightRadioValue={translations.ctrlEnterSendingOptions.option2}
                    callback={this.handleCallback} />
            </StyledSendingOptions>
        );
    }
}