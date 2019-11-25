import React from "react";
import StyledPage from "../StyledPage";
import withTranslations from "Providers/translations/withTranslations";
import withTheme from "Providers/theme/withTheme";
import { ThemeContextType } from "Providers/theme/types";
import { TranslationContextType } from "Providers/translations/types";

type Props = {
    changeLanguage: () => void,
    changeTheme: () => void,
    translations: TranslationContextType,
    theme: ThemeContextType
};

const SettingsPage = (props: Props) => {
    return (
        <StyledPage>
            <div />
        </StyledPage>
    );
};

// @ts-ignore
export default withTranslations(withTheme(SettingsPage));
