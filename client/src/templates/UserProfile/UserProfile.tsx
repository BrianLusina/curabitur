import React, { Component, FormEvent } from "react";
import { connect } from "react-redux";
import StyledUserProfile from "./StyledUserProfile";
import { TranslationContextType } from "Providers/translations/types";
import { Dispatch } from "redux";
import { changeUsernameActionCreator } from "Store/message/actionCreators";
import { readRecord, storeToLocalStorageDebounced } from "Storage/localStorageService";

type Props = {
    translations: TranslationContextType,
    changeUsername: (username: string) => void;
};

type State = {
    username: string
};

export class UserProfile extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            username: readRecord("username") || "guest0001"
        };
    }

    handleUsernameChange = (e: FormEvent<HTMLInputElement>) => {
        const username = e.currentTarget.value;

        this.setState({
            username
        });

        storeToLocalStorageDebounced("username", username);
        this.props.changeUsername(username);
    };

    render() {
        const { translations } = this.props;
        const { username } = this.state;

        return (
            <StyledUserProfile>
                <label htmlFor="username"> {translations.userName} </label>
                <input type="text" name="username" value={username} onChange={this.handleUsernameChange} />
            </StyledUserProfile>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeUsername: (username: string) => dispatch(changeUsernameActionCreator(username))
});

export default connect(null, mapDispatchToProps)(UserProfile);