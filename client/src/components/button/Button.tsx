import React from "react";
import StyledButton from "./StyledButton";

type Props = {
    text: string,
    handleClick: () => void
};

const Button = (props: Props) => {
    const { text, handleClick } = props;
    return (
        <StyledButton>
            <button onClick={handleClick}>{text}</button>
        </StyledButton>
    );
};

export default Button;