import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import StyledChatArea from "./StyledChatArea";
import Message from "Components/messages/Message";
import { scrollToBottom } from "DomUtils";
import { Message as MessageType } from "Store/message/types";
import { AppState } from "Store/rootReducer";
import { getAllMessagesSelector } from "Store/message/selectors";

type Props = {
    messages: MessageType[]
};

export class ChatArea extends Component<Props> {
    chatAreaRef: React.RefObject<HTMLElement>;

    constructor(props: Props) {
        super(props);
        this.chatAreaRef = createRef<HTMLElement>();
    }

    componentDidUpdate() {
        // @ts-ignore
        const chatAreaElement: HTMLElement = this.chatAreaRef.current;
        const shouldScroll: boolean = chatAreaElement.scrollTop + chatAreaElement.clientHeight !== chatAreaElement.scrollHeight;

        if (shouldScroll) {
            scrollToBottom(chatAreaElement);
        }
    }

    render() {
        const { messages } = this.props;
        return (
            <StyledChatArea ref={this.chatAreaRef}>
                {
                    messages.map((message, idx) => {
                        return (
                            <Message key={idx} message={message}/>
                        );
                    })
                }
            </StyledChatArea>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    messages: getAllMessagesSelector(state)
});

export default connect(mapStateToProps)(ChatArea);

