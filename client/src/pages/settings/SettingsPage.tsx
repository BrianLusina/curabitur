import React from "react";
import StyledPage from "../StyledPage";
import withTranslations from "Providers/translations/withTranslations";
import withTheme from "Providers/theme/withTheme";
import { ThemeContextType } from "Providers/theme/types";
import { TranslationContextType } from "Providers/translations/types";
import UserProfile from "Templates/UserProfile";
import ThemeSelector from "Templates/ThemeSelector";
import ClockModeSelector from "Templates/ClockModeSelector";
import SendingOptions from "Templates/SendingOptions";

type Props = {
    changeLanguage: () => void,
    changeTheme: () => void,
    translations: TranslationContextType,
    theme: ThemeContextType
};

const SettingsPage = (props: Props) => {
    const { translations, changeTheme } = props;

    return (
        <StyledPage>
            <UserProfile translations={translations} />
            <ThemeSelector translations={translations} changeTheme={changeTheme} />
            <ClockModeSelector translations={translations} />
            <SendingOptions translations={translations}/>
        </StyledPage>
    );
};

// @ts-ignore
export default withTranslations(withTheme(SettingsPage));
