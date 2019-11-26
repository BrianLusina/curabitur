import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import ThemeSelector from "./ThemeSelector";
import translations from "Translations/translations-mock";
import * as LocalStorage from "Storage/localStorageService";

describe("ThemeSelector", () => {
    type Props = {
        changeTheme: () => void,
        translations
    };

    let wrapper: ShallowWrapper<Props>;

    const props = {
        changeTheme: jest.fn(),
        translations
    };

    let mock: jest.SpyInstance<string | null, [string]>;

    beforeEach(() => {
        wrapper = shallow(<ThemeSelector {...props}/>);
        mock = jest.spyOn(LocalStorage, "storeToLocalStorage");
    });

    it("should render", () => {
        expect(wrapper).not.toBe(null);
    });

    it("should call changeTheme prop function and store to local storage when handleCallback instance method is called", () => {
        const theme = "light";

        // @ts-ignore
        wrapper.instance().handleCallback(theme);

        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledTimes(1);
        expect(mock).toHaveBeenCalledWith("theme", theme);

        expect(props.changeTheme).toHaveBeenCalledTimes(1);
    });
});