import React, { Component } from "react";
import withTranslations from "Providers/translations/withTranslations";
import withTheme from "Providers/theme/withTheme";
import { ThemeContextType } from "Providers/theme/types";
import { TranslationContextType } from "Providers/translations/types";

type Props = {
    translations: TranslationContextType,
    theme: ThemeContextType
};

type State = {
    shouldBlink: boolean;
    unreadMessages: number;
};

export class Navigation extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            shouldBlink: false,
            unreadMessages: 0
        };
    }

    componentDidMount() {}

    render() {
        return (
            <div>
            </div>
        );
    }
}

// @ts-ignore
export default withTranslations(withTheme(Navigation));