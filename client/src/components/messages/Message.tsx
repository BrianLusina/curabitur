import React from "react";
// @ts-ignore
import Emojify from "react-emojione";
// @ts-ignore
import MicrolinkCard from "@microlink/react";
// @ts-ignore
import Linkify from "linkifyjs/react";
import getUrls from "get-urls";
import { Message as MessageType } from "Store/message/types";
import Timestamp from "../timestamp";
import Nickname from "../nickname";
import StyledMessage from "./StyledMessage";

type Props = {
    message: MessageType
};

/**
 * Message Component used to display a single Message
 * @param props Props to Pass to Message Component
 */
const Message = (props: Props) => {
    const { message } = props;

    const parsedUrls = (text: string) => {
        const urls = getUrls(text);

        if (!urls.size) {
            return;
        }

        const parsedUrls = Array.from(urls).map((url: string, index: number) => (
            <MicrolinkCard url={url} key={index} />
        ));

        return <>{parsedUrls}</>;
    };

    return (
        <>
            <div id="nickname-container">
                {
                    message.type === "received"
                        && <Nickname  value={message.from}/>
                }
                <Timestamp value={message.time} floatToRight={message.type === "sent"} />
            </div>
            <StyledMessage type={message.type || "sent"}>
                <Linkify>
                    <Emojify>
                        {message.content} { parsedUrls(message.content)}
                    </Emojify>
                </Linkify>
            </StyledMessage>
        </>
    );
};


export default Message;
