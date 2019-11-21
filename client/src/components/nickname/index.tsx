import React from "react";
import StyledNickname from "./StyledNickname";

type Props = {
    value: string
};

const Nickname = ({ value }: Props) => (
    <StyledNickname>
        { value }
    </StyledNickname>
);

export default Nickname;