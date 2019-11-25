import React from "react";
import withTranslations from "Providers/translations/withTranslations";
import withTheme from "Providers/theme/withTheme";
import StyledPage from "../StyledPage";
import ChatArea from "Components/chat/ChatArea";
import MessageSender from "Components/MessageSender";

const ChatPage = () => (
    <StyledPage>
        <ChatArea />
        <MessageSender />
    </StyledPage>
);

export default withTranslations(withTheme(ChatPage));
