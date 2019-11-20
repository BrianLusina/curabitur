import React, { ReactElement } from "react";
import StyledUnreadMessagesCounter from "./StyledUnreadMessagsCounter";

type Props = {
    count: number
};

/**
 * Counter for unread messages. This will be used to display how many messages have
 * not been displayed. Due to how Typescript handles Functional components that render
 * based on conditions, this has been casted to a ReactElement to allow it to render
 * Refer to issue https://github.com/microsoft/TypeScript/issues/21699
 * @param props Properties to pass down to component
 */
const UnreadMessagesCounter = (props: Props) => {
    const { count } = props;
    return (
        count > 0 && <StyledUnreadMessagesCounter>
            { count }
        </StyledUnreadMessagesCounter>
    ) as ReactElement;
};

export default UnreadMessagesCounter;