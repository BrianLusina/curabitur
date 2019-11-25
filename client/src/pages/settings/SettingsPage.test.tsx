import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import SettingsPage from "./SettingsPage";
import translations from "Translations/translations-mock";

describe("SettingsPage", () => {
    type Props = {
        changeLanguage: () => void,
        changeTheme: () => void,
        translations,
        theme: {}
    };

    let wrapper: ShallowWrapper<Props>;

    const props = {
        changeLanguage: jest.fn(),
        changeTheme: jest.fn(),
        translations,
        theme: {}
    };

    beforeEach(() => {
        wrapper = shallow(<SettingsPage {...props}/>);
    });

    it("renders without crashing", () => {
        expect(wrapper).not.toBe(null);
    });
});
