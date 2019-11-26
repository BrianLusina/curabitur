import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import translations from "Translations/translations-mock";
import * as LocalStorage from "Storage/localStorageService";
import LanguageSelector from "./LanguageSelector";

describe("LanguageSelector", () => {
    type Props = {
        translations,
        changeLanguage: () => void
    };

    let wrapper: ShallowWrapper<Props>;

    const props = {
        translations,
        changeLanguage: jest.fn()
    };

    let mock: jest.SpyInstance<string | null, [string]>;

    beforeEach(() => {
        wrapper = shallow(<LanguageSelector {...props}/>);
        mock = jest.spyOn(LocalStorage, "storeToLocalStorage");
    });

    it("should render", () => {
        expect(wrapper).not.toBe(null);
    });

    it("should tigger prop changeLanguage function when handleChangeLanguage is called", () => {
        const language = "English";
        const event = {
            currentTarget: {
                value: language
            }
        };

        // @ts-ignore
        wrapper.instance().handleLanguageChange(event);

        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledTimes(1);
        expect(mock).toHaveBeenCalledWith("lang", language);
        expect(props.changeLanguage).toHaveBeenCalled();
    });
});