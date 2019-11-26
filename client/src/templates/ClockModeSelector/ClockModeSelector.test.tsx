import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import translations from "Translations/translations-mock";
import * as LocalStorage from "Storage/localStorageService";
import ClockMode from "./ClockModeSelector";

describe("ClockModeSelector", () => {
    type Props = {
        translations
    };

    let wrapper: ShallowWrapper<Props>;

    const props = {
        translations
    };

    let mock: jest.SpyInstance<string | null, [string]>;

    beforeEach(() => {
        wrapper = shallow(<ClockMode {...props}/>);
        mock = jest.spyOn(LocalStorage, "storeToLocalStorage");
    });

    it("should render", () => {
        expect(wrapper).not.toBe(null);
    });

    it("should trigger change in clock mode when handleCallback is called", () => {
        const clockMode = "12";

        // @ts-ignore
        wrapper.instance().handleCallback(clockMode);

        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledTimes(1);
        expect(mock).toHaveBeenCalledWith("clockMode", clockMode);
    });
});