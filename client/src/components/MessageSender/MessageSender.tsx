import React, { Component, createRef, FormEvent } from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { readRecord } from "Storage/localStorageService";
import { getTime12hours, getTime24Hours } from "TimeUtils";
import { sendMessageActionCreator } from "Store/message/actionCreators";
// import * as actions from "Store/message/actionCreators";
import { Message } from "Store/message/types";
import StyledMessageSender from "./StyledMessageSender";
import { KEY_CODES } from "./constants";

interface MessageSenderDispatchProps {
    sendMessage: (message: Message) => void;
}

type Props = {
    sendMessage: (message: Message) => void,
    // actions: {
    //     sendMessageActionCreator: (message: Message) => void
    // },
};

type State = {
    username: string,
    chatmessage: string
};

export class MessageSender extends Component<Props, State> {
    messageInputRef: React.RefObject<HTMLElement>;
    pressedKeysMap: {} = {};

    constructor(props: Props) {
        super(props);
        this.state = {
            username: readRecord("username") || "guest001",
            chatmessage: ""
        };
        this.messageInputRef = createRef<HTMLElement>();
    }

    getTime = (): string => {
        return readRecord("clockMode") === "12" ? getTime12hours() : getTime24Hours();
    };

    sendChatMessage = () => {
        const { username, chatmessage } = this.state;

        if (chatmessage !== "") {
            this.props.sendMessage({
                from: username,
                content: chatmessage,
                time: this.getTime()
            });
        }
    };

    clearMessageInput = () => {
        this.setState({
            chatmessage: ""
        });

        this.focusTextInput();
    };

    focusTextInput = () => {
        if (this.messageInputRef.current) {
            this.messageInputRef.current.focus();
        }
    };

    handleClick = () => {
        this.sendChatMessage();
        this.clearMessageInput();
    };

    handleOnChange = (e: FormEvent<HTMLInputElement>) => {
        this.setState({
            chatmessage: e.currentTarget.value
        });
    };

    handleKeyPress = (e: KeyboardEvent) => {
        // @ts-ignore
        this.pressedKeysMap[e.key] = e.type === "keydown";

        if (readRecord("ctrlEnterSending") === "On") {
            this.sendOnPressCtrlEnter();
        } else {
            this.sendOnPressEnter();
        }
    };

    sendOnPressCtrlEnter = () => {
        const values = Object.values(this.pressedKeysMap);

        if (values.indexOf(KEY_CODES.CTRL) !== -1 && values.indexOf(KEY_CODES.ENTER) !== -1) {
            this.sendChatMessage();
            this.clearMessageInput();
        }
    };

    sendOnPressEnter = () => {
        const values = Object.values(this.pressedKeysMap);

        if (values.indexOf(KEY_CODES.ENTER) !== -1 && values.indexOf(KEY_CODES.CTRL) === -1) {
            this.sendChatMessage();
            this.clearMessageInput();
        }
    };

    handleKeyUp = () => {
        this.pressedKeysMap = {};
    };

    render() {
        const { chatmessage } = this.state;

        return (
            <StyledMessageSender>
                <input
                    id="send-message-input"
                    type="text"
                    // @ts-ignore
                    ref={this.messageInputRef}
                    value={chatmessage}
                    onChange={this.handleOnChange}
                />

                <button
                    id="send-message-btn"
                    onClick={this.handleClick}>
                        <FontAwesomeIcon icon={faPaperPlane} color="white" size="2x"/>
                </button>
            </StyledMessageSender>
        );
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress);
        document.addEventListener("keyup", this.handleKeyUp);
    }

    componentWillUnmount(): void {
        document.removeEventListener("keydown", this.handleKeyPress);
        document.removeEventListener("keyup", this.handleKeyUp);
    }
}


const mapDispatchToProps = (dispatch: Dispatch): MessageSenderDispatchProps => ({
    sendMessage: (message: Message) => dispatch(sendMessageActionCreator(message)),
    // actions: bindActionCreators(actions, dispatch)
});

export default connect(null, mapDispatchToProps)(MessageSender);