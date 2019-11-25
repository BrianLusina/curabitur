import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import RadioGroup from "./RadioGroup";


describe("RadioGroup", () => {
    type Props = {
        leftRadioLabel: string;
        leftRadioValue: string;
        rightRadioLabel: string;
        rightRadioValue: string;
        radioGroupName: string;
        callback: (val: string) => void;
        isLeftChecked: boolean;
    };

    type State = {
        isChecked: boolean
    };

    let wrapper: ShallowWrapper<Props, State>;

    const props = {
        leftRadioLabel: "light",
        leftRadioValue: "",
        rightRadioLabel: "dark",
        rightRadioValue: "",
        radioGroupName: "themeSelector",
        callback: jest.fn(),
        isLeftChecked: true
    };

    beforeEach(() => {
        wrapper = shallow(<RadioGroup {...props} />);
    });

    it("should render", () => {
        expect(wrapper).not.toBe(null);
    });

    it("handleOnChange should update state can call prop function", () => {
        const event = {
            currentTarget: {
                value: "value"
            }
        };

        // @ts-ignore
        wrapper.instance().handleOnChange(event);

        expect(props.callback).toHaveBeenCalledTimes(1);
        expect(props.callback).toHaveBeenCalledWith("value");
        expect(wrapper.state().isChecked).toEqual(false);
    });
});