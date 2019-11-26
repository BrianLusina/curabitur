import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import translations from "Translations/translations-mock";
import * as LocalStorage from "Storage/localStorageService";
import SendingOptions from "./SendingOptions";

describe("SendingOptions", () => {
    type Props = {
        translations
    };

    let wrapper: ShallowWrapper<Props>;

    const props = {
        translations
    };

    let mock: jest.SpyInstance<string | null, [string]>;

    beforeEach(() => {
        wrapper = shallow(<SendingOptions {...props}/>);
        mock = jest.spyOn(LocalStorage, "storeToLocalStorage");
    });

    it("should render", () => {
        expect(wrapper).not.toBe(null);
    });

    it("should trigger change in clock mode when handleCallback is called", () => {
        const ctrlEnterSending = "CTRL";

        // @ts-ignore
        wrapper.instance().handleCallback(ctrlEnterSending);

        expect(mock).toHaveBeenCalled();
        expect(mock).toHaveBeenCalledTimes(1);
        expect(mock).toHaveBeenCalledWith("ctrlEnterSending", ctrlEnterSending);
    });
});