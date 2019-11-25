import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { UserProfile } from "./UserProfile";
import translations from "Translations/translations-mock";
import * as LocalStorage from "Storage/localStorageService";

describe("UserProfile", () => {
    type Props = {
        translations,
        changeUsername: (username: string) => void
    };

    type State = {
        username: string
    };

    let wrapper: ShallowWrapper<Props, State>;

    const props = {
        translations,
        changeUsername: jest.fn()
    };

    let mock: jest.SpyInstance<string | null, [string]>;

    beforeEach(() => {
        wrapper = shallow(<UserProfile {...props}/>);
    });

    it("renders without crashing", () => {
        expect(wrapper).not.toBe(null);
    });

    it("should have username as guest0001 on initial render when username key is not found", () => {
        expect(wrapper.state().username).toEqual("guest0001");
    });

    it("should change username when handleUsernameChange instance method is triggered", () => {
        mock = jest.spyOn(LocalStorage, "storeToLocalStorageDebounced");

        const event = {
            currentTarget: {
                value: "Jack"
            }
        };

        // @ts-ignore
        wrapper.instance().handleUsernameChange(event);

        expect(wrapper.state().username).toEqual("Jack");

        expect(mock).toHaveBeenCalledTimes(1);
        expect(mock).toHaveBeenCalledWith("username", "Jack");

        expect(props.changeUsername).toHaveBeenCalledTimes(1);
        expect(props.changeUsername).toHaveBeenCalledWith("Jack");
    });

    it("should render input field with username in it", () => {
        const instance = wrapper.instance();

        instance.setState({ username: "guest0001" }, () => {
          expect(wrapper.find("input").props().value).toBe("guest0001");
        });
    });

    it("should be able to change user name", () => {
        const instance = wrapper.instance();

        // @ts-ignore
        const spy = jest.spyOn(instance, "handleUsernameChange");

        wrapper.find("input").simulate("change", { currentTarget: { value: "guest0001" } });

        setTimeout(() => {
          expect(spy).toHaveBeenCalledTimes(1);
        });
    });
});
