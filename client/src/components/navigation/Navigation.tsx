import React, { Component } from "react";
import { connect } from "react-redux";
import withTranslations from "Providers/translations/withTranslations";
import withTheme from "Providers/theme/withTheme";
import { ThemeContextType } from "Providers/theme/types";
import { TranslationContextType } from "Providers/translations/types";
import { AppState } from "Store/rootReducer";
import { Dispatch } from "redux";
import { connectSocketActionCreator } from "Store/socket/actionCreators";
import { getAllMessagesSelector, getUsernameSelector } from "Store/message/selectors";
import { Message } from "Store/message/types";
import { isPageActive } from "DomUtils";

type Props = {
    translations: TranslationContextType,
    theme: ThemeContextType,
    messages: Message[],
    username: string,
    connectToSockets: () => void
};

type State = {
    shouldBlink: boolean;
    unreadMessages: number;
    receivedUnreadMessages: Message[]
};

export class Navigation extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            shouldBlink: false,
            unreadMessages: 0,
            receivedUnreadMessages: []
        };
    }

    handleBlinking = () => {
        this.setState(prevState => ({
            ...prevState,
            shouldBlink: !prevState.shouldBlink
        }));
    };

    updateUnreadMessagesCount = () => {
        this.setState(prevState => ({
            ...prevState,
            unreadMessages: prevState.receivedUnreadMessages.length
        }));
    }

    clearNotifications = () => {
        this.setState(prevState => ({
            ...prevState,
            unreadMessages: 0,
            receivedUnreadMessages: []
        }));
        this.handleBlinking();
    };

    componentDidMount() {
        this.props.connectToSockets();
    }

    componentDidUpdate(prevProps: Props, prevState: State) {
        const { messages } = this.props;

        // && isPageActive("settings")
        if (prevProps.messages.length !== messages.length) {
            const lastMessage: Message = messages[messages.length - 1];
            this.setState({
                receivedUnreadMessages: [...prevState.receivedUnreadMessages, lastMessage]
            }, () => {
                this.handleBlinking();
                this.updateUnreadMessagesCount();
            });
        }
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

/**
 * Maps Redux state to component
 * @param {Object} state Redux state tree
 * @returns {Object} object with keys as objects in redux store
 */
const mapStateToProps = (state: AppState) => ({
    messages: getAllMessagesSelector(state),
    username: getUsernameSelector(state)
});


/**
 * Connect dispatch actions to component to allow updating of state
 * @param {Function} dispatch store function to dispatch to update state
 * @returns {Object} object with keys as dispatch actions
 */
const mapDispatchToProps = (dispatch: Dispatch) => ({
    connecToSockets: () => dispatch(connectSocketActionCreator())
});

// @ts-ignore
export default withTranslations(withTheme(connect(mapStateToProps, mapDispatchToProps)(Navigation)));