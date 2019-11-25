import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import ChatPage from "./ChatPage";
import translations from "Translations/translations-mock";

describe("ChatPage", () => {
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
        wrapper = shallow(<ChatPage {...props}/>);
    });

    it("renders without crashing", () => {
        expect(wrapper).not.toBe(null);
    });
});
