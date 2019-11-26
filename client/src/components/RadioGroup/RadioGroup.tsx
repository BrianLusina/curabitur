import React, { Component, FormEvent } from "react";
import StyledRadioGroup from "./StyledRadioGroup";

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

export default class RadioGroup extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isChecked: props.isLeftChecked
        };
    }

    // static getDerivedStateFromProps(props: Props, state: State): State | null {
    //     const isLeftChecked = props.isLeftChecked;

    //     if (isLeftChecked !== state.isChecked) {
    //         return {
    //             isChecked: isLeftChecked
    //         };
    //     }

    //     return null;
    // }

    handleOnChange = (e: FormEvent<HTMLInputElement>) => {
        this.props.callback(e.currentTarget.value);
        this.setState(prevState => {
            return {
                isChecked: !prevState.isChecked
            };
        });
    };

    render() {
        const {
            leftRadioLabel,
            leftRadioValue,
            rightRadioLabel,
            rightRadioValue,
            radioGroupName
        } = this.props;

        const { isChecked} = this.state;

        return (
            <StyledRadioGroup>
                <div>
                    <input checked={isChecked}
                            radioGroup={radioGroupName}
                            type="radio"
                            id={leftRadioLabel}
                            name={radioGroupName}
                            value={leftRadioValue}
                            onChange={this.handleOnChange}/>
                    <label htmlFor={leftRadioLabel}>{leftRadioLabel}</label>
                </div>
                <div>
                    <input checked={!isChecked}
                            type="radio"
                            radioGroup={radioGroupName}
                            id={rightRadioLabel}
                            name={radioGroupName}
                            value={rightRadioValue}
                            onChange={this.handleOnChange}/>
                    <label htmlFor={rightRadioLabel}>{rightRadioLabel}</label>
                </div>
            </StyledRadioGroup>
        );
    }
}
